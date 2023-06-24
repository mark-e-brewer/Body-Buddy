import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { faBullseye, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CircularProgressBar from './ProgressCircle';

export default function WeekCard({ weekObj, weekObjDisplay }) {
  let totalGoal = 0;
  let totalCompleted = 0;
  Object.keys(weekObj).forEach((key) => {
    if (key.endsWith('Goal')) {
      const totalKey = key.replace('Goal', 'Total');
      const goal = weekObj[key];
      const total = weekObj[totalKey];
      const completed = Math.min(total, goal);
      totalGoal += goal;
      totalCompleted += completed;
    }
  });
  const percentComplete = Math.ceil((totalCompleted / totalGoal) * 100);

  return (
    <>
      <Link href={`/weeks/${weekObj.weekUid}`} passHref>
        <div style={{ margin: '12px' }} className="week-card-border">
          <div className="week-card">
            <div className="week-card-front">
              <div className="week-title">
                <CircularProgressBar percent={percentComplete} />
              </div>
              <p className="week-subtitle">{`Week ${weekObj.weekNum}`}</p>
            </div>
            <div className="week-card-back">
              <div className="d-flex flex-row justify-content-between week-card-row-back week-card-titles-back">
                <p><FontAwesomeIcon icon={faCheckCircle} /></p>
                <p className="mg-week-card-title">Muscle Group</p>
                <p><FontAwesomeIcon icon={faBullseye} /></p>
              </div>
              <hr className="week-card-line-back" style={{ margin: '0px', marginBottom: '12px' }} />
              <div className="d-flex flex-row justify-content-between week-card-row-back">
                <p>{weekObjDisplay.trapTotal}</p>
                <p className="mg-week-card">Traps</p>
                <p>{weekObjDisplay.trapGoal}</p>
              </div>
              <div className="d-flex flex-row justify-content-between week-card-row-back">
                <p>{weekObjDisplay.frontDeltTotal}</p>
                <p className="mg-week-card">Front Delts</p>
                <p>{weekObjDisplay.frontDeltGoal}</p>
              </div>
              <div className="d-flex flex-row justify-content-between week-card-row-back">
                <p>{weekObjDisplay.rearSideDeltTotal}</p>
                <p className="mg-week-card">Rear & Side Delts</p>
                <p>{weekObjDisplay.rearSideDeltGoal}</p>
              </div>
              <div className="d-flex flex-row justify-content-between week-card-row-back">
                <p>{weekObjDisplay.backTotal}</p>
                <p className="mg-week-card">Back</p>
                <p>{weekObjDisplay.backGoal}</p>
              </div>
              <div className="d-flex flex-row justify-content-between week-card-row-back">
                <p>{weekObjDisplay.chestTotal}</p>
                <p className="mg-week-card">Chest</p>
                <p>{weekObjDisplay.chestGoal}</p>
              </div>
              <div className="d-flex flex-row justify-content-between week-card-row-back">
                <p>{weekObjDisplay.bicepTotal}</p>
                <p className="mg-week-card">Biceps</p>
                <p>{weekObjDisplay.bicepGoal}</p>
              </div>
              <div className="d-flex flex-row justify-content-between week-card-row-back">
                <p>{weekObjDisplay.tricepTotal}</p>
                <p className="mg-week-card">Triceps</p>
                <p>{weekObjDisplay.tricepGoal}</p>
              </div>
              <div className="d-flex flex-row justify-content-between week-card-row-back">
                <p>{weekObjDisplay.quadTotal}</p>
                <p className="mg-week-card">Quadriceps</p>
                <p>{weekObjDisplay.quadGoal}</p>
              </div>
              <div className="d-flex flex-row justify-content-between week-card-row-back">
                <p>{weekObjDisplay.hamstringTotal}</p>
                <p className="mg-week-card">Hamstrings</p>
                <p>{weekObjDisplay.hamstringGoal}</p>
              </div>
              <div className="d-flex flex-row justify-content-between week-card-row-back">
                <p>{weekObjDisplay.gluteTotal}</p>
                <p className="mg-week-card">Glutes</p>
                <p>{weekObjDisplay.gluteGoal}</p>
              </div>
              <div className="d-flex flex-row justify-content-between week-card-row-back">
                <p>{weekObjDisplay.calveTotal}</p>
                <p className="mg-week-card">Calves</p>
                <p>{weekObjDisplay.calveGoal}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
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
    trapGoal: PropTypes.number,
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
    trapTotal: PropTypes.number,
    userUid: PropTypes.string,
    weekUid: PropTypes.string,
    weekNum: PropTypes.number,
  }).isRequired,
  weekObjDisplay: PropTypes.shape({
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
    trapTotal: PropTypes.number,
    userUid: PropTypes.string,
    weekUid: PropTypes.string,
    weekNum: PropTypes.number,
  }).isRequired,
};
