import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FloatingLabel } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { patchGoal, postGoal } from '../../API/apiData';

export default function SetGoalModal({ goalObj, onUpdate }) {
  const [show, setShow] = useState(false);
  const [formInput, setFormInput] = useState(goalObj);
  const { user } = useAuth();

  useEffect(() => {
    setFormInput(goalObj);
  }, [goalObj]);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: parseInt(value, 10), // Parse the value as an integer
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (goalObj.firebaseKey === undefined) {
      const payload = {
        ...formInput, userUid: `${user.uid}CURR`, weekUid: 'weekUidPlaceholder',
      };
      postGoal(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name, weekUid: `${name}WEEK` };
        patchGoal(patchPayload).then(() => {
          onUpdate();
          handleClose();
        });
      });
    } else {
      const patchPayload = { ...formInput };
      patchGoal(patchPayload).then(() => {
        onUpdate();
        handleClose();
      });
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleShow}
        className="set-goal-button"
      >
        <div>
          <span>
            <p className="set-goal-text">Set Goal</p>
          </span>
        </div>
        <div>
          <span>
            <FontAwesomeIcon className="bullseye-set-goal" icon={faBullseye} />
          </span>
        </div>
      </button>
      <Modal show={show} onHide={handleClose}>
        <div className="goal-form">
          <Modal.Body className="goal-form-body">
            <Form onSubmit={handleSubmit}>

              <FloatingLabel controlId="floatingInput3" label="Traps Goal" className="mb-2 goal-floating-label" style={{ color: 'black' }}>
                <Form.Select
                  aria-label="Traps"
                  name="trapGoal"
                  onChange={handleChange}
                  value={formInput.trapGoal}
                  className="goal-input goal-input-0"
                >
                  {Array.from({ length: 51 }, (_, i) => i).map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput3" label="Front Deltoid Goal" className="mb-2 goal-floating-label" style={{ color: 'black' }}>
                <Form.Select
                  aria-label="Front Deltoids"
                  name="frontDeltGoal"
                  onChange={handleChange}
                  value={formInput.frontDeltGoal}
                  className="goal-input goal-input-1"
                >
                  {Array.from({ length: 51 }, (_, i) => i).map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput3" label="Side & Rear Deltoid Goal" className="mb-2 goal-floating-label" style={{ color: 'black' }}>
                <Form.Select
                  aria-label="Side & Rear Deltoids"
                  name="rearSideDeltGoal"
                  onChange={handleChange}
                  value={formInput.rearSideDeltGoal}
                  className="goal-input goal-input-2"
                >
                  {Array.from({ length: 51 }, (_, i) => i).map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput3" label="Back Goal" className="mb-2 goal-floating-label" style={{ color: 'black' }}>
                <Form.Select
                  aria-label="Back"
                  name="backGoal"
                  onChange={handleChange}
                  value={formInput.backGoal}
                  className="goal-input goal-input-3"
                >
                  {Array.from({ length: 51 }, (_, i) => i).map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput3" label="Chest Goal" className="mb-2 goal-floating-label" style={{ color: 'black' }}>
                <Form.Select
                  aria-label="Chest"
                  name="chestGoal"
                  onChange={handleChange}
                  value={formInput.chestGoal}
                  className="goal-input goal-input-4"
                >
                  {Array.from({ length: 51 }, (_, i) => i).map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput3" label="Bicep Goal" className="mb-2 goal-floating-label" style={{ color: 'black' }}>
                <Form.Select
                  aria-label="Biceps"
                  name="bicepGoal"
                  onChange={handleChange}
                  value={formInput.bicepGoal}
                  className="goal-input goal-input-5"
                >
                  {Array.from({ length: 51 }, (_, i) => i).map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput3" label="Tricep Goal" className="mb-2 goal-floating-label" style={{ color: 'black' }}>
                <Form.Select
                  aria-label="Triceps"
                  name="tricepGoal"
                  onChange={handleChange}
                  value={formInput.tricepGoal}
                  className="goal-input goal-input-6"
                >
                  {Array.from({ length: 51 }, (_, i) => i).map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput3" label="Quadricep Goal" className="mb-2 goal-floating-label" style={{ color: 'black' }}>
                <Form.Select
                  aria-label="Quadriceps"
                  name="quadGoal"
                  onChange={handleChange}
                  value={formInput.quadGoal}
                  className="goal-input goal-input-7"
                >
                  {Array.from({ length: 51 }, (_, i) => i).map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput3" label="Hamstring Goal" className="mb-2 goal-floating-label" style={{ color: 'black' }}>
                <Form.Select
                  aria-label="Hamstrings"
                  name="hamstringGoal"
                  onChange={handleChange}
                  value={formInput.hamstringGoal}
                  className="goal-input goal-input-8"
                >
                  {Array.from({ length: 51 }, (_, i) => i).map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput3" label="Glute Goal" className="mb-2 goal-floating-label" style={{ color: 'black' }}>
                <Form.Select
                  aria-label="Glutes"
                  name="gluteGoal"
                  onChange={handleChange}
                  value={formInput.gluteGoal}
                  className="goal-input goal-input-9"
                >
                  {Array.from({ length: 51 }, (_, i) => i).map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput3" label="Calve Goal" className="mb-2 goal-floating-label" style={{ color: 'black' }}>
                <Form.Select
                  aria-label="Calves"
                  name="calveGoal"
                  onChange={handleChange}
                  value={formInput.calveGoal}
                  className="goal-input goal-input-10"
                >
                  {Array.from({ length: 51 }, (_, i) => i).map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </Form.Select>
              </FloatingLabel>
              <div className="d-flex justify-content-center">
                <Button className="goal-submit-button" type="submit">{goalObj.firebaseKey ? 'Update' : 'Submit'}</Button>
              </div>
            </Form>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
}

SetGoalModal.propTypes = {
  goalObj: PropTypes.shape({
    backGoal: PropTypes.number,
    bicepGoal: PropTypes.number,
    calveGoal: PropTypes.number,
    chestGoal: PropTypes.number,
    firebaseKey: PropTypes.string,
    frontDeltGoal: PropTypes.number,
    gluteGoal: PropTypes.number,
    hamstringGoal: PropTypes.number,
    quadGoal: PropTypes.number,
    rearSideDeltGoal: PropTypes.number,
    tricepGoal: PropTypes.number,
    trapGoal: PropTypes.number,
    userUid: PropTypes.string,
    weekUid: PropTypes.string,
    isDefault: PropTypes.bool,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
