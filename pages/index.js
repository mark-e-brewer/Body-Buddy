import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { useAuth } from '../utils/context/authContext';
import GoalBoard from '../components/GoalBoard';
import { getCurrGoal, getWorkoutsByWeekUid } from '../API/apiData';

function Home() {
  const { user } = useAuth();
  const [goal, setGoal] = useState([]);
  const [workouts, setWorkouts] = useState([]);
  const [front, setFront] = useState(0);
  const getCurrentGoal = () => {
    getCurrGoal(user.uid).then(setGoal);
  };

  const getWeeksWorkouts = () => {
    getWorkoutsByWeekUid(goal[0]?.weekUid).then(setWorkouts);
  };

  useEffect(() => {
    let frontVal = 0;
    getCurrentGoal();
    getWeeksWorkouts();
    for (let i = 0; i < workouts.length; i++) {
      frontVal += workouts[i].frontDeltSets;
      setFront(frontVal);
    }
  }, [goal, workouts]);

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
        {goal.map((obj) => <GoalBoard key={obj.firebaseKey} goalObj={obj} frontDeltVal={front} />)}
        <div style={{ marginTop: '20px' }}>
          <Link href={`/${goal[0]?.weekUid}`} passHref>
            <Button variant="success">Workout Log</Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
