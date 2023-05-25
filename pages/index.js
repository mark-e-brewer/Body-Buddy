import { useEffect, useState } from 'react';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { useAuth } from '../utils/context/authContext';
import GoalBoard from '../components/GoalBoard';
import { getCurrGoal, getWorkoutsByWeekUid } from '../API/apiData';

function Home() {
  const { user } = useAuth();
  const [goal, setGoal] = useState([]);
  const [workouts, setWorkouts] = useState([]);
  const getCurrentGoal = () => {
    getCurrGoal(user.uid).then(setGoal);
  };

  const getWorkouts = () => {
    getWorkoutsByWeekUid(goal[0]?.weekUid).then(setWorkouts);
  };

  useEffect(() => {
    getCurrentGoal();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getWorkouts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [goal]);

  return (
    <>
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          height: '95vh',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        {goal.map((obj) => <GoalBoard key={obj.firebaseKey} goalObj={obj} workoutsArray={workouts} />)}
        <div style={{ marginTop: '20px' }}>
          <h4 className="log-workout-text">Log Workout</h4>
          <Link href={`/${goal[0]?.weekUid}`} passHref>
            <Button className="nav-workouts-btn" variant="warning"><FontAwesomeIcon icon={faDumbbell} /></Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
