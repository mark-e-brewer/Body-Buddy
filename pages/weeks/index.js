import { useEffect, useState } from 'react';
import { useAuth } from '../../utils/context/authContext';
import { getPrevWeeks } from '../../API/apiData';
import WeekCard from '../../components/WeekCard';

export default function WeeksPage() {
  const { user } = useAuth();
  const [weeks, setWeeks] = useState([]);
  const getAllPrevWeeks = () => {
    getPrevWeeks(user.uid).then(setWeeks);
  };

  useEffect(() => {
    getAllPrevWeeks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <div
          className="d-flex"
          style={{
            margin: '10px',
          }}
        >
          {weeks.map((obj) => <WeekCard key={obj.firebaseKey} weekObj={obj} />)}
        </div>
      </div>
    </>
  );
}
