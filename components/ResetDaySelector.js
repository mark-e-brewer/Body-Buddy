import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { patchResetDay, postResetDay } from '../API/apiData';

const initialState = {
  resetDay: 'Sunday',
};

export default function SetResetDay({ dayArr, onUpdate }) {
  const [input, setInput] = useState(initialState);
  const { user } = useAuth();

  useEffect(() => {
    if (dayArr[0]?.firebaseKey) {
      setInput(dayArr[0]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dayArr]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.firebaseKey) {
      const patchPayload = { ...input };
      patchResetDay(patchPayload).then(() => {
        onUpdate();
      });
    } else {
      const payload = { ...input, userUid: user.uid };
      postResetDay(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        patchResetDay(patchPayload).then(() => {
          onUpdate();
        });
      });
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center reset-day">
        <h3 className="reset-day-text">Weekly reset day :</h3>
        <div style={{ width: '300px' }}>
          <Form onSubmit={handleSubmit}>
            <div className="d-flex align-content-center">
              <Form.Select
                aria-label="Reset Day"
                name="resetDay"
                onChange={handleChange}
                value={input.resetDay}
                className="reset-day-input"
                style={{
                  width: '140px',
                }}
              >
                <option value="Sunday">Sunday</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednsday">Wednsday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
              </Form.Select>
              <Button type="submit" className="reset-day-submit">
                <FontAwesomeIcon icon={faCheck} />
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

SetResetDay.propTypes = {
  dayArr: PropTypes.arrayOf(PropTypes.shape),
  onUpdate: PropTypes.func.isRequired,
};

SetResetDay.defaultProps = {
  dayArr: initialState,
};
