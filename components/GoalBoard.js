import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function GoalBoard({ goalObj, frontDeltVal }) {
  return (
    <>
      <Card className="d-flex goal" style={{ width: '26rem', border: 'none' }}>
        <h2 className="d-flex justify-content-center">Weekly Goal</h2>
        <Card.Title className="muscle-goal" style={{ marginBottom: '8px' }}>Front Deltoids</Card.Title>
        <div className="cont">
          <div className="bar">{frontDeltVal} of {goalObj.frontDeltGoal}</div>
        </div>
        <Card.Title className="muscle-goal" style={{ marginBottom: '8px', marginTop: '8px' }}>Side & Rear Deltoids</Card.Title>
        <div className="cont">
          <div className="bar">0 of {goalObj.rearSideDeltGoal}</div>
        </div>
        <Card.Title className="muscle-goal" style={{ marginBottom: '8px', marginTop: '8px' }}>Back</Card.Title>
        <div className="cont">
          <div className="bar">0 of {goalObj.backGoal}</div>
        </div>
        <Card.Title className="muscle-goal" style={{ marginBottom: '8px', marginTop: '8px' }}>Chest</Card.Title>
        <div className="cont">
          <div className="bar">0 of {goalObj.chestGoal}</div>
        </div>
        <Card.Title className="muscle-goal" style={{ marginBottom: '8px', marginTop: '8px' }}>Biceps</Card.Title>
        <div className="cont">
          <div className="bar">0 of {goalObj.bicepGoal}</div>
        </div>
        <Card.Title className="muscle-goal" style={{ marginBottom: '8px', marginTop: '8px' }}>Triceps</Card.Title>
        <div className="cont">
          <div className="bar">0 of {goalObj.tricepGoal}</div>
        </div>
        <Card.Title className="muscle-goal" style={{ marginBottom: '8px', marginTop: '8px' }}>Quadriceps</Card.Title>
        <div className="cont">
          <div className="bar">0 of {goalObj.quadGoal}</div>
        </div>
        <Card.Title className="muscle-goal" style={{ marginBottom: '8px', marginTop: '8px' }}>Hamstrings</Card.Title>
        <div className="cont">
          <div className="bar">0 of {goalObj.hamstringGoal}</div>
        </div>
        <Card.Title className="muscle-goal" style={{ marginBottom: '8px', marginTop: '8px' }}>Glutes</Card.Title>
        <div className="cont">
          <div className="bar">0 of {goalObj.gluteGoal}</div>
        </div>
        <Card.Title className="muscle-goal" style={{ marginBottom: '8px', marginTop: '8px' }}>Calves</Card.Title>
        <div className="cont" style={{ marginBottom: '25px' }}>
          <div className="bar">0 of {goalObj.calveGoal}</div>
        </div>
      </Card>
    </>
  );
}

GoalBoard.propTypes = {
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
    userUid: PropTypes.string,
    weekUid: PropTypes.string,
  }).isRequired,
  // onUpdate: PropTypes.func.isRequired,
  frontDeltVal: PropTypes.number.isRequired,
};
