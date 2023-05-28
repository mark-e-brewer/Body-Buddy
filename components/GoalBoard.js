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

  let frontDeltPercent = (FrontDeltsValue / goalObj.frontDeltGoal) * 100;
  let rearSideDeltPercent = (rearSideDeltValue / goalObj.rearSideDeltGoal) * 100;
  let backPercent = (backValue / goalObj.backGoal) * 100;
  let chestPercent = (chestValue / goalObj.chestGoal) * 100;
  let bicepPercent = (bicepValue / goalObj.bicepGoal) * 100;
  let tricepPercent = (tricepValue / goalObj.tricepGoal) * 100;
  let quadPercent = (quadValue / goalObj.quadGoal) * 100;
  let hamstringPercent = (hamstringValue / goalObj.hamstringGoal) * 100;
  let glutePercent = (gluteValue / goalObj.gluteGoal) * 100;
  let calvePercent = (calveValue / goalObj.gluteGoal) * 100;

  if (frontDeltPercent < 15) {
    frontDeltPercent = 15;
  } else if (frontDeltPercent > 100) {
    frontDeltPercent = 100;
  }
  if (rearSideDeltPercent < 15) {
    rearSideDeltPercent = 15;
  } else if (rearSideDeltPercent > 100) {
    rearSideDeltPercent = 100;
  }
  if (backPercent < 15) {
    backPercent = 15;
  } else if (backPercent > 100) {
    backPercent = 100;
  }
  if (chestPercent < 15) {
    chestPercent = 15;
  } else if (chestPercent > 100) {
    chestPercent = 100;
  }
  if (bicepPercent < 15) {
    bicepPercent = 15;
  } else if (bicepPercent > 100) {
    bicepPercent = 100;
  }
  if (tricepPercent < 15) {
    tricepPercent = 15;
  } else if (tricepPercent > 100) {
    tricepPercent = 100;
  }
  if (quadPercent < 15) {
    quadPercent = 15;
  } else if (quadPercent > 100) {
    quadPercent = 100;
  }
  if (hamstringPercent < 15) {
    hamstringPercent = 15;
  } else if (hamstringPercent > 100) {
    hamstringPercent = 100;
  }
  if (glutePercent < 15) {
    glutePercent = 15;
  } else if (glutePercent > 100) {
    glutePercent = 100;
  }
  if (calvePercent < 15) {
    calvePercent = 15;
  } else if (calvePercent > 100) {
    calvePercent = 100;
  }

  return (
    <>
      <div className="goal-border">
        <Card className="d-flex goal" style={{ width: '26rem', border: 'none' }}>
          <h2 className="d-flex justify-content-center" style={{ marginBottom: '5px' }}>Weekly Goal</h2>
          <Card.Title className="muscle-goal" style={{ marginBottom: '8px' }}>Front Deltoids</Card.Title>
          <div className="cont">
            <div className="bar" style={{ width: `${frontDeltPercent}%` }}>{FrontDeltsValue} of {goalObj.frontDeltGoal}</div>
          </div>
          <Card.Title className="muscle-goal" style={{ marginBottom: '8px', marginTop: '8px' }}>Side & Rear Deltoids</Card.Title>
          <div className="cont">
            <div className="bar" style={{ width: `${rearSideDeltPercent}%` }}>{rearSideDeltValue} of {goalObj.rearSideDeltGoal}</div>
          </div>
          <Card.Title className="muscle-goal" style={{ marginBottom: '8px', marginTop: '8px' }}>Back</Card.Title>
          <div className="cont">
            <div className="bar" style={{ width: `${backPercent}%` }}>{backValue} of {goalObj.backGoal}</div>
          </div>
          <Card.Title className="muscle-goal" style={{ marginBottom: '8px', marginTop: '8px' }}>Chest</Card.Title>
          <div className="cont">
            <div className="bar" style={{ width: `${chestPercent}%` }}>{chestValue} of {goalObj.chestGoal}</div>
          </div>
          <Card.Title className="muscle-goal" style={{ marginBottom: '8px', marginTop: '8px' }}>Biceps</Card.Title>
          <div className="cont">
            <div className="bar" style={{ width: `${bicepPercent}%` }}>{bicepValue} of {goalObj.bicepGoal}</div>
          </div>
          <Card.Title className="muscle-goal" style={{ marginBottom: '8px', marginTop: '8px' }}>Triceps</Card.Title>
          <div className="cont">
            <div className="bar" style={{ width: `${tricepPercent}%` }}>{tricepValue} of {goalObj.tricepGoal}</div>
          </div>
          <Card.Title className="muscle-goal" style={{ marginBottom: '8px', marginTop: '8px' }}>Quadriceps</Card.Title>
          <div className="cont">
            <div className="bar" style={{ width: `${quadPercent}%` }}>{quadValue} of {goalObj.quadGoal}</div>
          </div>
          <Card.Title className="muscle-goal" style={{ marginBottom: '8px', marginTop: '8px' }}>Hamstrings</Card.Title>
          <div className="cont">
            <div className="bar" style={{ width: `${hamstringPercent}%` }}>{hamstringValue} of {goalObj.hamstringGoal}</div>
          </div>
          <Card.Title className="muscle-goal" style={{ marginBottom: '8px', marginTop: '8px' }}>Glutes</Card.Title>
          <div className="cont">
            <div className="bar" style={{ width: `${glutePercent}%` }}>{gluteValue} of {goalObj.gluteGoal}</div>
          </div>
          <Card.Title className="muscle-goal" style={{ marginBottom: '8px', marginTop: '8px' }}>Calves</Card.Title>
          <div className="cont" style={{ marginBottom: '15px' }}>
            <div className="bar" style={{ width: `${calvePercent}%` }}>{calveValue} of {goalObj.calveGoal}</div>
          </div>
        </Card>
      </div>
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
