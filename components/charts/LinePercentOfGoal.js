/* eslint-disable no-unused-vars */ // DELETE THIS !!!!!!!!!!!!!!!!!!!!!!!!
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import {} from 'charts.css';
import { useState } from 'react';
import StatOptionsMuscleGroups from '../StatFilterButtons/StatOptionsMuscleGroups';
import StatOptionToggleGoal from '../StatFilterButtons/StatOptionToggleGoal';
import StatOptionNumberPercent from '../StatFilterButtons/StatOptionNumberPercent';

export default function LinePercentOfGoal({ weekArray }) {
  const [showGoal, setShowGoal] = useState('hideGoal');
  const [showNumPercent, setShowNumPercent] = useState('%');
  const [muscleGroup, setMuscleGroup] = useState('All');
  console.warn(showNumPercent);
  let goalToggleJSX = null;
  if (showNumPercent === '#') {
    goalToggleJSX = <StatOptionToggleGoal />;
  }
  return (
    <>
      <div className="line-percent-goal">
        <table id="line-percent-goal" className="charts-css line multiple show-labels show-primary-axis show-10-secondary-axes show-data-axes">
          <h3 style={{ marginBottom: '12px' }} className="d-flex justify-content-center">Last Four Weeks Completion</h3>
          <tbody>
            <tr>
              <th className="line-percent-goal-label" scope="row">week 2<FontAwesomeIcon icon={faRightLong} /></th>
              <td style={{ '--start': '0.0', '--size': '0.0' }}><span className="line-percent-goal-datatext"> 50 </span></td>
              <td style={{ '--start': '0.0', '--size': '0.0' }}><span className="line-percent-goal-datatext"> 20 </span></td>
            </tr>
            <tr>
              <th className="line-percent-goal-label" scope="row">week 3<FontAwesomeIcon icon={faRightLong} /></th>
              <td style={{ '--start': '0.0', '--size': '0.8' }}><span className="line-percent-goal-datatext"> 80 </span></td>
              <td style={{ '--start': '0.0', '--size': '0.5' }}><span className="line-percent-goal-datatext"> 50 </span></td>
            </tr>
            <tr>
              <th className="line-percent-goal-label" scope="row">week 4<FontAwesomeIcon icon={faRightLong} /></th>
              <td style={{ '--start': '0.8', '--size': '0.4' }}><span className="line-percent-goal-datatext"> 40 </span></td>
              <td style={{ '--start': '0.5', '--size': '0.3' }}><span className="line-percent-goal-datatext"> 30 </span></td>
            </tr>
          </tbody>
        </table>
        <div style={{ marginTop: '25px', textAlign: 'center' }} className="d-flex">
          <StatOptionNumberPercent setShowNumPercent={setShowNumPercent} />
          {goalToggleJSX}
        </div>
        <div className="d-flex muscle-option-div-bar flex-column" style={{ marginTop: '9px' }}>
          <StatOptionsMuscleGroups setMuscleGroup={setMuscleGroup} />
        </div>
      </div>
    </>
  );
}

LinePercentOfGoal.propTypes = {
  weekArray: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

// const percentageComplete = {};
// // eslint-disable-next-line no-restricted-syntax
// for (const muscle in weekObj) {
//   if (muscle.includes('Goal')) {
//     const total = weekObj[muscle.replace('Goal', 'Total')];
//     const goal = weekObj[muscle];
//     // Calculate the percentage based on the minimum of total and goal
//     const percent = Math.min((total / goal) * 100, 100);
//     // Store the percentage for the muscle group
//     percentageComplete[muscle.replace('Goal', '')] = percent;
//   }
// }
