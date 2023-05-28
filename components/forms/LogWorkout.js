import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FloatingLabel } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { postWorkout, patchWorkout } from '../../API/apiData';

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
};

export default function LogWorkoutModal({
  obj, buttonText, background, color, border, weekUidProp, textSize, onUpdate, marginTop,
}) {
  const [show, setShow] = useState(false);
  const [formInput, setFormInput] = useState(initialState);
  const { user } = useAuth();

  useEffect(() => {
    if (obj.firebaseKey) {
      setFormInput(obj);
    }
  }, [obj]);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const parsedValue = name === 'day' ? value : parseInt(value, 10);
    setFormInput((prevState) => ({
      ...prevState,
      [name]: parsedValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      patchWorkout(formInput).then(() => {
        onUpdate();
        handleClose();
      });
    } else {
      const payload = {
        ...formInput, userUid: user.uid, weekUid: weekUidProp,
      };
      postWorkout(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        patchWorkout(patchPayload).then(() => {
          setShow(false);
          setFormInput(initialState);
          onUpdate();
          handleClose();
        });
      });
    }
  };

  return (
    <>
      <Button
        variant="warning"
        className="workoutModal-btn"
        onClick={handleShow}
        style={{
          backgroundColor: background,
          color,
          border,
          fontSize: textSize,
          marginTop,
        }}
      >
        {buttonText}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <div className="workout-form">
          {/* <Modal.Header closeButton className="workout-form-header">
            <h3>{obj.firebaseKey ? 'Update' : 'Log'} Workout</h3>
          </Modal.Header> */}
          <Modal.Body className="workout-form-body">
            <Form onSubmit={handleSubmit}>
              <FloatingLabel controlId="floatingInput3" label="Week Day" className="mb-2 workout-floating-label" style={{ color: 'black' }}>
                <Form.Select
                  aria-label="Week Day"
                  name="day"
                  onChange={handleChange}
                  value={formInput.day}
                  className="workout-input workout-input-1"
                >
                  <option value="Sunday">Sunday</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednsday">Wednsday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                </Form.Select>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput3" label="Front Deltoid Sets" className="mb-2 workout-floating-label" style={{ color: 'black' }}>
                <Form.Select
                  aria-label="Front Deltoids"
                  name="frontDeltSets"
                  onChange={handleChange}
                  value={formInput.frontDeltSets}
                  className="workout-input workout-input-2"
                >
                  {Array.from({ length: 31 }, (_, i) => i).map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput3" label="Side & Rear Deltoid Sets" className="mb-2 workout-floating-label" style={{ color: 'black' }}>
                <Form.Select
                  aria-label="Side & Rear Deltoids"
                  name="rearSideDeltSets"
                  onChange={handleChange}
                  value={formInput.rearSideDeltSets}
                  className="workout-input workout-input-3"
                >
                  {Array.from({ length: 31 }, (_, i) => i).map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput3" label="Back Sets" className="mb-2 workout-floating-label" style={{ color: 'black' }}>
                <Form.Select
                  aria-label="Back"
                  name="backSets"
                  onChange={handleChange}
                  value={formInput.backSets}
                  className="workout-input workout-input-4"
                >
                  {Array.from({ length: 31 }, (_, i) => i).map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput3" label="Chest Sets" className="mb-2 workout-floating-label" style={{ color: 'black' }}>
                <Form.Select
                  aria-label="Chest"
                  name="chestSets"
                  onChange={handleChange}
                  value={formInput.chestSets}
                  className="workout-input workout-input-5"
                >
                  {Array.from({ length: 31 }, (_, i) => i).map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput3" label="Bicep Sets" className="mb-2 workout-floating-label" style={{ color: 'black' }}>
                <Form.Select
                  aria-label="Biceps"
                  name="bicepSets"
                  onChange={handleChange}
                  value={formInput.bicepSets}
                  className="workout-input workout-input-6"
                >
                  {Array.from({ length: 31 }, (_, i) => i).map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput3" label="Tricep Sets" className="mb-2 workout-floating-label" style={{ color: 'black' }}>
                <Form.Select
                  aria-label="Triceps"
                  name="tricepSets"
                  onChange={handleChange}
                  value={formInput.tricepSets}
                  className="workout-input workout-input-7"
                >
                  {Array.from({ length: 31 }, (_, i) => i).map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput3" label="Quadricep Sets" className="mb-2 workout-floating-label" style={{ color: 'black' }}>
                <Form.Select
                  aria-label="Quadriceps"
                  name="quadSets"
                  onChange={handleChange}
                  value={formInput.quadSets}
                  className="workout-input workout-input-8"
                >
                  {Array.from({ length: 31 }, (_, i) => i).map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput3" label="Hamstring Sets" className="mb-2 workout-floating-label" style={{ color: 'black' }}>
                <Form.Select
                  aria-label="Hamstrings"
                  name="hamstringSets"
                  onChange={handleChange}
                  value={formInput.hamstringSets}
                  className="workout-input workout-input-9"
                >
                  {Array.from({ length: 31 }, (_, i) => i).map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput3" label="Glute Sets" className="mb-2 workout-floating-label" style={{ color: 'black' }}>
                <Form.Select
                  aria-label="Glutes"
                  name="gluteSets"
                  onChange={handleChange}
                  value={formInput.gluteSets}
                  className="workout-input workout-input-10"
                >
                  {Array.from({ length: 31 }, (_, i) => i).map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput3" label="Calve Sets" className="mb-2 workout-floating-label" style={{ color: 'black' }}>
                <Form.Select
                  aria-label="Calves"
                  name="calveSets"
                  onChange={handleChange}
                  value={formInput.calveSets}
                  className="workout-input workout-input-11"
                >
                  {Array.from({ length: 31 }, (_, i) => i).map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
              <div className="d-flex justify-content-center">
                <Button className="workout-submit-button" type="submit">{obj.firebaseKey ? 'Update' : 'Submit'}</Button>
              </div>
            </Form>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
}

LogWorkoutModal.propTypes = {
  obj: PropTypes.shape({
    backSets: PropTypes.number,
    bicepSets: PropTypes.number,
    calveSets: PropTypes.number,
    chestSets: PropTypes.number,
    day: PropTypes.string,
    firebaseKey: PropTypes.string,
    frontDeltSets: PropTypes.number,
    gluteSets: PropTypes.number,
    hamstringSets: PropTypes.number,
    quadSets: PropTypes.number,
    rearSideDeltSets: PropTypes.number,
    tricepSets: PropTypes.number,
    userUid: PropTypes.string,
    weekUid: PropTypes.string,
  }),
  onUpdate: PropTypes.func.isRequired,
  weekUidProp: PropTypes.string.isRequired,
  background: PropTypes.string,
  color: PropTypes.string,
  buttonText: PropTypes.string,
  border: PropTypes.string,
  textSize: PropTypes.string,
  marginTop: PropTypes.string,
};

LogWorkoutModal.defaultProps = {
  obj: initialState,
  background: 'white',
  color: 'black',
  buttonText: 'Log a Workout',
  border: 'none',
  textSize: '20px',
  marginTop: '1px',
};
