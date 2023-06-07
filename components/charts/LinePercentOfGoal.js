import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import {} from 'charts.css';
import { useEffect, useState } from 'react';
import StatOptionsMuscleGroups from '../StatFilterButtons/StatOptionsMuscleGroups';

export default function LinePercentOfGoal({ weekArray }) {
  const [prevMonth, setPrevMonth] = useState([]);
  const [muscleGroup, setMuscleGroup] = useState('All');
  useEffect(() => {
    const highestFourWeeks = weekArray?.slice(-4);
    setPrevMonth(highestFourWeeks);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weekArray]);

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
    const weekObj1 = prevMonth[0];
    const weekObj2 = prevMonth[1];
    const weekObj3 = prevMonth[2];
    const weekObj4 = prevMonth[3];

    let totalGoal1 = 0;
    let totalCompleted1 = 0;
    let totalGoal2 = 0;
    let totalCompleted2 = 0;
    let totalGoal3 = 0;
    let totalCompleted3 = 0;
    let totalGoal4 = 0;
    let totalCompleted4 = 0;

    Object?.keys(weekObj1 || {}).forEach((key) => {
      if (key?.endsWith('Goal')) {
        const totalKey = key.replace('Goal', 'Total');
        const goal = weekObj1[key];
        const total = weekObj1[totalKey];
        const completed = Math.min(total, goal);
        totalGoal1 += goal;
        totalCompleted1 += completed;
      }
    });
    Object?.keys(weekObj2 || {}).forEach((key) => {
      if (key?.endsWith('Goal')) {
        const totalKey = key.replace('Goal', 'Total');
        const goal = weekObj2[key];
        const total = weekObj2[totalKey];
        const completed = Math.min(total, goal);
        totalGoal2 += goal;
        totalCompleted2 += completed;
      }
    });
    Object?.keys(weekObj3 || {}).forEach((key) => {
      if (key?.endsWith('Goal')) {
        const totalKey = key.replace('Goal', 'Total');
        const goal = weekObj3[key];
        const total = weekObj3[totalKey];
        const completed = Math.min(total, goal);
        totalGoal3 += goal;
        totalCompleted3 += completed;
      }
    });
    Object?.keys(weekObj4 || {}).forEach((key) => {
      if (key?.endsWith('Goal')) {
        const totalKey = key.replace('Goal', 'Total');
        const goal = weekObj4[key];
        const total = weekObj4[totalKey];
        const completed = Math.min(total, goal);
        totalGoal4 += goal;
        totalCompleted4 += completed;
      }
    });

    week1percent = Math.ceil((totalCompleted1 / totalGoal1) * 100);
    week2percent = Math.ceil((totalCompleted2 / totalGoal2) * 100);
    week3percent = Math.ceil((totalCompleted3 / totalGoal3) * 100);
    week4percent = Math.ceil((totalCompleted4 / totalGoal4) * 100);
  } else if (muscleSelected !== null) {
    const percentageComplete = {};
    for (let i = 0; i < 4; i++) {
      const weekObj = prevMonth[i];
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
    week1percent = Math.ceil(percentageComplete?.week1PercentsComplete[muscleSelected]);
    week2percent = Math.ceil(percentageComplete?.week2PercentsComplete[muscleSelected]);
    week3percent = Math.ceil(percentageComplete?.week3PercentsComplete[muscleSelected]);
    week4percent = Math.ceil(percentageComplete?.week4PercentsComplete[muscleSelected]);
  }

  return (
    <>
      <div className="line-percent-goal">
        <table id="line-percent-goal" className="charts-css line multiple show-labels show-primary-axis show-10-secondary-axes show-data-axes">
          <h3 style={{ marginBottom: '12px' }} className="d-flex justify-content-center">Last Four Weeks Percentages</h3>
          <tbody>
            <tr>
              <p className="line-percent-goal-datatext" style={{ position: 'absolute', top: `${96 - week1percent}%`, left: '-9.5%' }}>{week1percent}%</p>
              <th className="line-percent-goal-label" scope="row">week {prevMonth[1]?.weekNum}<FontAwesomeIcon icon={faRightLong} /></th>
              <td className="line-percent-goal-data" style={{ '--start': `${(week1percent / 100) - 0.005}`, '--size': `${(week2percent / 100) - 0.005}` }}><span className="line-percent-goal-datatext">{week2percent}%</span></td>
              {/* <td style={{ '--start': '0.0', '--size': '0.0' }}><span className="line-percent-goal-datatext"> 20 </span></td> */}
            </tr>
            <tr>
              <th className="line-percent-goal-label" scope="row">week {prevMonth[2]?.weekNum}<FontAwesomeIcon icon={faRightLong} /></th>
              <td className="line-percent-goal-data" style={{ '--start': `${(week2percent / 100) - 0.005}`, '--size': `${(week3percent / 100) - 0.005}` }}><span className="line-percent-goal-datatext">{week3percent}%</span></td>
              {/* <td style={{ '--start': '0.0', '--size': '0.5' }}><span className="line-percent-goal-datatext"> 50 </span></td> */}
            </tr>
            <tr>
              <th className="line-percent-goal-label" scope="row">week {prevMonth[3]?.weekNum}<FontAwesomeIcon icon={faRightLong} /></th>
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
};
