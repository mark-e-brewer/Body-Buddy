/* eslint-disable no-undef */ // DELETE THIS
/* eslint-disable prefer-const */ // DELETE THIS
/* eslint-disable no-unused-vars */ // DELETE THIS
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';
import {} from 'charts.css';
import { useEffect, useState } from 'react';
import StatOptionsMuscleGroups from '../StatFilterButtons/StatOptionsMuscleGroups';

export default function LineNumsVsGoal({ weekArray }) {
  const [prevMonth, setPrevMonth] = useState([]);
  const [muscleGroup, setMuscleGroup] = useState('All');
  useEffect(() => {
    const highestFourWeeks = weekArray?.slice(-4);
    setPrevMonth(highestFourWeeks);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weekArray]);
  let muscleSelected = null;
  let week1complete = 0;
  let week1goal = 0;
  let week2complete = 0;
  let week2goal = 0;
  let week3complete = 0;
  let week3goal = 0;
  let week4complete = 0;
  let week4goal = 0;

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
              <td style={{ '--start': '0.0', '--size': '0.0' }}><span className="line-percent-goal-datatext"> 20 </span></td>
            </tr>
            <tr>
              <th className="line-percent-goal-label" scope="row">week {prevMonth[2]?.weekNum}<FontAwesomeIcon icon={faRightLong} /></th>
              <td className="line-percent-goal-data" style={{ '--start': `${(week2percent / 100) - 0.005}`, '--size': `${(week3percent / 100) - 0.005}` }}><span className="line-percent-goal-datatext">{week3percent}%</span></td>
              <td style={{ '--start': '0.0', '--size': '0.5' }}><span className="line-percent-goal-datatext"> 50 </span></td>
            </tr>
            <tr>
              <th className="line-percent-goal-label" scope="row">week {prevMonth[3]?.weekNum}<FontAwesomeIcon icon={faRightLong} /></th>
              <td className="line-percent-goal-data" style={{ '--start': `${(week3percent / 100) - 0.005}`, '--size': `${(week4percent / 100) - 0.005}` }}><span className="line-percent-goal-datatext">{week4percent}%</span></td>
              <td style={{ '--start': '0.5', '--size': '0.3' }}><span className="line-percent-goal-datatext"> 30 </span></td>
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

LineNumsVsGoal.propTypes = {
  weekArray: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
