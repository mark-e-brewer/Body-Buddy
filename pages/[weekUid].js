import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import WorkoutCard from '../components/WorkoutCard';
import { getWorkoutsByWeekUid } from '../API/apiData';
import LogWorkoutModal from '../components/forms/LogWorkout';

export default function WorkoutLogPage() {
  const [workouts, setWorkouts] = useState([]);
  const router = useRouter();
  const { weekUid } = router.query;

  const getAllCurrentWorkouts = () => {
    getWorkoutsByWeekUid(weekUid).then(setWorkouts);
  };

  useEffect(() => {
    getAllCurrentWorkouts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let jsx = null;
  if (weekUid === 'undefined') {
    jsx = <h3>Please set a goal, then you may log workouts!</h3>;
  } else {
    jsx = <LogWorkoutModal weekUidProp={weekUid} background="orange" onUpdate={getAllCurrentWorkouts} />;
  }

  return (
    <>
      <div className="d-flex justify-content-center" style={{ margin: '20px' }}>
        {jsx}
      </div>
      <div className="d-flex justify-content-center">
        {workouts.map((obj) => <WorkoutCard key={obj.firebaseKey} workoutObj={obj} onUpdate={getAllCurrentWorkouts} />)}
      </div>
    </>
  );
}
