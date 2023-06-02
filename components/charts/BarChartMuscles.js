import PropTypes from 'prop-types';
import {} from 'charts.css';

export default function BarChartMuscles({ workoutsArray }) {
  let trapValue = 0;
  let frontDeltValue = 0;
  let rearSideDeltValue = 0;
  let backValue = 0;
  let chestValue = 0;
  let bicepValue = 0;
  let tricepValue = 0;
  let quadValue = 0;
  let hamstringValue = 0;
  let gluteValue = 0;
  let calveValue = 0;
  for (let i = 0; i < workoutsArray.length; i++) {
    trapValue += workoutsArray[i]?.trapSets;
    frontDeltValue += workoutsArray[i]?.frontDeltSets;
    rearSideDeltValue += workoutsArray[i]?.rearSideDeltSets;
    backValue += workoutsArray[i]?.backSets;
    chestValue += workoutsArray[i]?.chestSets;
    bicepValue += workoutsArray[i]?.bicepSets;
    tricepValue += workoutsArray[i]?.tricepSets;
    quadValue += workoutsArray[i]?.quadSets;
    hamstringValue += workoutsArray[i]?.hamstringSets;
    gluteValue += workoutsArray[i]?.gluteSets;
    calveValue += workoutsArray[i]?.calveSets;
  }
  const musclesArray = [trapValue, frontDeltValue, rearSideDeltValue, backValue, chestValue, bicepValue, tricepValue, quadValue, hamstringValue, gluteValue, calveValue];
  const sortedMusclesArray = musclesArray.sort((a, b) => a - b);
  const highestVal = sortedMusclesArray[10];
  const trapPercent = (trapValue / highestVal);
  const frontDeltPercent = (frontDeltValue / highestVal);
  const rearSideDeltPercent = (rearSideDeltValue / highestVal);
  const backPercent = (backValue / highestVal);
  const chestPercent = (chestValue / highestVal);
  const bicepPercent = (bicepValue / highestVal);
  const tricepPercent = (tricepValue / highestVal);
  const quadPercent = (quadValue / highestVal);
  const hamstringPercent = (hamstringValue / highestVal);
  const glutePercent = (gluteValue / highestVal);
  const calvePercent = (calveValue / highestVal);

  return (
    <>
      <div className="bar-chart-total-muscles">
        <table id="bar-muscle-total" className="charts-css column show-labels data-spacing-8 show-primary-axis show-5-secondary-axes">
          <h3 style={{ marginBottom: '12px' }} className="d-flex justify-content-center">Total sets Complete for each muscle group</h3>

          <tbody>
            <tr>
              <th scope="row" className="label-bar-muscles"> Traps </th>
              <td className="bar-muscle-data" style={{ '--size': `${trapPercent}` }}><span className="bar-muscle-datatext"> {trapValue} </span><span className="tooltip">Trapezius</span></td>
            </tr>
            <tr>
              <th scope="row" className="label-bar-muscles">Front D</th>
              <td className="bar-muscle-data" style={{ '--size': `${frontDeltPercent}` }}><span className="bar-muscle-datatext"> {frontDeltValue} </span>
                <span className="tooltip">Front Delts</span>
              </td>
            </tr>
            <tr>
              <th scope="row" className="label-bar-muscles">R/S Delt</th>
              <td className="bar-muscle-data" style={{ '--size': `${rearSideDeltPercent}` }}><span className="bar-muscle-datatext"> {rearSideDeltValue} </span><span className="tooltip">Rear/Side Delts</span></td>
            </tr>
            <tr>
              <th scope="row" className="label-bar-muscles"> Back </th>
              <td className="bar-muscle-data" style={{ '--size': `${backPercent}` }}><span className="bar-muscle-datatext"> {backValue} </span></td>
            </tr>
            <tr>
              <th scope="row" className="label-bar-muscles"> Chest </th>
              <td className="bar-muscle-data" style={{ '--size': `${chestPercent}` }}><span className="bar-muscle-datatext"> {chestValue} </span></td>
            </tr>
            <tr>
              <th scope="row" className="label-bar-muscles"> Bicep </th>
              <td className="bar-muscle-data" style={{ '--size': `${bicepPercent}` }}><span className="bar-muscle-datatext"> {bicepValue} </span></td>
            </tr>
            <tr>
              <th scope="row" className="label-bar-muscles"> Tricep </th>
              <td className="bar-muscle-data" style={{ '--size': `${tricepPercent}` }}><span className="bar-muscle-datatext"> {tricepValue} </span></td>
            </tr>
            <tr>
              <th scope="row" className="label-bar-muscles"> Quad </th>
              <td className="bar-muscle-data" style={{ '--size': `${quadPercent}` }}><span className="bar-muscle-datatext"> {quadValue} </span>
                <span className="tooltip">Quadriceps</span>
              </td>
            </tr>
            <tr>
              <th scope="row" className="label-bar-muscles"> Ham </th>
              <td className="bar-muscle-data" style={{ '--size': `${hamstringPercent}` }}><span className="bar-muscle-datatext"> {hamstringValue} </span>
                <span className="tooltip">Hamstrings</span>
              </td>
            </tr>
            <tr>
              <th scope="row" className="label-bar-muscles"> Glutes </th>
              <td className="bar-muscle-data" style={{ '--size': `${glutePercent}` }}><span className="bar-muscle-datatext"> {gluteValue} </span></td>
            </tr>
            <tr>
              <th scope="row" className="label-bar-muscles"> Calves </th>
              <td className="bar-muscle-data" style={{ '--size': `${calvePercent}` }}><span className="bar-muscle-datatext"> {calveValue} </span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

BarChartMuscles.propTypes = {
  workoutsArray: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
