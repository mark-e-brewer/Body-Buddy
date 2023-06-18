import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../utils/context/authContext';
import GoalGenerator from '../../components/forms/GoalGenerator';
import { getCurrGoal } from '../../API/apiData';

export default function GeneratorPage() {
  const [goal, setGoal] = useState([]);
  const router = useRouter();
  const { user } = useAuth();
  const { weekUid } = router.query;

  const getTheCurrentGoal = () => {
    getCurrGoal(user.uid).then(setGoal);
  };

  useEffect(() => {
    if (weekUid !== 'undefined') {
      getTheCurrentGoal();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div style={{ marginTop: '20px' }} className="d-flex flex-column justify-content-center">
        <h4 className="text-center">Select Experience Level</h4>
        <GoalGenerator weekUid={weekUid} weekFirebaseKey={goal[0].firebaseKey} />
      </div>
    </>
  );
}
