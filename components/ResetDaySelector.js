import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import { useAuth } from '../utils/context/authContext';
import { patchResetDay, postResetDay } from '../API/apiData';

const initialState = {
  resetDay: 'Sunday',
};

export default function SetResetDay({ dayObj, onUpdate }) {
  const [input, setInput] = useState(initialState);
  const { user } = useAuth();

  useEffect(() => {
    if (dayObj.firebaseKey) {
      setInput(dayObj.resetDay);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dayObj.firebaseKey) {
      patchResetDay(input).then(() => {
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
        <h3 className="reset-day-text">Weekly reset day:</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Select
            aria-label="Reset Day"
            name="resetDay"
            onChange={handleChange}
            value={input.resetDay}
            className="reset-day-input"
          >
            <option value="Sunday">Sunday</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednsday">Wednsday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
          </Form.Select>
        </Form>
      </div>
    </>
  );
}

SetResetDay.propTypes = {
  dayObj: PropTypes.shape({
    resetDay: PropTypes.string,
    firebaseKey: PropTypes.string,
    userUid: PropTypes.string,
  }),
  onUpdate: PropTypes.func.isRequired,
};

SetResetDay.defaultProps = {
  dayObj: initialState,
};
