import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import WorkoutCard from '../../components/WorkoutCard';
import { getWorkoutsByWeekUid, getWeekByWeekUid } from '../../API/apiData';

export default function WorkoutsViewPage() {
  const [workouts, setWorkouts] = useState([]);
  const [week, setWeek] = useState([]);
  const router = useRouter();
  const { weekUid } = router.query;
  const getThisWeek = () => {
    getWeekByWeekUid(weekUid).then(setWeek);
  };

  const getAllCurrentWorkouts = () => {
    getWorkoutsByWeekUid(weekUid).then(setWorkouts);
  };

  useEffect(() => {
    getAllCurrentWorkouts();
    getThisWeek();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1 className="d-flex justify-content-center">Week {week[0].weekNum} Workouts</h1>
      <div className="d-flex justify-content-center">
        {workouts.map((obj) => <WorkoutCard key={obj.firebaseKey} workoutObj={obj} onUpdate={getAllCurrentWorkouts} formOnUpdate={getAllCurrentWorkouts} />)}
      </div>
    </>
  );
}
