import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuth } from '../utils/context/authContext';
import { postMobileLog, patchMobileLog } from '../API/apiData';

const initialState = {
  back: 0,
  bicep: 0,
  calve: 0,
  chest: 0,
  day: 'Sunday',
  frontDelt: 0,
  glute: 0,
  hamstring: 0,
  quad: 0,
  rearSideDelt: 0,
  tricep: 0,
  trap: 0,
};

export default function MobileLogger({ logObj }) {
  const [countObj, setCountObj] = useState(initialState);
  const { user } = useAuth();
  console.warn(logObj);
  useEffect(() => {
    if (logObj?.firebaseKey) {
      setCountObj(logObj);
    }
  }, [logObj]);
  console.warn(`COUNT ${countObj.day}`);

  const handleUpClickTrap = () => {
    if (countObj.firebaseKey) {
      const patchPayload = { ...countObj, trap: countObj.trap + 1 };
      patchMobileLog(patchPayload).then();
    } else {
      postMobileLog(initialState).then(({ name }) => {
        const patchPayload = { firebaseKey: name, userUid: user.uid };
        patchMobileLog(patchPayload).then();
      });
    }
  };

  return (
    <>
      <div className="log-counters-container">
        <div className="counter-muscle-container d-flex justify-content-between">
          <h5 className="counter-muscle">Trapezius</h5>
          <div className="counter-container">
            <button type="button" aria-label="Button label" onClick={handleUpClickTrap} id="up-iterate"><FontAwesomeIcon icon={faAngleUp} /></button>
            <p id="count">{countObj.trap}</p>
            <p id="down-iterate"><FontAwesomeIcon icon={faAngleDown} /></p>
          </div>
        </div>
        <div className="counter-muscle-container d-flex justify-content-between">
          <h5 className="counter-muscle">Front Deltoids</h5>
          <div className="counter-container">
            <p id="up-iterate"><FontAwesomeIcon icon={faAngleUp} /></p>
            <p id="count">{countObj.frontDelt}</p>
            <p id="down-iterate"><FontAwesomeIcon icon={faAngleDown} /></p>
          </div>
        </div>
        <div className="counter-muscle-container d-flex justify-content-between">
          <h5 className="counter-muscle">Side & Rear Deltoids</h5>
          <div className="counter-container">
            <p id="up-iterate"><FontAwesomeIcon icon={faAngleUp} /></p>
            <p id="count">{countObj.rearSideDelt}</p>
            <p id="down-iterate"><FontAwesomeIcon icon={faAngleDown} /></p>
          </div>
        </div>
        <div className="counter-muscle-container d-flex justify-content-between">
          <h5 className="counter-muscle">Back</h5>
          <div className="counter-container">
            <p id="up-iterate"><FontAwesomeIcon icon={faAngleUp} /></p>
            <p id="count">{countObj?.back}</p>
            <p id="down-iterate"><FontAwesomeIcon icon={faAngleDown} /></p>
          </div>
        </div>
        <div className="counter-muscle-container d-flex justify-content-between">
          <h5 className="counter-muscle">Chest</h5>
          <div className="counter-container">
            <p id="up-iterate"><FontAwesomeIcon icon={faAngleUp} /></p>
            <p id="count">{countObj.chest}</p>
            <p id="down-iterate"><FontAwesomeIcon icon={faAngleDown} /></p>
          </div>
        </div>
        <div className="counter-muscle-container d-flex justify-content-between">
          <h5 className="counter-muscle">Biceps</h5>
          <div className="counter-container">
            <p id="up-iterate"><FontAwesomeIcon icon={faAngleUp} /></p>
            <p id="count">{countObj.bicep}</p>
            <p id="down-iterate"><FontAwesomeIcon icon={faAngleDown} /></p>
          </div>
        </div>
        <div className="counter-muscle-container d-flex justify-content-between">
          <h5 className="counter-muscle">Triceps</h5>
          <div className="counter-container">
            <p id="up-iterate"><FontAwesomeIcon icon={faAngleUp} /></p>
            <p id="count">{countObj.tricep}</p>
            <p id="down-iterate"><FontAwesomeIcon icon={faAngleDown} /></p>
          </div>
        </div>
        <div className="counter-muscle-container d-flex justify-content-between">
          <h5 className="counter-muscle">Quadriceps</h5>
          <div className="counter-container">
            <p id="up-iterate"><FontAwesomeIcon icon={faAngleUp} /></p>
            <p id="count">{countObj.quad}</p>
            <p id="down-iterate"><FontAwesomeIcon icon={faAngleDown} /></p>
          </div>
        </div>
        <div className="counter-muscle-container d-flex justify-content-between">
          <h5 className="counter-muscle">Hamstrings</h5>
          <div className="counter-container">
            <p id="up-iterate"><FontAwesomeIcon icon={faAngleUp} /></p>
            <p id="count">{countObj.hamstring}</p>
            <p id="down-iterate"><FontAwesomeIcon icon={faAngleDown} /></p>
          </div>
        </div>
        <div className="counter-muscle-container d-flex justify-content-between">
          <h5 className="counter-muscle">Glutes</h5>
          <div className="counter-container">
            <p id="up-iterate"><FontAwesomeIcon icon={faAngleUp} /></p>
            <p id="count">{countObj.glute}</p>
            <p id="down-iterate"><FontAwesomeIcon icon={faAngleDown} /></p>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <h5 className="counter-muscle">Calves</h5>
          <div className="counter-container">
            <p id="up-iterate"><FontAwesomeIcon icon={faAngleUp} /></p>
            <p id="count">{countObj.calve}</p>
            <p id="down-iterate"><FontAwesomeIcon icon={faAngleDown} /></p>
          </div>
        </div>
      </div>
    </>
  );
}

MobileLogger.propTypes = {
  logObj: PropTypes.shape({
    back: PropTypes.number,
    bicep: PropTypes.number,
    calve: PropTypes.number,
    chest: PropTypes.number,
    day: PropTypes.string,
    firebaseKey: PropTypes.string,
    frontDelt: PropTypes.number,
    glute: PropTypes.number,
    hamstring: PropTypes.number,
    quad: PropTypes.number,
    rearSideDelt: PropTypes.number,
    tricep: PropTypes.number,
    trap: PropTypes.number,
    userUid: PropTypes.string,
    weekUid: PropTypes.string,
  }).isRequired,
};
