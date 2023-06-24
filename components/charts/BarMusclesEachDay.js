import PropTypes from 'prop-types';
import {} from 'charts.css';
import { useState } from 'react';
import StatOptionsMuscleGroups from '../StatFilterButtons/StatOptionsMuscleGroups';

export default function BarChartMusclesEachDay({ workoutsArray }) {
  const [muscleGroup, setMuscleGroup] = useState('All');
  let sundayTotal = 0;
  let mondayTotal = 0;
  let tuesdayTotal = 0;
  let wednesdayTotal = 0;
  let thursdayTotal = 0;
  let fridayTotal = 0;
  let saturdayTotal = 0;
  let muscleSelected = null;
  if (muscleGroup === 'Traps') {
    muscleSelected = 'trapSets';
  } else if (muscleGroup === 'Front Delts') {
    muscleSelected = 'frontDeltSets';
  } else if (muscleGroup === 'Rear/Side Delts') {
    muscleSelected = 'rearSideDeltSets';
  } else if (muscleGroup === 'Back') {
    muscleSelected = 'backSets';
  } else if (muscleGroup === 'Chest') {
    muscleSelected = 'chestSets';
  } else if (muscleGroup === 'Biceps') {
    muscleSelected = 'bicepSets';
  } else if (muscleGroup === 'Triceps') {
    muscleSelected = 'tricepSets';
  } else if (muscleGroup === 'Quads') {
    muscleSelected = 'quadSets';
  } else if (muscleGroup === 'Hamstrings') {
    muscleSelected = 'hamstringSets';
  } else if (muscleGroup === 'Hamstrings') {
    muscleSelected = 'hamstringSets';
  } else if (muscleGroup === 'Glutes') {
    muscleSelected = 'gluteSets';
  } else if (muscleGroup === 'Calves') {
    muscleSelected = 'calveSets';
  } else if (muscleGroup === 'All') {
    muscleSelected = null;
  }
  if (muscleSelected !== null) {
    for (let i = 0; i < workoutsArray.length; i++) {
      if (workoutsArray[i]?.day === 'Sunday') {
        sundayTotal += workoutsArray[i][muscleSelected];
      } else if (workoutsArray[i]?.day === 'Monday') {
        mondayTotal += workoutsArray[i][muscleSelected];
      } else if (workoutsArray[i]?.day === 'Tuesday') {
        tuesdayTotal += workoutsArray[i][muscleSelected];
      } else if (workoutsArray[i]?.day === 'Wednesday') {
        wednesdayTotal += workoutsArray[i][muscleSelected];
      } else if (workoutsArray[i]?.day === 'Thursday') {
        thursdayTotal += workoutsArray[i][muscleSelected];
      } else if (workoutsArray[i]?.day === 'Friday') {
        fridayTotal += workoutsArray[i][muscleSelected];
      } else if (workoutsArray[i]?.day === 'Saturday') {
        saturdayTotal += workoutsArray[i][muscleSelected];
      }
    }
  } else {
    const total = {};
    workoutsArray.forEach((obj) => {
      const { day } = obj;
      Object.keys(obj).forEach((key) => {
        if (key.endsWith('Sets')) {
          const value = Number(obj[key]);
          total[day] = (total[day] || 0) + value;
        }
      });
    });
    sundayTotal = total.Sunday;
    mondayTotal = total.Monday;
    tuesdayTotal = total.Tuesday;
    wednesdayTotal = total.Wednesday;
    thursdayTotal = total.Thursday;
    fridayTotal = total.Friday;
    saturdayTotal = total.Saturday;
  }
  if (sundayTotal === undefined) {
    sundayTotal = 0;
  }
  if (mondayTotal === undefined) {
    mondayTotal = 0;
  }
  if (tuesdayTotal === undefined) {
    tuesdayTotal = 0;
  }
  if (wednesdayTotal === undefined) {
    wednesdayTotal = 0;
  }
  if (thursdayTotal === undefined) {
    thursdayTotal = 0;
  }
  if (fridayTotal === undefined) {
    fridayTotal = 0;
  }
  if (saturdayTotal === undefined) {
    saturdayTotal = 0;
  }
  const totalsArray = [sundayTotal, mondayTotal, tuesdayTotal, wednesdayTotal, thursdayTotal, fridayTotal, saturdayTotal];
  const sortedDays = totalsArray.sort((a, b) => a - b);
  const highestVal = sortedDays[6];
  const sundayPercent = (sundayTotal / highestVal);
  const mondayPercent = (mondayTotal / highestVal);
  const tuesdayPercent = (tuesdayTotal / highestVal);
  const wednesdayPercent = (wednesdayTotal / highestVal);
  const thursdayPercent = (thursdayTotal / highestVal);
  const fridayPercent = (fridayTotal / highestVal);
  const saturdayPercent = (saturdayTotal / highestVal);

  return (
    <>
      <div className="bar-chart-muscles-each-day">
        <table id="bar-muscles-each-day" className="charts-css column show-labels data-spacing-8 show-primary-axis show-5-secondary-axes">
          <h3 style={{ marginBottom: '12px' }} className="d-flex justify-content-center">{muscleGroup} Sets Complete Each Day of The Week</h3>

          <tbody>
            <tr>
              <th scope="row" className="label-bar-muscles-each-day">Sunday</th>
              <td className="bar-muscles-each-day-data" style={{ '--size': `${sundayPercent}` }}><span className="bar-muscles-each-day-datatext"> {sundayTotal} </span></td>
            </tr>
            <tr>
              <th scope="row" className="label-bar-muscles-each-day">Monday</th>
              <td className="bar-muscles-each-day-data" style={{ '--size': `${mondayPercent}` }}><span className="bar-muscles-each-day-datatext"> {mondayTotal} </span>
              </td>
            </tr>
            <tr>
              <th scope="row" className="label-bar-muscles-each-day">Tuesday</th>
              <td className="bar-muscles-each-day-data" style={{ '--size': `${tuesdayPercent}` }}><span className="bar-muscles-each-day-datatext"> {tuesdayTotal} </span></td>
            </tr>
            <tr>
              <th scope="row" className="label-bar-muscles-each-day">Wednesday</th>
              <td className="bar-muscles-each-day-data" style={{ '--size': `${wednesdayPercent}` }}><span className="bar-muscles-each-day-datatext"> {wednesdayTotal} </span></td>
            </tr>
            <tr>
              <th scope="row" className="label-bar-muscles-each-day">Thursday</th>
              <td className="bar-muscles-each-day-data" style={{ '--size': `${thursdayPercent}` }}><span className="bar-muscles-each-day-datatext"> {thursdayTotal} </span></td>
            </tr>
            <tr>
              <th scope="row" className="label-bar-muscles-each-day">Friday</th>
              <td className="bar-muscles-each-day-data" style={{ '--size': `${fridayPercent}` }}><span className="bar-muscles-each-day-datatext"> {fridayTotal} </span></td>
            </tr>
            <tr>
              <th scope="row" className="label-bar-muscles-each-day">Saturday</th>
              <td className="bar-muscles-each-day-data" style={{ '--size': `${saturdayPercent}` }}><span className="bar-muscles-each-day-datatext"> {saturdayTotal} </span></td>
            </tr>
          </tbody>
        </table>
        <div className="d-flex muscle-option-div-bar" style={{ marginTop: '70px' }}>
          <StatOptionsMuscleGroups setMuscleGroup={setMuscleGroup} />
        </div>
      </div>
    </>
  );
}

BarChartMusclesEachDay.propTypes = {
  workoutsArray: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
