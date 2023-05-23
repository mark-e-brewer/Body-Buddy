import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import WorkoutCard from '../components/WorkoutCard';
import { getWorkoutsByWeekUid } from '../API/apiData';

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

  return (
    <>
      <div className="d-flex justify-content-center" style={{ margin: '20px' }}>
        <button type="button">Form placeholder</button>
      </div>
      <div className="d-flex justify-content-center">
        {workouts.map((obj) => <WorkoutCard key={obj.firebaseKey} workoutObj={obj} onUpdate={getAllCurrentWorkouts} />)}
      </div>
    </>
  );
}
