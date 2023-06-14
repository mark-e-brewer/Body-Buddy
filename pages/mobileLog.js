import React, { useEffect, useState } from 'react';
import { useAuth } from '../utils/context/authContext';
import MobileLogger from '../components/MobileLogger';
import { getMobileLog } from '../API/apiData';

export default function MobileLogPage() {
  const [log, setLog] = useState([]);
  const { user } = useAuth();
  const getUsersLog = () => {
    getMobileLog(user?.uid).then(setLog);
  };

  useEffect(() => {
    getUsersLog()?.then((data) => {
      setLog(data);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <>
      <div className="logger-page-container d-flex justify-content-center">
        <MobileLogger logObj={log[0]} />
      </div>
    </>
  );
}
