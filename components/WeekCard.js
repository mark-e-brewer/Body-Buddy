/* eslint-disable no-restricted-syntax */
import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { faBullseye, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
      <Link href={`/weeks/${weekObj.weekUid}`} passHref>
        <div className="week-card-border">
          <div className="week-card">
            <div className="week-card-front">
              <div className="week-title">
                <CircularProgressBar percent={percentComplete} />
              </div>
              <p className="week-subtitle">{`Week ${weekObj.weekNum}`}</p>
            </div>
            <div className="week-card-back">
              <div className="d-flex flex-row justify-content-between week-card-row-back">
                <p><FontAwesomeIcon icon={faCheckCircle} /></p>
                <p className="mg-week-card-title">Muscle Group</p>
                <p><FontAwesomeIcon icon={faBullseye} /></p>
              </div>
              <hr className="week-card-line-back" style={{ margin: '0px', marginBottom: '12px' }} />
              <div className="d-flex flex-row justify-content-between week-card-row-back">
                <p>{weekObj.frontDeltTotal}</p>
                <p className="mg-week-card">Front Delts</p>
                <p>{weekObj.frontDeltGoal}</p>
              </div>
              <div className="d-flex flex-row justify-content-between week-card-row-back">
                <p>{weekObj.rearSideDeltTotal}</p>
                <p className="mg-week-card">Rear & Side Delts</p>
                <p>{weekObj.rearSideDeltGoal}</p>
              </div>
              <div className="d-flex flex-row justify-content-between week-card-row-back">
                <p>{weekObj.backTotal}</p>
                <p className="mg-week-card">Back</p>
                <p>{weekObj.backGoal}</p>
              </div>
              <div className="d-flex flex-row justify-content-between week-card-row-back">
                <p>{weekObj.chestTotal}</p>
                <p className="mg-week-card">Chest</p>
                <p>{weekObj.chestGoal}</p>
              </div>
              <div className="d-flex flex-row justify-content-between week-card-row-back">
                <p>{weekObj.bicepTotal}</p>
                <p className="mg-week-card">Biceps</p>
                <p>{weekObj.bicepGoal}</p>
              </div>
              <div className="d-flex flex-row justify-content-between week-card-row-back">
                <p>{weekObj.quadTotal}</p>
                <p className="mg-week-card">Quadriceps</p>
                <p>{weekObj.quadGoal}</p>
              </div>
              <div className="d-flex flex-row justify-content-between week-card-row-back">
                <p>{weekObj.hamstringTotal}</p>
                <p className="mg-week-card">Hamstrings</p>
                <p>{weekObj.hamstringGoal}</p>
              </div>
              <div className="d-flex flex-row justify-content-between week-card-row-back">
                <p>{weekObj.gluteTotal}</p>
                <p className="mg-week-card">Glutes</p>
                <p>{weekObj.gluteGoal}</p>
              </div>
              <div className="d-flex flex-row justify-content-between week-card-row-back">
                <p>{weekObj.calveTotal}</p>
                <p className="mg-week-card">Calves</p>
                <p>{weekObj.calveGoal}</p>
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
