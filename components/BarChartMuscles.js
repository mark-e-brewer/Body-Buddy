// import PropTypes from 'prop-types';
import {} from 'charts.css';

export default function BarChartMuscles() {
  return (
    <>
      <div className="my-bar-chart">
        <table id="spacing-example-1" className="charts-css column show-labels data-spacing-4">
          <caption> Sets logged for each muscle group</caption>
          <thead>
            <tr>
              <th scope="col"> Month </th>
              <th scope="col"> Progress </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="label-bar-muscles"> Traps </th>
              <td style={{ '--size': '1' }}><span className="data"> 30 </span></td>
            </tr>
            <tr>
              <th scope="row" className="label-bar-muscles">Front Delt</th>
              <td style={{ '--size': '0.9' }}><span className="data"> 30 </span>
                <span className="tooltip">Front Delts</span>
              </td>
            </tr>
            <tr>
              <th scope="row" className="label-bar-muscles">R/S Delt</th>
              <td style={{ '--size': '0.1' }}><span className="data"> 30 </span><span className="tooltip">Rear/Side Delts</span></td>
            </tr>
            <tr>
              <th scope="row" className="label-bar-muscles"> Back </th>
              <td style={{ '--size': '0.3' }}><span className="data"> 30 </span></td>
            </tr>
            <tr>
              <th scope="row" className="label-bar-muscles"> Chest </th>
              <td style={{ '--size': '0.3' }}><span className="data"> 30 </span></td>
            </tr>
            <tr>
              <th scope="row" className="label-bar-muscles"> Bicep </th>
              <td style={{ '--size': '0.3' }}><span className="data"> 30 </span></td>
            </tr>
            <tr>
              <th scope="row" className="label-bar-muscles"> Tricep </th>
              <td style={{ '--size': '0.3' }}><span className="data"> 30 </span></td>
            </tr>
            <tr>
              <th scope="row" className="label-bar-muscles"> Quad </th>
              <td style={{ '--size': '0.3' }}><span className="data"> 30 </span>
                <span className="tooltip">Quadriceps</span>
              </td>
            </tr>
            <tr>
              <th scope="row" className="label-bar-muscles"> Ham </th>
              <td style={{ '--size': '0.3' }}><span className="data"> 30 </span>
                <span className="tooltip">Hamstrings</span>
              </td>
            </tr>
            <tr>
              <th scope="row" className="label-bar-muscles"> Glutes </th>
              <td style={{ '--size': '0.3' }}><span className="data"> 30 </span></td>
            </tr>
            <tr>
              <th scope="row" className="label-bar-muscles"> Calves </th>
              <td style={{ '--size': '0.3' }}><span className="data"> 30 </span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

// BarChartMuscles.propTypes = {
//   weekArray: PropTypes.arrayOf(PropTypes.shape).isRequired,
//   workoutsArray: PropTypes.arrayOf(PropTypes.shape).isRequired,
// };
