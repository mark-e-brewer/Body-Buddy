import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { deleteWorkout } from '../API/apiData';
import LogWorkoutModal from './forms/LogWorkout';

export default function WorkoutCard({ workoutObj, onUpdate, formOnUpdate }) {
  const deleteThisWorkout = () => {
    if (window.confirm('Delete this Workout?')) {
      deleteWorkout(workoutObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <>
      <div className="workout-card">
        <div className="workout-card__content">
          <div className="d-flex justify-content-around" style={{ marginLeft: '-7px', marginRight: '7px' }}>
            <LogWorkoutModal
              buttonText={<FontAwesomeIcon icon={faPlusCircle} />}
              background="white"
              color="black"
              onUpdate={formOnUpdate}
              obj={workoutObj}
              textSize={16}
              editOrNew="edit"
            />
            <h4
              style={{
                textAlign: 'center',
                fontWeight: '600',
                fontSize: '22px',
              }}
            >
              {workoutObj.day}
            </h4>
            <Button
              onClick={deleteThisWorkout}
              className="workout-delete"
              style={{
                color: 'black',
                backgroundColor: 'white',
                border: 'none',
                marginTop: '1px',
                width: '25px',
                fontSize: '16px',
              }}
            >
              <FontAwesomeIcon icon={faBan} />
            </Button>
          </div>
          <div className="d-flex justify-content-between workout-text-div">
            <p>Trapezius</p>
            <p>{workoutObj.trapSets}</p>
          </div>
          <div className="d-flex justify-content-between workout-text-div">
            <p>Front Deltoids</p>
            <p>{workoutObj.frontDeltSets}</p>
          </div>
          <div className="d-flex justify-content-between workout-text-div">
            <p>Side & Rear Deltoids</p>
            <p>{workoutObj.rearSideDeltSets}</p>
          </div>
          <div className="d-flex justify-content-between workout-text-div">
            <p>Back</p>
            <p>{workoutObj.backSets}</p>
          </div>
          <div className="d-flex justify-content-between workout-text-div">
            <p>Chest</p>
            <p>{workoutObj.chestSets}</p>
          </div>
          <div className="d-flex justify-content-between workout-text-div">
            <p>Biceps</p>
            <p>{workoutObj.bicepSets}</p>
          </div>
          <div className="d-flex justify-content-between workout-text-div">
            <p>Triceps</p>
            <p>{workoutObj.tricepSets}</p>
          </div>
          <div className="d-flex justify-content-between workout-text-div">
            <p>Quadriceps</p>
            <p>{workoutObj.quadSets}</p>
          </div>
          <div className="d-flex justify-content-between workout-text-div">
            <p>Hamstrings</p>
            <p>{workoutObj.hamstringSets}</p>
          </div>
          <div className="d-flex justify-content-between workout-text-div">
            <p>Glutes</p>
            <p>{workoutObj.gluteSets}</p>
          </div>
          <div className="d-flex justify-content-between workout-text-div">
            <p>Calves</p>
            <p>{workoutObj.calveSets}</p>
          </div>
        </div>
      </div>
    </>
  );
}

WorkoutCard.propTypes = {
  workoutObj: PropTypes.shape({
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
    trapSets: PropTypes.number,
    userUid: PropTypes.string,
    weekUid: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
  formOnUpdate: PropTypes.func.isRequired,
};
