import React from 'react';
import { Card } from 'react-bootstrap';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function GoalBoard({ goalObj, workoutsArray }) {
  let trapValue = 0;
  let frontDeltValue = 0;
  let rearSideDeltValue = 0;
  let backValue = 0;
  let chestValue = 0;
  let bicepValue = 0;
  let tricepValue = 0;
  let quadValue = 0;
  let hamstringValue = 0;
  let gluteValue = 0;
  let calveValue = 0;
  let trapCheck = false;
  let frontDeltCheck = false;
  let rearSideDeltCheck = false;
  let backCheck = false;
  let chestCheck = false;
  let bicepCheck = false;
  let tricepCheck = false;
  let quadCheck = false;
  let hamstringCheck = false;
  let gluteCheck = false;
  let calveCheck = false;

  for (let i = 0; i < workoutsArray.length; i++) {
    trapValue += workoutsArray[i]?.trapSets;
    frontDeltValue += workoutsArray[i]?.frontDeltSets;
    rearSideDeltValue += workoutsArray[i]?.rearSideDeltSets;
    backValue += workoutsArray[i]?.backSets;
    chestValue += workoutsArray[i]?.chestSets;
    bicepValue += workoutsArray[i]?.bicepSets;
    tricepValue += workoutsArray[i]?.tricepSets;
    quadValue += workoutsArray[i]?.quadSets;
    hamstringValue += workoutsArray[i]?.hamstringSets;
    gluteValue += workoutsArray[i]?.gluteSets;
    calveValue += workoutsArray[i]?.calveSets;
  }

  let trapPercent = (trapValue / goalObj.trapGoal) * 100;
  let frontDeltPercent = (frontDeltValue / goalObj.frontDeltGoal) * 100;
  let rearSideDeltPercent = (rearSideDeltValue / goalObj.rearSideDeltGoal) * 100;
  let backPercent = (backValue / goalObj.backGoal) * 100;
  let chestPercent = (chestValue / goalObj.chestGoal) * 100;
  let bicepPercent = (bicepValue / goalObj.bicepGoal) * 100;
  let tricepPercent = (tricepValue / goalObj.tricepGoal) * 100;
  let quadPercent = (quadValue / goalObj.quadGoal) * 100;
  let hamstringPercent = (hamstringValue / goalObj.hamstringGoal) * 100;
  let glutePercent = (gluteValue / goalObj.gluteGoal) * 100;
  let calvePercent = (calveValue / goalObj.calveGoal) * 100;

  if (trapPercent >= 100 && goalObj.trapGoal > 0) {
    trapPercent = 100;
    trapCheck = true;
  }
  if (frontDeltPercent >= 100 && goalObj.frontDeltGoal > 0) {
    frontDeltPercent = 100;
    frontDeltCheck = true;
  }
  if (rearSideDeltPercent >= 100 && goalObj.rearSideDeltGoal > 0) {
    rearSideDeltPercent = 100;
    rearSideDeltCheck = true;
  }
  if (backPercent >= 100 && goalObj.backGoal > 0) {
    backPercent = 100;
    backCheck = true;
  }
  if (chestPercent >= 100 && goalObj.chestGoal > 0) {
    chestPercent = 100;
    chestCheck = true;
  }
  if (bicepPercent >= 100 && goalObj.bicepGoal > 0) {
    bicepPercent = 100;
    bicepCheck = true;
  }
  if (tricepPercent >= 100 && goalObj.trapGoal > 0) {
    tricepPercent = 100;
    tricepCheck = true;
  }
  if (quadPercent >= 100 && goalObj.quadGoal > 0) {
    quadPercent = 100;
    quadCheck = true;
  }
  if (hamstringPercent >= 100 && goalObj.hamstringGoal > 0) {
    hamstringPercent = 100;
    hamstringCheck = true;
  }
  if (glutePercent >= 100 && goalObj.gluteGoal > 0) {
    glutePercent = 100;
    gluteCheck = true;
  }
  if (calvePercent >= 100 && goalObj.calveGoal > 0) {
    calvePercent = 100;
    calveCheck = true;
  }

  return (
    <>
      <div className="goal-border">
        <Card className="d-flex goal">
          <h4 className="text-center" style={{ marginBottom: '-20px', marginTop: '8px' }}>Week {goalObj.weekNum}</h4>
          {/* Traps */}
          <div className="muscle-goal">
            <div className="d-flex">
              <Card.Title style={{ marginTop: '10px' }} className="muscle-goal-title">Trapezius</Card.Title>
              <p className={`goal-check-first${trapCheck === true ? '-complete' : ''}`}><FontAwesomeIcon icon={faCheck} /></p>
            </div>
            <div className="progress-bar-goal">
              <div className="progress-goal" style={{ width: `${trapPercent}%` }} />
              <div className="progress-text-goal">{trapValue} / {goalObj.trapGoal}</div>
            </div>
          </div>
          {/* Front Deltoids */}
          <div className="muscle-goal">
            <div className="d-flex">
              <Card.Title className="muscle-goal-title">Front Deltoids</Card.Title>
              <p className={`goal-check${frontDeltCheck === true ? '-complete' : ''}`}><FontAwesomeIcon icon={faCheck} /></p>
            </div>
            <div className="progress-bar-goal">
              <div className="progress-goal" style={{ width: `${frontDeltPercent}%` }} />
              <div className="progress-text-goal">{frontDeltValue} / {goalObj.frontDeltGoal}</div>
            </div>
          </div>
          {/* Side & Rear Deltoids */}
          <div className="muscle-goal">
            <div className="d-flex">
              <Card.Title className="muscle-goal-title">Side & Rear Deltoids</Card.Title>
              <p className={`goal-check${rearSideDeltCheck === true ? '-complete' : ''}`}><FontAwesomeIcon icon={faCheck} /></p>
            </div>
            <div className="progress-bar-goal">
              <div className="progress-goal" style={{ width: `${rearSideDeltPercent}%` }} />
              <div className="progress-text-goal">{rearSideDeltValue} / {goalObj.rearSideDeltGoal}</div>
            </div>
          </div>
          {/* Back */}
          <div className="muscle-goal">
            <div className="d-flex">
              <Card.Title className="muscle-goal-title">Back</Card.Title>
              <p className={`goal-check${backCheck === true ? '-complete' : ''}`}><FontAwesomeIcon icon={faCheck} /></p>
            </div>
            <div className="progress-bar-goal">
              <div className="progress-goal" style={{ width: `${backPercent}%` }} />
              <div className="progress-text-goal">{backValue} / {goalObj.backGoal}</div>
            </div>
          </div>
          {/* Chest */}
          <div className="muscle-goal">
            <div className="d-flex">
              <Card.Title className="muscle-goal-title">Chest</Card.Title>
              <p className={`goal-check${chestCheck === true ? '-complete' : ''}`}><FontAwesomeIcon icon={faCheck} /></p>
            </div>
            <div className="progress-bar-goal">
              <div className="progress-goal" style={{ width: `${chestPercent}%` }} />
              <div className="progress-text-goal">{chestValue} / {goalObj.chestGoal}</div>
            </div>
          </div>
          {/* Biceps */}
          <div className="muscle-goal">
            <div className="d-flex">
              <Card.Title className="muscle-goal-title">Biceps</Card.Title>
              <p className={`goal-check${bicepCheck === true ? '-complete' : ''}`}><FontAwesomeIcon icon={faCheck} /></p>
            </div>
            <div className="progress-bar-goal">
              <div className="progress-goal" style={{ width: `${bicepPercent}%` }} />
              <div className="progress-text-goal">{bicepValue} / {goalObj.bicepGoal}</div>
            </div>
          </div>
          {/* Triceps */}
          <div className="muscle-goal">
            <div className="d-flex">
              <Card.Title className="muscle-goal-title">Triceps</Card.Title>
              <p className={`goal-check${tricepCheck === true ? '-complete' : ''}`}><FontAwesomeIcon icon={faCheck} /></p>
            </div>
            <div className="progress-bar-goal">
              <div className="progress-goal" style={{ width: `${tricepPercent}%` }} />
              <div className="progress-text-goal">{tricepValue} / {goalObj.tricepGoal}</div>
            </div>
          </div>
          {/* Quads */}
          <div className="muscle-goal">
            <div className="d-flex">
              <Card.Title className="muscle-goal-title">Quadriceps</Card.Title>
              <p className={`goal-check${quadCheck === true ? '-complete' : ''}`}><FontAwesomeIcon icon={faCheck} /></p>
            </div>
            <div className="progress-bar-goal">
              <div className="progress-goal" style={{ width: `${quadPercent}%` }} />
              <div className="progress-text-goal">{quadValue} / {goalObj.quadGoal}</div>
            </div>
          </div>
          {/* Hamstrings */}
          <div className="muscle-goal">
            <div className="d-flex">
              <Card.Title className="muscle-goal-title">Hamstrings</Card.Title>
              <p className={`goal-check${hamstringCheck === true ? '-complete' : ''}`}><FontAwesomeIcon icon={faCheck} /></p>
            </div>
            <div className="progress-bar-goal">
              <div className="progress-goal" style={{ width: `${hamstringPercent}%` }} />
              <div className="progress-text-goal">{hamstringValue} / {goalObj.hamstringGoal}</div>
            </div>
          </div>
          {/* Glutes */}
          <div className="muscle-goal">
            <div className="d-flex">
              <Card.Title className="muscle-goal-title">Glutes</Card.Title>
              <p className={`goal-check${gluteCheck === true ? '-complete' : ''}`}><FontAwesomeIcon icon={faCheck} /></p>
            </div>
            <div className="progress-bar-goal">
              <div className="progress-goal" style={{ width: `${glutePercent}%` }} />
              <div className="progress-text-goal">{gluteValue} / {goalObj.gluteGoal}</div>
            </div>
          </div>
          {/* Calves */}
          <div className="muscle-goal" style={{ marginBottom: '10px' }}>
            <div className="d-flex">
              <Card.Title className="muscle-goal-title">Calves</Card.Title>
              <p className={`goal-check${calveCheck === true ? '-complete' : ''}`}><FontAwesomeIcon icon={faCheck} /></p>
            </div>
            <div className="progress-bar-goal">
              <div className="progress-goal" style={{ width: `${calvePercent}%` }} />
              <div className="progress-text-goal">{calveValue} / {goalObj.calveGoal}</div>
            </div>
          </div>
          <div className="blob-goal" />
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
    trapGoal: PropTypes.number,
    userUid: PropTypes.string,
    weekUid: PropTypes.string,
    weekNum: PropTypes.number,
  }).isRequired,
  // onUpdate: PropTypes.func.isRequired,
  workoutsArray: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
