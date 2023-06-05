/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import {} from 'charts.css';
import { useState } from 'react';
import StatOptionsMuscleGroups from '../StatFilterButtons/StatOptionsMuscleGroups';
import StatOptionToggleGoal from '../StatFilterButtons/StatOptionToggleGoal';
import StatOptionNumberPercent from '../StatFilterButtons/StatOptionNumberPercent';

export default function LinePercentOfGoal({ weekArray, weekArray2 }) {
  const [muscleGroup, setMuscleGroup] = useState('All');
  let muscleSelected = null;
  let week1percent = 0;
  let week2percent = 0;
  let week3percent = 0;
  let week4percent = 0;

  if (muscleGroup === 'Traps') {
    muscleSelected = 'trap';
  } else if (muscleGroup === 'Front Delts') {
    muscleSelected = 'frontDelt';
  } else if (muscleGroup === 'Rear/Side Delts') {
    muscleSelected = 'rearSideDelt';
  } else if (muscleGroup === 'Back') {
    muscleSelected = 'back';
  } else if (muscleGroup === 'Chest') {
    muscleSelected = 'chest';
  } else if (muscleGroup === 'Biceps') {
    muscleSelected = 'bicep';
  } else if (muscleGroup === 'Triceps') {
    muscleSelected = 'tricep';
  } else if (muscleGroup === 'Quads') {
    muscleSelected = 'quad';
  } else if (muscleGroup === 'Hamstrings') {
    muscleSelected = 'hamstring';
  } else if (muscleGroup === 'Hamstrings') {
    muscleSelected = 'hamstring';
  } else if (muscleGroup === 'Glutes') {
    muscleSelected = 'glute';
  } else if (muscleGroup === 'Calves') {
    muscleSelected = 'calve';
  } else if (muscleGroup === 'All') {
    muscleSelected = null;
  }

  if (muscleSelected === null) {
    let totalGoalWeek1 = 0;
    let totalCompletedWeek1 = 0;
    let totalGoalWeek2 = 0;
    let totalCompletedWeek2 = 0;
    let totalGoalWeek3 = 0;
    let totalCompletedWeek3 = 0;
    let totalGoalWeek4 = 0;
    let totalCompletedWeek4 = 0;
    weekArray.forEach((weekObj) => {
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
      // eslint-disable-next-line default-case
      switch (weekObj.weekNum) {
        case 1:
          totalGoalWeek1 = totalGoal;
          totalCompletedWeek1 = totalCompleted;
          break;
        case 2:
          totalGoalWeek2 = totalGoal;
          totalCompletedWeek2 = totalCompleted;
          break;
        case 3:
          totalGoalWeek3 = totalGoal;
          totalCompletedWeek3 = totalCompleted;
          break;
        case 4:
          totalGoalWeek4 = totalGoal;
          totalCompletedWeek4 = totalCompleted;
          break;
      }
    });
    week1percent = Math.ceil((totalCompletedWeek1 / totalGoalWeek1) * 100);
    week2percent = Math.ceil((totalCompletedWeek2 / totalGoalWeek2) * 100);
    week3percent = Math.ceil((totalCompletedWeek3 / totalGoalWeek3) * 100);
    week4percent = Math.ceil((totalCompletedWeek4 / totalGoalWeek4) * 100);
  } else if (muscleSelected !== null) {
    const percentageComplete = {};
    for (let i = 0; i < 4; i++) {
      const weekObj = weekArray2[i];
      const weekPercentsComplete = {};
      // eslint-disable-next-line no-restricted-syntax
      for (const muscle in weekObj) {
        if (muscle.includes('Goal')) {
          const total = weekObj[muscle.replace('Goal', 'Total')];
          const goal = weekObj[muscle];
          const percent = Math.min((total / goal) * 100, 100);
          weekPercentsComplete[muscle.replace('Goal', '')] = percent;
        }
      }
      percentageComplete[`week${i + 1}PercentsComplete`] = weekPercentsComplete;
    }
    week1percent = Math.ceil(percentageComplete.week1PercentsComplete[muscleSelected]);
    week2percent = Math.ceil(percentageComplete.week2PercentsComplete[muscleSelected]);
    week3percent = Math.ceil(percentageComplete.week3PercentsComplete[muscleSelected]);
    week4percent = Math.ceil(percentageComplete.week4PercentsComplete[muscleSelected]);
  }

  return (
    <>
      <div className="line-percent-goal">
        <table id="line-percent-goal" className="charts-css line multiple show-labels show-primary-axis show-10-secondary-axes show-data-axes">
          <h3 style={{ marginBottom: '12px' }} className="d-flex justify-content-center">Last Four Weeks Percentages</h3>
          <tbody>
            <tr>
              <p className="line-percent-goal-datatext" style={{ position: 'absolute', top: `${96 - week1percent}%` }}>{week1percent}%</p>
              <th className="line-percent-goal-label" scope="row">week {weekArray[1].weekNum}<FontAwesomeIcon icon={faRightLong} /></th>
              <td className="line-percent-goal-data" style={{ '--start': `${(week1percent / 100) - 0.005}`, '--size': `${(week2percent / 100) - 0.005}` }}><span className="line-percent-goal-datatext">{week2percent}%</span></td>
              {/* <td style={{ '--start': '0.0', '--size': '0.0' }}><span className="line-percent-goal-datatext"> 20 </span></td> */}
            </tr>
            <tr>
              <th className="line-percent-goal-label" scope="row">week {weekArray[2].weekNum}<FontAwesomeIcon icon={faRightLong} /></th>
              <td className="line-percent-goal-data" style={{ '--start': `${(week2percent / 100) - 0.005}`, '--size': `${(week3percent / 100) - 0.005}` }}><span className="line-percent-goal-datatext">{week3percent}%</span></td>
              {/* <td style={{ '--start': '0.0', '--size': '0.5' }}><span className="line-percent-goal-datatext"> 50 </span></td> */}
            </tr>
            <tr>
              <th className="line-percent-goal-label" scope="row">week {weekArray[3].weekNum}<FontAwesomeIcon icon={faRightLong} /></th>
              <td className="line-percent-goal-data" style={{ '--start': `${(week3percent / 100) - 0.005}`, '--size': `${(week4percent / 100) - 0.005}` }}><span className="line-percent-goal-datatext">{week4percent}%</span></td>
              {/* <td style={{ '--start': '0.5', '--size': '0.3' }}><span className="line-percent-goal-datatext"> 30 </span></td> */}
            </tr>
          </tbody>
        </table>
        <div className="d-flex muscle-option-div-bar flex-column" style={{ marginTop: '70px' }}>
          <StatOptionsMuscleGroups setMuscleGroup={setMuscleGroup} />
        </div>
      </div>
    </>
  );
}

LinePercentOfGoal.propTypes = {
  weekArray: PropTypes.arrayOf(PropTypes.shape).isRequired,
  weekArray2: PropTypes.arrayOf(PropTypes.shape).isRequired,
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
