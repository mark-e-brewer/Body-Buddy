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
  let week1percentComplete = 0;
  let week1percentGoal = 0;
  let week2complete = 0;
  let week2goal = 0;
  let week2percentComplete = 0;
  let week2percentGoal = 0;
  let week3complete = 0;
  let week3goal = 0;
  let week3percentComplete = 0;
  let week3percentGoal = 0;
  let week4complete = 0;
  let week4goal = 0;
  let week4percentComplete = 0;
  let week4percentGoal = 0;

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

    Object?.keys(weekObj1 || {}).forEach((key) => {
      if (key.endsWith('Goal')) {
        week1goal += weekObj1[key];
      } else if (key.endsWith('Total')) {
        week1complete += weekObj1[key];
      }
    });
    Object?.keys(weekObj2 || {}).forEach((key) => {
      if (key.endsWith('Goal')) {
        week2goal += weekObj2[key];
      } else if (key.endsWith('Total')) {
        week2complete += weekObj2[key];
      }
    });
    Object?.keys(weekObj3 || {}).forEach((key) => {
      if (key.endsWith('Goal')) {
        week3goal += weekObj3[key];
      } else if (key.endsWith('Total')) {
        week3complete += weekObj3[key];
      }
    });
    Object?.keys(weekObj4 || {}).forEach((key) => {
      if (key.endsWith('Goal')) {
        week4goal += weekObj4[key];
      } else if (key.endsWith('Total')) {
        week4complete += weekObj4[key];
      }
    });
  } else {
    const weekObj1 = prevMonth[0];
    const weekObj2 = prevMonth[1];
    const weekObj3 = prevMonth[2];
    const weekObj4 = prevMonth[3];

    Object.keys(weekObj1 || {}).forEach((key) => {
      if (key.includes(`${muscleSelected}`) && key.includes('Goal')) {
        week1goal = weekObj1[key];
      } else if (key.includes(`${muscleSelected}`) && key.includes('Total')) {
        week1complete = weekObj1[key];
      }
    });
    Object.keys(weekObj2 || {}).forEach((key) => {
      if (key.includes(`${muscleSelected}`) && key.includes('Goal')) {
        week2goal = weekObj2[key];
      } else if (key.includes(`${muscleSelected}`) && key.includes('Total')) {
        week2complete = weekObj2[key];
      }
    });
    Object.keys(weekObj3 || {}).forEach((key) => {
      if (key.includes(`${muscleSelected}`) && key.includes('Goal')) {
        week3goal = weekObj3[key];
      } else if (key.includes(`${muscleSelected}`) && key.includes('Total')) {
        week3complete = weekObj3[key];
      }
    });
    Object.keys(weekObj4 || {}).forEach((key) => {
      if (key.includes(`${muscleSelected}`) && key.includes('Goal')) {
        week4goal = weekObj4[key];
      } else if (key.includes(`${muscleSelected}`) && key.includes('Total')) {
        week4complete = weekObj4[key];
      }
    });
  }
  if (week1complete === undefined) {
    week1complete = 0;
  }
  if (week1goal === undefined) {
    week1goal = 0;
  }
  if (week2complete === undefined) {
    week2complete = 0;
  }
  if (week2goal === undefined) {
    week2goal = 0;
  }
  if (week3complete === undefined) {
    week3complete = 0;
  }
  if (week3goal === undefined) {
    week3goal = 0;
  }
  if (week4complete === undefined) {
    week4complete = 0;
  }
  if (week4goal === undefined) {
    week4goal = 0;
  }
  const allSumsArray = [week1complete, week1goal, week2complete, week2goal, week3complete, week3goal, week4complete, week4goal];
  const sortedSumsArray = allSumsArray.sort((a, b) => a - b);
  const highestVal = sortedSumsArray[7];
  week1percentGoal = (week1goal / highestVal - 0.005);
  week1percentComplete = (week1complete / highestVal - 0.005);
  week2percentGoal = (week2goal / highestVal - 0.005);
  week2percentComplete = (week2complete / highestVal - 0.005);
  week3percentGoal = (week3goal / highestVal - 0.005);
  week3percentComplete = (week3complete / highestVal - 0.005);
  week4percentGoal = (week4goal / highestVal - 0.005);
  week4percentComplete = (week4complete / highestVal - 0.005);

  return (
    <>
      <div className="line-number-goal">
        <table id="line-number-goal" className="charts-css line multiple show-labels show-primary-axis show-10-secondary-axes show-data-axes">
          <div className="text-center d-flex justify-content-center title-legend-container">
            <h3 style={{ marginBottom: '12px' }} className="d-flex justify-content-center">Last Four Weeks Completion Vs Goal</h3>
            <div className="legend-container">
              <ul id="legend" className="charts-css legend legend-circle line-nums-legend">
                <li id="legend-item">Goal Set</li>
                <li id="legend-item">Complete</li>
              </ul>
            </div>
          </div>
          <tbody>
            <tr>
              <p
                className="line-number-goal-datatext"
                style={{
                  position: 'absolute', bottom: `${(100 * week1percentComplete) - 5}%`, left: '-9.5%', zIndex: '100',
                }}
              >{week1complete}
              </p>
              <p
                className="line-number-goal-datatext"
                style={{
                  position: 'absolute', bottom: `${(100 * week1percentGoal) - 2}%`, left: '-9.5%', zIndex: '100',
                }}
              >{week1goal}
              </p>
              <th className="line-number-goal-label" scope="row">week {prevMonth[1]?.weekNum}<FontAwesomeIcon icon={faRightLong} /></th>
              <td className="line-number-goal-data" style={{ '--start': `${week1percentComplete}`, '--size': `${week2percentComplete}` }}><span className="line-number-goal-datatext">{week2complete}</span></td>
              <td className="line-number-goal-dataGoal" style={{ '--start': `${week1percentGoal}`, '--size': `${week2percentGoal}` }}><span className="line-number-goal-datatext">{week2goal}</span></td>
            </tr>
            <tr>
              <th className="line-number-goal-label" scope="row">week {prevMonth[2]?.weekNum}<FontAwesomeIcon icon={faRightLong} /></th>
              <td className="line-number-goal-data" style={{ '--start': `${week2percentComplete}`, '--size': `${week3percentComplete}` }}><span className="line-number-goal-datatext">{week3complete}</span></td>
              <td className="line-number-goal-dataGoal" style={{ '--start': `${week2percentGoal}`, '--size': `${week3percentGoal}` }}><span className="line-number-goal-datatext">{week3goal}</span></td>
            </tr>
            <tr>
              <th className="line-number-goal-label" scope="row">week {prevMonth[3]?.weekNum}<FontAwesomeIcon icon={faRightLong} /></th>
              <td className="line-number-goal-data" style={{ '--start': `${week3percentComplete}`, '--size': `${week4percentComplete}` }}><span className="line-number-goal-datatext">{week4complete}</span></td>
              <td className="line-number-goal-dataGoal" style={{ '--start': `${week3percentGoal}`, '--size': `${week4percentGoal}` }}><span className="line-number-goal-datatext">{week4goal}</span></td>
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
