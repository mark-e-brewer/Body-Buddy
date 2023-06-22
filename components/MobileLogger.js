import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuth } from '../utils/context/authContext';
import { postMobileLog, patchMobileLog, patchMobileLogReset } from '../API/apiData';
import MobileLogSubmit from './forms/MobileLogSubmit';

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

export default function MobileLogger({ logObj, onUpdate }) {
  const [countObj, setCountObj] = useState(initialState);
  const { user } = useAuth();
  const router = useRouter();
  const { weekUid } = router.query;

  useEffect(() => {
    if (logObj?.firebaseKey) {
      setCountObj(logObj);
    }
  }, [logObj]);

  const resetOnFormSubmit = () => {
    const resetPayload = { ...initialState };
    patchMobileLogReset(resetPayload, countObj.firebaseKey).then(() => {
      onUpdate();
    });
  };

  const handleReset = () => {
    if (countObj?.firebaseKey) {
      const resetPayload = { ...initialState };
      patchMobileLogReset(resetPayload, countObj.firebaseKey).then(() => {
        onUpdate();
      });
    } else {
      window.confirm('Use Log First!');
    }
  };

  const upClickTrap = () => {
    if (countObj.firebaseKey) {
      const patchPayload = { ...countObj, trap: countObj.trap + 1 };
      patchMobileLog(patchPayload).then(() => {
        onUpdate();
      });
    } else {
      postMobileLog(initialState).then(({ name }) => {
        const patchPayload = { firebaseKey: name, userUid: user.uid, trap: countObj.trap + 1 };
        patchMobileLog(patchPayload).then(() => {
          onUpdate();
        });
      });
    }
  };
  const downClickTrap = () => {
    if (countObj.firebaseKey) {
      const patchPayload = { ...countObj, trap: countObj.trap - 1 };
      patchMobileLog(patchPayload).then(() => {
        onUpdate();
      });
    } else {
      postMobileLog(initialState).then(({ name }) => {
        const patchPayload = { firebaseKey: name, userUid: user.uid, trap: countObj.trap - 1 };
        patchMobileLog(patchPayload).then(() => {
          onUpdate();
        });
      });
    }
  };

  const upClickFrontD = () => {
    if (countObj.firebaseKey) {
      const patchPayload = { ...countObj, frontDelt: countObj.frontDelt + 1 };
      patchMobileLog(patchPayload).then(() => {
        onUpdate();
      });
    } else {
      postMobileLog(initialState).then(({ name }) => {
        const patchPayload = { firebaseKey: name, userUid: user.uid, frontDelt: countObj.frontDelt + 1 };
        patchMobileLog(patchPayload).then(() => {
          onUpdate();
        });
      });
    }
  };
  const downClickFrontD = () => {
    if (countObj.firebaseKey) {
      const patchPayload = { ...countObj, frontDelt: countObj.frontDelt - 1 };
      patchMobileLog(patchPayload).then(() => {
        onUpdate();
      });
    } else {
      postMobileLog(initialState).then(({ name }) => {
        const patchPayload = { firebaseKey: name, userUid: user.uid, frontDelt: countObj.frontDelt - 1 };
        patchMobileLog(patchPayload).then(() => {
          onUpdate();
        });
      });
    }
  };

  const upClickRearSide = () => {
    if (countObj.firebaseKey) {
      const patchPayload = { ...countObj, rearSideDelt: countObj.rearSideDelt + 1 };
      patchMobileLog(patchPayload).then(() => {
        onUpdate();
      });
    } else {
      postMobileLog(initialState).then(({ name }) => {
        const patchPayload = { firebaseKey: name, userUid: user.uid, rearSideDelt: countObj.rearSideDelt + 1 };
        patchMobileLog(patchPayload).then(() => {
          onUpdate();
        });
      });
    }
  };
  const downClickRearSide = () => {
    if (countObj.firebaseKey) {
      const patchPayload = { ...countObj, rearSideDelt: countObj.rearSideDelt - 1 };
      patchMobileLog(patchPayload).then(() => {
        onUpdate();
      });
    } else {
      postMobileLog(initialState).then(({ name }) => {
        const patchPayload = { firebaseKey: name, userUid: user.uid, rearSideDelt: countObj.rearSideDelt - 1 };
        patchMobileLog(patchPayload).then(() => {
          onUpdate();
        });
      });
    }
  };

  const upClickBack = () => {
    if (countObj.firebaseKey) {
      const patchPayload = { ...countObj, back: countObj.back + 1 };
      patchMobileLog(patchPayload).then(() => {
        onUpdate();
      });
    } else {
      postMobileLog(initialState).then(({ name }) => {
        const patchPayload = { firebaseKey: name, userUid: user.uid, back: countObj.back + 1 };
        patchMobileLog(patchPayload).then(() => {
          onUpdate();
        });
      });
    }
  };
  const downClickBack = () => {
    if (countObj.firebaseKey) {
      const patchPayload = { ...countObj, back: countObj.back - 1 };
      patchMobileLog(patchPayload).then(() => {
        onUpdate();
      });
    } else {
      postMobileLog(initialState).then(({ name }) => {
        const patchPayload = { firebaseKey: name, userUid: user.uid, back: countObj.back - 1 };
        patchMobileLog(patchPayload).then(() => {
          onUpdate();
        });
      });
    }
  };

  const upClickChest = () => {
    if (countObj.firebaseKey) {
      const patchPayload = { ...countObj, chest: countObj.chest + 1 };
      patchMobileLog(patchPayload).then(() => {
        onUpdate();
      });
    } else {
      postMobileLog(initialState).then(({ name }) => {
        const patchPayload = { firebaseKey: name, userUid: user.uid, chest: countObj.chest + 1 };
        patchMobileLog(patchPayload).then(() => {
          onUpdate();
        });
      });
    }
  };
  const downClickChest = () => {
    if (countObj.firebaseKey) {
      const patchPayload = { ...countObj, chest: countObj.chest - 1 };
      patchMobileLog(patchPayload).then(() => {
        onUpdate();
      });
    } else {
      postMobileLog(initialState).then(({ name }) => {
        const patchPayload = { firebaseKey: name, userUid: user.uid, chest: countObj.chest - 1 };
        patchMobileLog(patchPayload).then(() => {
          onUpdate();
        });
      });
    }
  };

  const upClickBicep = () => {
    if (countObj.firebaseKey) {
      const patchPayload = { ...countObj, bicep: countObj.bicep + 1 };
      patchMobileLog(patchPayload).then(() => {
        onUpdate();
      });
    } else {
      postMobileLog(initialState).then(({ name }) => {
        const patchPayload = { firebaseKey: name, userUid: user.uid, bicep: countObj.bicep + 1 };
        patchMobileLog(patchPayload).then(() => {
          onUpdate();
        });
      });
    }
  };
  const downClickBicep = () => {
    if (countObj.firebaseKey) {
      const patchPayload = { ...countObj, bicep: countObj.bicep - 1 };
      patchMobileLog(patchPayload).then(() => {
        onUpdate();
      });
    } else {
      postMobileLog(initialState).then(({ name }) => {
        const patchPayload = { firebaseKey: name, userUid: user.uid, bicep: countObj.bicep - 1 };
        patchMobileLog(patchPayload).then(() => {
          onUpdate();
        });
      });
    }
  };

  const upClickTricep = () => {
    if (countObj.firebaseKey) {
      const patchPayload = { ...countObj, tricep: countObj.tricep + 1 };
      patchMobileLog(patchPayload).then(() => {
        onUpdate();
      });
    } else {
      postMobileLog(initialState).then(({ name }) => {
        const patchPayload = { firebaseKey: name, userUid: user.uid, tricep: countObj.tricep + 1 };
        patchMobileLog(patchPayload).then(() => {
          onUpdate();
        });
      });
    }
  };
  const downClickTricep = () => {
    if (countObj.firebaseKey) {
      const patchPayload = { ...countObj, tricep: countObj.tricep - 1 };
      patchMobileLog(patchPayload).then(() => {
        onUpdate();
      });
    } else {
      postMobileLog(initialState).then(({ name }) => {
        const patchPayload = { firebaseKey: name, userUid: user.uid, tricep: countObj.tricep - 1 };
        patchMobileLog(patchPayload).then(() => {
          onUpdate();
        });
      });
    }
  };

  const upClickQuad = () => {
    if (countObj.firebaseKey) {
      const patchPayload = { ...countObj, quad: countObj.quad + 1 };
      patchMobileLog(patchPayload).then(() => {
        onUpdate();
      });
    } else {
      postMobileLog(initialState).then(({ name }) => {
        const patchPayload = { firebaseKey: name, userUid: user.uid, quad: countObj.quad + 1 };
        patchMobileLog(patchPayload).then(() => {
          onUpdate();
        });
      });
    }
  };
  const downClickQuad = () => {
    if (countObj.firebaseKey) {
      const patchPayload = { ...countObj, quad: countObj.quad - 1 };
      patchMobileLog(patchPayload).then(() => {
        onUpdate();
      });
    } else {
      postMobileLog(initialState).then(({ name }) => {
        const patchPayload = { firebaseKey: name, userUid: user.uid, quad: countObj.quad - 1 };
        patchMobileLog(patchPayload).then(() => {
          onUpdate();
        });
      });
    }
  };

  const upClickHam = () => {
    if (countObj.firebaseKey) {
      const patchPayload = { ...countObj, hamstring: countObj.hamstring + 1 };
      patchMobileLog(patchPayload).then(() => {
        onUpdate();
      });
    } else {
      postMobileLog(initialState).then(({ name }) => {
        const patchPayload = { firebaseKey: name, userUid: user.uid, hamstring: countObj.hamstring + 1 };
        patchMobileLog(patchPayload).then(() => {
          onUpdate();
        });
      });
    }
  };
  const downClickHam = () => {
    if (countObj.firebaseKey) {
      const patchPayload = { ...countObj, hamstring: countObj.hamstring - 1 };
      patchMobileLog(patchPayload).then(() => {
        onUpdate();
      });
    } else {
      postMobileLog(initialState).then(({ name }) => {
        const patchPayload = { firebaseKey: name, userUid: user.uid, hamstring: countObj.hamstring - 1 };
        patchMobileLog(patchPayload).then(() => {
          onUpdate();
        });
      });
    }
  };

  const upClickGlute = () => {
    if (countObj.firebaseKey) {
      const patchPayload = { ...countObj, glute: countObj.glute + 1 };
      patchMobileLog(patchPayload).then(() => {
        onUpdate();
      });
    } else {
      postMobileLog(initialState).then(({ name }) => {
        const patchPayload = { firebaseKey: name, userUid: user.uid, glute: countObj.glute + 1 };
        patchMobileLog(patchPayload).then(() => {
          onUpdate();
        });
      });
    }
  };
  const downClickGlute = () => {
    if (countObj.firebaseKey) {
      const patchPayload = { ...countObj, glute: countObj.glute - 1 };
      patchMobileLog(patchPayload).then(() => {
        onUpdate();
      });
    } else {
      postMobileLog(initialState).then(({ name }) => {
        const patchPayload = { firebaseKey: name, userUid: user.uid, glute: countObj.glute - 1 };
        patchMobileLog(patchPayload).then(() => {
          onUpdate();
        });
      });
    }
  };

  const upClickCalve = () => {
    if (countObj.firebaseKey) {
      const patchPayload = { ...countObj, calve: countObj.calve + 1 };
      patchMobileLog(patchPayload).then(() => {
        onUpdate();
      });
    } else {
      postMobileLog(initialState).then(({ name }) => {
        const patchPayload = { firebaseKey: name, userUid: user.uid, calve: countObj.calve + 1 };
        patchMobileLog(patchPayload).then(() => {
          onUpdate();
        });
      });
    }
  };
  const downClickCalve = () => {
    if (countObj.firebaseKey) {
      const patchPayload = { ...countObj, calve: countObj.calve - 1 };
      patchMobileLog(patchPayload).then(() => {
        onUpdate();
      });
    } else {
      postMobileLog(initialState).then(({ name }) => {
        const patchPayload = { firebaseKey: name, userUid: user.uid, calve: countObj.calve - 1 };
        patchMobileLog(patchPayload).then(() => {
          onUpdate();
        });
      });
    }
  };
  return (
    <>
      <div className="mobile-log-full-component">
        <h3 className="mobile-title-desk text-center">Mobile Logging</h3>
        <div className="log-counters-container">
          <div className="counter-muscle-container d-flex justify-content-between">
            <h5 className="counter-muscle">Trapezius</h5>
            <hr id="mobile-line-trap" />
            <div className="counter-container d-flex">
              <p id="count-mobile">{countObj.trap}</p>
              <div className="d-flex flex-column">
                <button type="button" aria-label="Button label" onClick={upClickTrap} id="up-iterate"><FontAwesomeIcon icon={faAngleUp} /></button>
                <button type="button" aria-label="Button label" onClick={downClickTrap} id="down-iterate"><FontAwesomeIcon icon={faAngleDown} /></button>
              </div>
            </div>
          </div>
          <div className="counter-muscle-container d-flex justify-content-between">
            <h5 className="counter-muscle">Front Deltoids</h5>
            <hr id="mobile-line-fd" />
            <div className="counter-container d-flex">
              <p id="count-mobile">{countObj.frontDelt}</p>
              <div className="d-flex flex-column">
                <button type="button" aria-label="Button label" onClick={upClickFrontD} id="up-iterate"><FontAwesomeIcon icon={faAngleUp} /></button>
                <button type="button" aria-label="Button label" onClick={downClickFrontD} id="down-iterate"><FontAwesomeIcon icon={faAngleDown} /></button>
              </div>
            </div>
          </div>
          <div className="counter-muscle-container d-flex justify-content-between">
            <h5 className="counter-muscle">Side & Rear Deltoids</h5>
            <hr id="mobile-line-rsd" />
            <div className="counter-container d-flex">
              <p id="count-mobile">{countObj.rearSideDelt}</p>
              <div className="d-flex flex-column">
                <button type="button" aria-label="Button label" onClick={upClickRearSide} id="up-iterate"><FontAwesomeIcon icon={faAngleUp} /></button>
                <button type="button" aria-label="Button label" onClick={downClickRearSide} id="down-iterate"><FontAwesomeIcon icon={faAngleDown} /></button>
              </div>
            </div>
          </div>
          <div className="counter-muscle-container d-flex justify-content-between">
            <h5 className="counter-muscle">Back</h5>
            <hr id="mobile-line-back" />
            <div className="counter-container d-flex">
              <p id="count-mobile">{countObj.back}</p>
              <div className="d-flex flex-column">
                <button type="button" aria-label="Button label" onClick={upClickBack} id="up-iterate"><FontAwesomeIcon icon={faAngleUp} /></button>
                <button type="button" aria-label="Button label" onClick={downClickBack} id="down-iterate"><FontAwesomeIcon icon={faAngleDown} /></button>
              </div>
            </div>
          </div>
          <div className="counter-muscle-container d-flex justify-content-between">
            <h5 className="counter-muscle">Chest</h5>
            <hr id="mobile-line" />
            <div className="counter-container d-flex">
              <p id="count-mobile">{countObj.chest}</p>
              <div className="d-flex flex-column">
                <button type="button" aria-label="Button label" onClick={upClickChest} id="up-iterate"><FontAwesomeIcon icon={faAngleUp} /></button>
                <button type="button" aria-label="Button label" onClick={downClickChest} id="down-iterate"><FontAwesomeIcon icon={faAngleDown} /></button>
              </div>
            </div>
          </div>
          <div className="counter-muscle-container d-flex justify-content-between">
            <h5 className="counter-muscle">Biceps</h5>
            <hr id="mobile-line" />
            <div className="counter-container d-flex">
              <p id="count-mobile">{countObj.bicep}</p>
              <div className="d-flex flex-column">
                <button type="button" aria-label="Button label" onClick={upClickBicep} id="up-iterate"><FontAwesomeIcon icon={faAngleUp} /></button>
                <button type="button" aria-label="Button label" onClick={downClickBicep} id="down-iterate"><FontAwesomeIcon icon={faAngleDown} /></button>
              </div>
            </div>
          </div>
          <div className="counter-muscle-container d-flex justify-content-between">
            <h5 className="counter-muscle">Triceps</h5>
            <hr id="mobile-line-tri" />
            <div className="counter-container d-flex">
              <p id="count-mobile">{countObj.tricep}</p>
              <div className="d-flex flex-column">
                <button type="button" aria-label="Button label" onClick={upClickTricep} id="up-iterate"><FontAwesomeIcon icon={faAngleUp} /></button>
                <button type="button" aria-label="Button label" onClick={downClickTricep} id="down-iterate"><FontAwesomeIcon icon={faAngleDown} /></button>
              </div>
            </div>
          </div>
          <div className="counter-muscle-container d-flex justify-content-between">
            <h5 className="counter-muscle">Quadriceps</h5>
            <hr id="mobile-line-qh" />
            <div className="counter-container d-flex">
              <p id="count-mobile">{countObj.quad}</p>
              <div className="d-flex flex-column">
                <button type="button" aria-label="Button label" onClick={upClickQuad} id="up-iterate"><FontAwesomeIcon icon={faAngleUp} /></button>
                <button type="button" aria-label="Button label" onClick={downClickQuad} id="down-iterate"><FontAwesomeIcon icon={faAngleDown} /></button>
              </div>
            </div>
          </div>
          <div className="counter-muscle-container d-flex justify-content-between">
            <h5 className="counter-muscle">Hamstrings</h5>
            <hr id="mobile-line-qh" />
            <div className="counter-container d-flex">
              <p id="count-mobile">{countObj.hamstring}</p>
              <div className="d-flex flex-column">
                <button type="button" aria-label="Button label" onClick={upClickHam} id="up-iterate"><FontAwesomeIcon icon={faAngleUp} /></button>
                <button type="button" aria-label="Button label" onClick={downClickHam} id="down-iterate"><FontAwesomeIcon icon={faAngleDown} /></button>
              </div>
            </div>
          </div>
          <div className="counter-muscle-container d-flex justify-content-between">
            <h5 className="counter-muscle">Glutes</h5>
            <hr id="mobile-line" />
            <div className="counter-container d-flex">
              <p id="count-mobile">{countObj.glute}</p>
              <div className="d-flex flex-column">
                <button type="button" aria-label="Button label" onClick={upClickGlute} id="up-iterate"><FontAwesomeIcon icon={faAngleUp} /></button>
                <button type="button" aria-label="Button label" onClick={downClickGlute} id="down-iterate"><FontAwesomeIcon icon={faAngleDown} /></button>
              </div>
            </div>
          </div>
          <div className="counter-muscle-container d-flex justify-content-between">
            <h5 className="counter-muscle">Calves</h5>
            <hr id="mobile-line" />
            <div className="counter-container d-flex">
              <p id="count-mobile">{countObj.calve}</p>
              <div className="d-flex flex-column">
                <button type="button" aria-label="Button label" onClick={upClickCalve} id="up-iterate"><FontAwesomeIcon icon={faAngleUp} /></button>
                <button type="button" aria-label="Button label" onClick={downClickCalve} id="down-iterate"><FontAwesomeIcon icon={faAngleDown} /></button>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-log-btn-container d-flex justify-content-around">
          <button type="button" className="reset-mobile" onClick={handleReset}>Reset Log</button>
          <MobileLogSubmit workoutObj={countObj} weekId={weekUid} resetLog={resetOnFormSubmit} />
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
  onUpdate: PropTypes.func.isRequired,
};
