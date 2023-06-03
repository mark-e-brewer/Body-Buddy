import React from 'react';
import PropTypes from 'prop-types';

export default function WorkoutCardWeekView({ workoutObj }) {
  return (
    <>
      <div className="workout-card">
        <div className="workout-card__content">
          <div className="d-flex justify-content-center">
            <h4
              style={{
                textAlign: 'center',
                fontWeight: '600',
                fontSize: '24px',
              }}
            >
              {workoutObj.day}
            </h4>
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

WorkoutCardWeekView.propTypes = {
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
};
