import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Button, FloatingLabel } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { patchWorkout, postWorkout } from '../../API/apiData';

const initialState = {
  backSets: 0,
  bicepSets: 0,
  calveSets: 0,
  chestSets: 0,
  day: 'Sunday',
  frontDeltSets: 0,
  gluteSets: 0,
  hamstringSets: 0,
  quadSets: 0,
  rearSideDeltSets: 0,
  tricepSets: 0,
  trapSets: 0,
};

export default function MobileLogSubmit({ workoutObj, weekId, resetLog }) {
  const [show, setShow] = useState(false);
  const [formInput, setFormInput] = useState(initialState);
  const { user } = useAuth();

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (workoutObj.firebaseKey) {
      setFormInput(workoutObj);
    }
  }, [workoutObj]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      backSets: formInput.back, bicepSets: formInput.bicep, calveSets: formInput.calve, chestSets: formInput.chest, frontDeltSets: formInput.frontDelt, gluteSets: formInput.glute, hamstringSets: formInput.hamstring, quadSets: formInput.quad, rearSideDeltSets: formInput.rearSideDelt, tricepSets: formInput.tricep, trapSets: formInput.trap, day: formInput.day, weekUid: weekId, userUid: user.uid,
    };
    postWorkout(payload).then(({ name }) => {
      const patchPayload = { firebaseKey: name };
      patchWorkout(patchPayload).then(() => {
        resetLog();
        handleClose();
      });
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <button
        type="button"
        className="mobile-log-modalOpen"
        id="openMobileModal"
        onClick={handleShow}
      >
        Log to Current Week
      </button>
      <Modal centered size="sm" show={show} onHide={handleClose}>
        <div className="mobile-form d-flex justify-content-center">
          <Modal.Body className="mobile-form-body">
            <Form onSubmit={handleSubmit}>
              <FloatingLabel label="Day of The Week" className="mobile-floating-label">
                <Form.Select
                  aria-label="Week Day"
                  name="day"
                  onChange={handleChange}
                  value={formInput.day}
                  className="mobile-form-input"
                >
                  <option value="Sunday">Sunday</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                </Form.Select>
              </FloatingLabel>
              <div className="d-flex justify-content-center">
                <Button className="mobile-form-submit" type="submit">Submit</Button>
              </div>
            </Form>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
}

MobileLogSubmit.propTypes = {
  workoutObj: PropTypes.shape({
    back: PropTypes.number,
    bicep: PropTypes.number,
    calve: PropTypes.number,
    chest: PropTypes.number,
    day: PropTypes.string,
    firebaseKey: PropTypes.string,
    frontDelt: PropTypes.number,
    glute: PropTypes.number,
    hamstring: PropTypes.number,
    quad: PropTypes.number,
    rearSideDelt: PropTypes.number,
    tricep: PropTypes.number,
    trap: PropTypes.number,
    userUid: PropTypes.string,
    weekUid: PropTypes.string,
  }).isRequired,
  weekId: PropTypes.string.isRequired,
  resetLog: PropTypes.func.isRequired,
};
