import React, { useState, useEffect } from 'react';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../utils/context/authContext';
import {
  patchGoal, patchOldGoalToPrev, postGoal, postWeek, patchWeek,
} from '../API/apiData';

export default function ResetWeekButton({ goalObj, onUpdate, workoutsArray }) {
  const [goal, setGoal] = useState();
  const [weekCount, setWeekCount] = useState();
  const [oldFirebaseKey, setOldFirebaseKey] = useState();
  const { user } = useAuth();
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

  useEffect(() => {
    setGoal(goalObj);
    setWeekCount(goalObj.weekNum);
    setOldFirebaseKey(goalObj.firebaseKey);
  }, [goalObj]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const playload = { ...goal };
    postGoal(playload).then(({ name }) => {
      const patchNewPayload = {
        firebaseKey: name, weekUid: `${name}WEEK`, userUid: `${user.uid}CURR`, weekNum: weekCount + 1,
      };
      patchGoal(patchNewPayload).then(() => {
        const patchOldPayload = { userUid: `${user.uid}PREV` };
        patchOldGoalToPrev(patchOldPayload, oldFirebaseKey).then();
      });
    });
    const weekPayload = {
      ...goal, frontDeltTotal: FrontDeltsValue, rearSideDeltTotal: rearSideDeltValue, backTotal: backValue, chestTotal: chestValue, bicepTotal: bicepValue, tricepTotal: tricepValue, quadTotal: quadValue, hamstringTotal: hamstringValue, gluteTotal: gluteValue, calveTotal: calveValue,
    };
    postWeek(weekPayload).then(({ name }) => {
      const patchWeekPayload = { userUid: `${user.uid}PREV`, firebaseKey: name };
      patchWeek(patchWeekPayload).then(() => {
        onUpdate();
      });
    });
  };

  return (
    <>
      <Button onClick={handleSubmit} variant="warning">
        <div className="d-flex">
          <p style={{ marginRight: '3px', marginBottom: '1px' }}>Reset</p>
          <p style={{ marginBottom: '1px' }}><FontAwesomeIcon icon={faArrowsRotate} /></p>
          <p style={{ marginLeft: '3px', marginBottom: '1px' }}>Week</p>
        </div>
      </Button>
    </>
  );
}

ResetWeekButton.propTypes = {
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
    weekNum: PropTypes.number,
    isDefault: PropTypes.bool,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
  workoutsArray: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
