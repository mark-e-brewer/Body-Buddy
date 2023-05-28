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

  if (frontDeltPercent > 100) {
    frontDeltPercent = 100;
  }
  if (rearSideDeltPercent > 100) {
    rearSideDeltPercent = 100;
  }
  if (backPercent > 100) {
    backPercent = 100;
  }
  if (chestPercent > 100) {
    chestPercent = 100;
  }
  if (bicepPercent > 100) {
    bicepPercent = 100;
  }
  if (tricepPercent > 100) {
    tricepPercent = 100;
  }
  if (quadPercent > 100) {
    quadPercent = 100;
  }
  if (hamstringPercent > 100) {
    hamstringPercent = 100;
  }
  if (glutePercent > 100) {
    glutePercent = 100;
  }
  if (calvePercent > 100) {
    calvePercent = 100;
  }

  return (
    <>
      <div className="goal-border">
        <Card className="d-flex goal" style={{ width: '26rem', border: 'none' }}>
          {/* Front Deltoids */}
          <div className="muscle-goal">
            <Card.Title style={{ marginTop: '8px' }} className="muscle-goal-title">Front Deltoids</Card.Title>
            <div className="progress-bar-goal">
              <div className="progress-goal" style={{ width: `${frontDeltPercent}%` }} />
              <div className="progress-text-goal">{FrontDeltsValue} / {goalObj.frontDeltGoal}</div>
            </div>
          </div>
          {/* Side & Rear Deltoids */}
          <div className="muscle-goal">
            <Card.Title className="muscle-goal-title">Side & Rear Deltoids</Card.Title>
            <div className="progress-bar-goal">
              <div className="progress-goal" style={{ width: `${rearSideDeltPercent}%` }} />
              <div className="progress-text-goal">{rearSideDeltValue} / {goalObj.rearSideDeltGoal}</div>
            </div>
          </div>
          {/* Back */}
          <div className="muscle-goal">
            <Card.Title className="muscle-goal-title">Back</Card.Title>
            <div className="progress-bar-goal">
              <div className="progress-goal" style={{ width: `${backPercent}%` }} />
              <div className="progress-text-goal">{backValue} / {goalObj.backGoal}</div>
            </div>
          </div>
          {/* Chest */}
          <div className="muscle-goal">
            <Card.Title className="muscle-goal-title">Chest</Card.Title>
            <div className="progress-bar-goal">
              <div className="progress-goal" style={{ width: `${chestPercent}%` }} />
              <div className="progress-text-goal">{chestValue} / {goalObj.chestGoal}</div>
            </div>
          </div>
          {/* Biceps */}
          <div className="muscle-goal">
            <Card.Title className="muscle-goal-title">Biceps</Card.Title>
            <div className="progress-bar-goal">
              <div className="progress-goal" style={{ width: `${bicepPercent}%` }} />
              <div className="progress-text-goal">{bicepValue} / {goalObj.bicepGoal}</div>
            </div>
          </div>
          {/* Triceps */}
          <div className="muscle-goal">
            <Card.Title className="muscle-goal-title">Triceps</Card.Title>
            <div className="progress-bar-goal">
              <div className="progress-goal" style={{ width: `${tricepPercent}%` }} />
              <div className="progress-text-goal">{tricepValue} / {goalObj.tricepGoal}</div>
            </div>
          </div>
          {/* Quads */}
          <div className="muscle-goal">
            <Card.Title className="muscle-goal-title">Quadriceps</Card.Title>
            <div className="progress-bar-goal">
              <div className="progress-goal" style={{ width: `${quadPercent}%` }} />
              <div className="progress-text-goal">{quadValue} / {goalObj.quadGoal}</div>
            </div>
          </div>
          <div className="muscle-goal">
            <Card.Title className="muscle-goal-title">Hamstrings</Card.Title>
            <div className="progress-bar-goal">
              <div className="progress-goal" style={{ width: `${hamstringPercent}%` }} />
              <div className="progress-text-goal">{hamstringValue} / {goalObj.hamstringGoal}</div>
            </div>
          </div>
          <div className="muscle-goal">
            <Card.Title className="muscle-goal-title">Glutes</Card.Title>
            <div className="progress-bar-goal">
              <div className="progress-goal" style={{ width: `${glutePercent}%` }} />
              <div className="progress-text-goal">{gluteValue} / {goalObj.gluteGoal}</div>
            </div>
          </div>
          <div className="muscle-goal" style={{ marginBottom: '10px' }}>
            <Card.Title className="muscle-goal-title">Calves</Card.Title>
            <div className="progress-bar-goal">
              <div className="progress-goal" style={{ width: `${calvePercent}%` }} />
              <div className="progress-text-goal">{calveValue} / {goalObj.calveGoal}</div>
            </div>
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
