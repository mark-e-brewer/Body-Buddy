import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function GoalBoard({ goalObj, workoutsArray }) {
  let FrontDeltsValue = 0;
  let rearSideDeltValue = 0;
  let backValue = 0;
  let chestValue = 0;
  let bicepValue = 0;
  let tricepValue = 0;
  let quadValue = 0;
  let hamstringValue = 0;
  let gluteValue = 0;
  let calveValue = 0;

  for (let i = 0; i < workoutsArray.length; i++) {
    FrontDeltsValue += workoutsArray[i].frontDeltSets;
    rearSideDeltValue += workoutsArray[i].rearSideDeltSets;
    backValue += workoutsArray[i].backSets;
    chestValue += workoutsArray[i].chestSets;
    bicepValue += workoutsArray[i].bicepSets;
    tricepValue += workoutsArray[i].tricepSets;
    quadValue += workoutsArray[i].quadSets;
    hamstringValue += workoutsArray[i].hamstringSets;
    gluteValue += workoutsArray[i].gluteSets;
    calveValue += workoutsArray[i].calveSets;
  }

  return (
    <>
      <Card className="d-flex goal" style={{ width: '26rem', border: 'none' }}>
        <h2 className="d-flex justify-content-center">Weekly Goal</h2>
        <Card.Title className="muscle-goal" style={{ marginBottom: '8px' }}>Front Deltoids</Card.Title>
        <div className="cont">
          <div className="bar">{FrontDeltsValue} of {goalObj.frontDeltGoal}</div>
        </div>
        <Card.Title className="muscle-goal" style={{ marginBottom: '8px', marginTop: '8px' }}>Side & Rear Deltoids</Card.Title>
        <div className="cont">
          <div className="bar">{rearSideDeltValue} of {goalObj.rearSideDeltGoal}</div>
        </div>
        <Card.Title className="muscle-goal" style={{ marginBottom: '8px', marginTop: '8px' }}>Back</Card.Title>
        <div className="cont">
          <div className="bar">{backValue} of {goalObj.backGoal}</div>
        </div>
        <Card.Title className="muscle-goal" style={{ marginBottom: '8px', marginTop: '8px' }}>Chest</Card.Title>
        <div className="cont">
          <div className="bar">{chestValue} of {goalObj.chestGoal}</div>
        </div>
        <Card.Title className="muscle-goal" style={{ marginBottom: '8px', marginTop: '8px' }}>Biceps</Card.Title>
        <div className="cont">
          <div className="bar">{bicepValue} of {goalObj.bicepGoal}</div>
        </div>
        <Card.Title className="muscle-goal" style={{ marginBottom: '8px', marginTop: '8px' }}>Triceps</Card.Title>
        <div className="cont">
          <div className="bar">{tricepValue} of {goalObj.tricepGoal}</div>
        </div>
        <Card.Title className="muscle-goal" style={{ marginBottom: '8px', marginTop: '8px' }}>Quadriceps</Card.Title>
        <div className="cont">
          <div className="bar">{quadValue} of {goalObj.quadGoal}</div>
        </div>
        <Card.Title className="muscle-goal" style={{ marginBottom: '8px', marginTop: '8px' }}>Hamstrings</Card.Title>
        <div className="cont">
          <div className="bar">{hamstringValue} of {goalObj.hamstringGoal}</div>
        </div>
        <Card.Title className="muscle-goal" style={{ marginBottom: '8px', marginTop: '8px' }}>Glutes</Card.Title>
        <div className="cont">
          <div className="bar">{gluteValue} of {goalObj.gluteGoal}</div>
        </div>
        <Card.Title className="muscle-goal" style={{ marginBottom: '8px', marginTop: '8px' }}>Calves</Card.Title>
        <div className="cont" style={{ marginBottom: '25px' }}>
          <div className="bar">{calveValue} of {goalObj.calveGoal}</div>
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
  workoutsArray: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
