/* eslint-disable no-restricted-syntax */
import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import CircularProgressBar from './ProgressCircle';

export default function WeekCard({ weekObj }) {
  let sumOfGoal = 0;
  let sumOfComplete = 0;
  for (const key in weekObj) {
    if (key.includes('Goal')) {
      sumOfGoal += weekObj[key];
    } else if (key.includes('Total')) {
      sumOfComplete += weekObj[key];
    }
  }
  const percentComplete = Math.ceil((sumOfComplete / sumOfGoal) * 100);
  return (
    <>
      <div className="d-flex flex-column">
        <Link href={`/weeks/${weekObj.weekUid}`} passHref>
          <CircularProgressBar percent={percentComplete} weekNumber={weekObj.weekNum} />
        </Link>
      </div>
    </>
  );
}

WeekCard.propTypes = {
  weekObj: PropTypes.shape({
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
    backTotal: PropTypes.number,
    bicepTotal: PropTypes.number,
    calveTotal: PropTypes.number,
    chestTotal: PropTypes.number,
    frontDeltTotal: PropTypes.number,
    gluteTotal: PropTypes.number,
    hamstringTotal: PropTypes.number,
    quadTotal: PropTypes.number,
    rearSideDeltTotal: PropTypes.number,
    tricepTotal: PropTypes.number,
    userUid: PropTypes.string,
    weekUid: PropTypes.string,
    weekNum: PropTypes.number,
  }).isRequired,
};
