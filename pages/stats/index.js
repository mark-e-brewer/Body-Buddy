import { useEffect, useState } from 'react';
import BarChartMuscles from '../../components/charts/BarChartMuscles';
import { useAuth } from '../../utils/context/authContext';
import { getWorkoutsByUserUid, getPrevWeeks } from '../../API/apiData';
import StatOptionsButton from '../../components/StatFilterButtons/StatOptionsButton';
import BarChartWorkoutsEachDay from '../../components/charts/BarWorkoutsEachDay';
import BarChartMusclesEachDay from '../../components/charts/BarMusclesEachDay';
import LinePercentOfGoal from '../../components/charts/LinePercentOfGoal';
import LineNumsVsGoal from '../../components/charts/LineNumsVsGoal';

export default function StatsPage() {
  const [filterGraphs, setFilterGraphs] = useState('Total Per Muscle');
  const { user } = useAuth();
  const [workouts, setWorkouts] = useState([]);
  const [weeks, setWeeks] = useState([]);
  const getAllWeeks = () => {
    getPrevWeeks(user.uid).then((data) => {
      setWeeks(data?.sort((a, b) => a?.weekNum - b?.weekNum));
    });
  };
  const getAllWorkouts = () => {
    getWorkoutsByUserUid(user.uid).then(setWorkouts);
  };

  useEffect(() => {
    getAllWorkouts()?.then((data) => {
      setWorkouts(data);
    });
    getAllWeeks()?.then((data) => {
      setWeeks(data);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let graphJSX = null;
  if (filterGraphs === 'Total Per Muscle') {
    graphJSX = <BarChartMuscles workoutsArray={workouts} />;
  } else if (filterGraphs === 'Total Workouts Sun-Sat') {
    graphJSX = <BarChartWorkoutsEachDay workoutsArray={workouts} />;
  } else if (filterGraphs === 'Muscle Total Sun-Sat') {
    graphJSX = <BarChartMusclesEachDay workoutsArray={workouts} />;
  } else if (filterGraphs === 'Past Month Percentages') {
    graphJSX = <LinePercentOfGoal weekArray={weeks} />;
  } else if (filterGraphs === 'Past Month Vs Goal') {
    graphJSX = <LineNumsVsGoal weekArray={weeks} />;
  }

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <StatOptionsButton setFilterGraphs={setFilterGraphs} />
        <div
          className="d-flex justify-content-center graphs-container"
          style={{
            alignItems: 'center',
          }}
        >
          {/* Current chart JSX here */}
          {graphJSX}
        </div>
      </div>
    </>
  );
}
