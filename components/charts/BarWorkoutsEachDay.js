import PropTypes from 'prop-types';
import {} from 'charts.css';

export default function BarChartWorkoutsEachDay({ workoutsArray }) {
  let sundayTotal = 0;
  let mondayTotal = 0;
  let tuesdayTotal = 0;
  let wednesdayTotal = 0;
  let thursdayTotal = 0;
  let fridayTotal = 0;
  let saturdayTotal = 0;
  for (let i = 0; i < workoutsArray.length; i++) {
    if (workoutsArray[i]?.day === 'Sunday') {
      sundayTotal += 1;
    } else if (workoutsArray[i]?.day === 'Monday') {
      mondayTotal += 1;
    } else if (workoutsArray[i]?.day === 'Tuesday') {
      tuesdayTotal += 1;
    } else if (workoutsArray[i]?.day === 'Wednesday') {
      wednesdayTotal += 1;
    } else if (workoutsArray[i]?.day === 'Thursday') {
      thursdayTotal += 1;
    } else if (workoutsArray[i]?.day === 'Friday') {
      fridayTotal += 1;
    } else if (workoutsArray[i]?.day === 'Saturday') {
      saturdayTotal += 1;
    }
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
      <div className="bar-chart-workouts-each-day">
        <table id="bar-workouts-each-day" className="charts-css column show-labels data-spacing-8 show-primary-axis show-5-secondary-axes">
          <h3 style={{ marginBottom: '12px' }} className="d-flex justify-content-center">Workouts Complete Each Day of The Week</h3>

          <tbody>
            <tr>
              <th scope="row" className="label-bar-workouts-each-day">Sunday</th>
              <td className="bar-workouts-each-day-data" style={{ '--size': `${sundayPercent}` }}><span className="bar-workouts-each-day-datatext"> {sundayTotal} </span></td>
            </tr>
            <tr>
              <th scope="row" className="label-bar-workouts-each-day">Monday</th>
              <td className="bar-workouts-each-day-data" style={{ '--size': `${mondayPercent}` }}><span className="bar-workouts-each-day-datatext"> {mondayTotal} </span>
              </td>
            </tr>
            <tr>
              <th scope="row" className="label-bar-workouts-each-day">Tuesday</th>
              <td className="bar-workouts-each-day-data" style={{ '--size': `${tuesdayPercent}` }}><span className="bar-workouts-each-day-datatext"> {tuesdayTotal} </span></td>
            </tr>
            <tr>
              <th scope="row" className="label-bar-workouts-each-day">Wednesday</th>
              <td className="bar-workouts-each-day-data" style={{ '--size': `${wednesdayPercent}` }}><span className="bar-workouts-each-day-datatext"> {wednesdayTotal} </span></td>
            </tr>
            <tr>
              <th scope="row" className="label-bar-workouts-each-day">Thursday</th>
              <td className="bar-workouts-each-day-data" style={{ '--size': `${thursdayPercent}` }}><span className="bar-workouts-each-day-datatext"> {thursdayTotal} </span></td>
            </tr>
            <tr>
              <th scope="row" className="label-bar-workouts-each-day">Friday</th>
              <td className="bar-workouts-each-day-data" style={{ '--size': `${fridayPercent}` }}><span className="bar-workouts-each-day-datatext"> {fridayTotal} </span></td>
            </tr>
            <tr>
              <th scope="row" className="label-bar-workouts-each-day">Saturday</th>
              <td className="bar-workouts-each-day-data" style={{ '--size': `${saturdayPercent}` }}><span className="bar-workouts-each-day-datatext"> {saturdayTotal} </span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

BarChartWorkoutsEachDay.propTypes = {
  workoutsArray: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
