/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FloatingLabel } from 'react-bootstrap';
import ExperienceSelector from '../goalGenButtons/ExperienceSelect';
import IntentionTrap from '../goalGenButtons/TrapGoal';
import IntentionFrontDelt from '../goalGenButtons/FrontDeltGoal';
import IntentionRearSideDelt from '../goalGenButtons/RearSideDeltGoal';
import IntentionBack from '../goalGenButtons/BackGoal';
import IntentionChest from '../goalGenButtons/ChestGoal';
import IntentionBicep from '../goalGenButtons/BicepGoal';
import IntentionTricep from '../goalGenButtons/TricepGoal';
import IntentionQuad from '../goalGenButtons/QuadGoal';
import IntentionHamstring from '../goalGenButtons/HamstringGoal';
import IntentionGlute from '../goalGenButtons/GluteGoal';
import IntentionCalve from '../goalGenButtons/CalveGoal';

const initialState = {
  experience: 'Beginner',
  back: 'Skip',
  bicep: 'Skip',
  calve: 'Skip',
  chest: 'Skip',
  frontDelt: 'Skip',
  glute: 'Skip',
  hamstring: 'Skip',
  quad: 'Skip',
  rearSideDelt: 'Skip',
  tricep: 'Skip',
  trap: 'Skip',
};

export default function GoalGenerator() {
  const [formInput, setFormInput] = useState(initialState);
  const [experience, setExperience] = useState('Beginner');
  const [goalTrap, setGoalTrap] = useState('S');
  const [goalFrontDelt, setGoalFrontDelt] = useState('S');
  const [goalRearSideDelt, setGoalRearSideDelt] = useState('S');
  const [goalBack, setGoalBack] = useState('S');
  const [goalChest, setGoalChest] = useState('S');
  const [goalBicep, setGoalBicep] = useState('S');
  const [goalTricep, setGoalTricep] = useState('S');
  const [goalQuad, setGoalQuad] = useState('S');
  const [goalHamstring, setGoalHamstring] = useState('S');
  const [goalGlute, setGoalGlute] = useState('S');
  const [goalCalve, setGoalCalve] = useState('S');
  const goalObj = {
    back: 0,
    bicep: 0,
    calve: 0,
    chest: 0,
    frontDelt: 0,
    glute: 0,
    hamstring: 0,
    quad: 0,
    rearSideDelt: 0,
    tricep: 0,
    trap: 0,
  };

  if (experience === 'Beginner') {
    if (goalTrap === 'S') {
      goalObj.trap = 0;
    } else if (goalTrap === 'M') {
      goalObj.trap = 0;
    } else if (goalTrap === 'N') {
      goalObj.trap = 4;
    } else if (goalTrap === 'F') {
      goalObj.trap = 8;
    }
  }
  if (experience === 'Beginner') {
    if (goalFrontDelt === 'S') {
      goalObj.frontDelt = 0;
    } else if (goalFrontDelt === 'M') {
      goalObj.frontDelt = 0;
    } else if (goalFrontDelt === 'N') {
      goalObj.frontDelt = 4;
    } else if (goalFrontDelt === 'F') {
      goalObj.frontDelt = 6;
    }
  }
  if (experience === 'Beginner') {
    if (goalRearSideDelt === 'S') {
      goalObj.rearSideDelt = 0;
    } else if (goalRearSideDelt === 'M') {
      goalObj.rearSideDelt = 4;
    } else if (goalRearSideDelt === 'N') {
      goalObj.rearSideDelt = 8;
    } else if (goalRearSideDelt === 'F') {
      goalObj.rearSideDelt = 12;
    }
  }
  if (experience === 'Beginner') {
    if (goalBack === 'S') {
      goalObj.back = 0;
    } else if (goalBack === 'M') {
      goalObj.back = 8;
    } else if (goalBack === 'N') {
      goalObj.back = 10;
    } else if (goalBack === 'F') {
      goalObj.back = 14;
    }
  }
  if (experience === 'Beginner') {
    if (goalChest === 'S') {
      goalObj.chest = 0;
    } else if (goalChest === 'M') {
      goalObj.chest = 8;
    } else if (goalChest === 'N') {
      goalObj.chest = 10;
    } else if (goalChest === 'F') {
      goalObj.chest = 14;
    }
  }
  if (experience === 'Beginner') {
    if (goalBicep === 'S') {
      goalObj.bicep = 0;
    } else if (goalBicep === 'M') {
      goalObj.bicep = 4;
    } else if (goalBicep === 'N') {
      goalObj.bicep = 8;
    } else if (goalBicep === 'F') {
      goalObj.bicep = 14;
    }
  }
  if (experience === 'Beginner') {
    if (goalTricep === 'S') {
      goalObj.tricep = 0;
    } else if (goalTricep === 'M') {
      goalObj.tricep = 4;
    } else if (goalTricep === 'N') {
      goalObj.tricep = 6;
    } else if (goalTricep === 'F') {
      goalObj.tricep = 10;
    }
  }
  if (experience === 'Beginner') {
    if (goalQuad === 'S') {
      goalObj.quad = 0;
    } else if (goalQuad === 'M') {
      goalObj.quad = 6;
    } else if (goalQuad === 'N') {
      goalObj.quad = 8;
    } else if (goalQuad === 'F') {
      goalObj.quad = 12;
    }
  }
  if (experience === 'Beginner') {
    if (goalHamstring === 'S') {
      goalObj.hamstring = 0;
    } else if (goalHamstring === 'M') {
      goalObj.hamstring = 4;
    } else if (goalHamstring === 'N') {
      goalObj.hamstring = 6;
    } else if (goalHamstring === 'F') {
      goalObj.hamstring = 10;
    }
  }
  if (experience === 'Beginner') {
    if (goalGlute === 'S') {
      goalObj.glute = 0;
    } else if (goalGlute === 'M') {
      goalObj.glute = 0;
    } else if (goalGlute === 'N') {
      goalObj.glute = 4;
    } else if (goalGlute === 'F') {
      goalObj.glute = 8;
    }
  }
  if (experience === 'Beginner') {
    if (goalCalve === 'S') {
      goalObj.calve = 0;
    } else if (goalCalve === 'M') {
      goalObj.calve = 4;
    } else if (goalCalve === 'N') {
      goalObj.calve = 6;
    } else if (goalCalve === 'F') {
      goalObj.calve = 12;
    }
  }

  if (experience === 'Intermediate') {
    if (goalTrap === 'S') {
      goalObj.trap = 0;
    } else if (goalTrap === 'M') {
      goalObj.trap = 4;
    } else if (goalTrap === 'N') {
      goalObj.trap = 8;
    } else if (goalTrap === 'F') {
      goalObj.trap = 14;
    }
  }
  if (experience === 'Intermediate') {
    if (goalFrontDelt === 'S') {
      goalObj.frontDelt = 0;
    } else if (goalFrontDelt === 'M') {
      goalObj.frontDelt = 4;
    } else if (goalFrontDelt === 'N') {
      goalObj.frontDelt = 6;
    } else if (goalFrontDelt === 'F') {
      goalObj.frontDelt = 10;
    }
  }
  if (experience === 'Intermediate') {
    if (goalRearSideDelt === 'S') {
      goalObj.rearSideDelt = 0;
    } else if (goalRearSideDelt === 'M') {
      goalObj.rearSideDelt = 4;
    } else if (goalRearSideDelt === 'N') {
      goalObj.rearSideDelt = 12;
    } else if (goalRearSideDelt === 'F') {
      goalObj.rearSideDelt = 18;
    }
  }
  if (experience === 'Intermediate') {
    if (goalBack === 'S') {
      goalObj.back = 0;
    } else if (goalBack === 'M') {
      goalObj.back = 8;
    } else if (goalBack === 'N') {
      goalObj.back = 12;
    } else if (goalBack === 'F') {
      goalObj.back = 18;
    }
  }
  if (experience === 'Intermediate') {
    if (goalChest === 'S') {
      goalObj.chest = 0;
    } else if (goalChest === 'M') {
      goalObj.chest = 8;
    } else if (goalChest === 'N') {
      goalObj.chest = 12;
    } else if (goalChest === 'F') {
      goalObj.chest = 18;
    }
  }
  if (experience === 'Intermediate') {
    if (goalBicep === 'S') {
      goalObj.bicep = 0;
    } else if (goalBicep === 'M') {
      goalObj.bicep = 6;
    } else if (goalBicep === 'N') {
      goalObj.bicep = 12;
    } else if (goalBicep === 'F') {
      goalObj.bicep = 16;
    }
  }
  if (experience === 'Intermediate') {
    if (goalTricep === 'S') {
      goalObj.tricep = 0;
    } else if (goalTricep === 'M') {
      goalObj.tricep = 4;
    } else if (goalTricep === 'N') {
      goalObj.tricep = 10;
    } else if (goalTricep === 'F') {
      goalObj.tricep = 14;
    }
  }
  if (experience === 'Intermediate') {
    if (goalQuad === 'S') {
      goalObj.quad = 0;
    } else if (goalQuad === 'M') {
      goalObj.quad = 6;
    } else if (goalQuad === 'N') {
      goalObj.quad = 12;
    } else if (goalQuad === 'F') {
      goalObj.quad = 16;
    }
  }
  if (experience === 'Intermediate') {
    if (goalHamstring === 'S') {
      goalObj.hamstring = 0;
    } else if (goalHamstring === 'M') {
      goalObj.hamstring = 4;
    } else if (goalHamstring === 'N') {
      goalObj.hamstring = 10;
    } else if (goalHamstring === 'F') {
      goalObj.hamstring = 16;
    }
  }
  if (experience === 'Intermediate') {
    if (goalGlute === 'S') {
      goalObj.glute = 0;
    } else if (goalGlute === 'M') {
      goalObj.glute = 4;
    } else if (goalGlute === 'N') {
      goalObj.glute = 8;
    } else if (goalGlute === 'F') {
      goalObj.glute = 12;
    }
  }
  if (experience === 'Intermediate') {
    if (goalCalve === 'S') {
      goalObj.calve = 0;
    } else if (goalCalve === 'M') {
      goalObj.calve = 4;
    } else if (goalCalve === 'N') {
      goalObj.calve = 12;
    } else if (goalCalve === 'F') {
      goalObj.calve = 16;
    }
  }

  if (experience === 'Advanced') {
    if (goalTrap === 'S') {
      goalObj.trap = 0;
    } else if (goalTrap === 'M') {
      goalObj.trap = 4;
    } else if (goalTrap === 'N') {
      goalObj.trap = 12;
    } else if (goalTrap === 'F') {
      goalObj.trap = 20;
    }
  }
  if (experience === 'Advanced') {
    if (goalFrontDelt === 'S') {
      goalObj.frontDelt = 0;
    } else if (goalFrontDelt === 'M') {
      goalObj.frontDelt = 4;
    } else if (goalFrontDelt === 'N') {
      goalObj.frontDelt = 8;
    } else if (goalFrontDelt === 'F') {
      goalObj.frontDelt = 12;
    }
  }
  if (experience === 'Advanced') {
    if (goalRearSideDelt === 'S') {
      goalObj.rearSideDelt = 0;
    } else if (goalRearSideDelt === 'M') {
      goalObj.rearSideDelt = 4;
    } else if (goalRearSideDelt === 'N') {
      goalObj.rearSideDelt = 16;
    } else if (goalRearSideDelt === 'F') {
      goalObj.rearSideDelt = 24;
    }
  }
  if (experience === 'Advanced') {
    if (goalBack === 'S') {
      goalObj.back = 0;
    } else if (goalBack === 'M') {
      goalObj.back = 10;
    } else if (goalBack === 'N') {
      goalObj.back = 18;
    } else if (goalBack === 'F') {
      goalObj.back = 24;
    }
  }
  if (experience === 'Advanced') {
    if (goalChest === 'S') {
      goalObj.chest = 0;
    } else if (goalChest === 'M') {
      goalObj.chest = 8;
    } else if (goalChest === 'N') {
      goalObj.chest = 18;
    } else if (goalChest === 'F') {
      goalObj.chest = 22;
    }
  }
  if (experience === 'Advanced') {
    if (goalBicep === 'S') {
      goalObj.bicep = 0;
    } else if (goalBicep === 'M') {
      goalObj.bicep = 6;
    } else if (goalBicep === 'N') {
      goalObj.bicep = 14;
    } else if (goalBicep === 'F') {
      goalObj.bicep = 20;
    }
  }
  if (experience === 'Advanced') {
    if (goalTricep === 'S') {
      goalObj.tricep = 0;
    } else if (goalTricep === 'M') {
      goalObj.tricep = 4;
    } else if (goalTricep === 'N') {
      goalObj.tricep = 12;
    } else if (goalTricep === 'F') {
      goalObj.tricep = 18;
    }
  }
  if (experience === 'Advanced') {
    if (goalQuad === 'S') {
      goalObj.quad = 0;
    } else if (goalQuad === 'M') {
      goalObj.quad = 6;
    } else if (goalQuad === 'N') {
      goalObj.quad = 16;
    } else if (goalQuad === 'F') {
      goalObj.quad = 20;
    }
  }
  if (experience === 'Advanced') {
    if (goalHamstring === 'S') {
      goalObj.hamstring = 0;
    } else if (goalHamstring === 'M') {
      goalObj.hamstring = 4;
    } else if (goalHamstring === 'N') {
      goalObj.hamstring = 16;
    } else if (goalHamstring === 'F') {
      goalObj.hamstring = 20;
    }
  }
  if (experience === 'Advanced') {
    if (goalGlute === 'S') {
      goalObj.glute = 0;
    } else if (goalGlute === 'M') {
      goalObj.glute = 4;
    } else if (goalGlute === 'N') {
      goalObj.glute = 12;
    } else if (goalGlute === 'F') {
      goalObj.glute = 16;
    }
  }
  if (experience === 'Advanced') {
    if (goalCalve === 'S') {
      goalObj.calve = 0;
    } else if (goalCalve === 'M') {
      goalObj.calve = 6;
    } else if (goalCalve === 'N') {
      goalObj.calve = 16;
    } else if (goalCalve === 'F') {
      goalObj.calve = 20;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="goal-gen-form-container align-self-center">
        <div className="d-flex justify-content-center">
          <ExperienceSelector setExperience={setExperience} />
        </div>
        <hr className="goal-gen-page-line-top" />
        <div className="goal-gen-muscles-cont">
          <div className="goal-gen-muscle-selector-cont mt-2 d-flex justify-content-between">
            <div className="d-flex muscle-intention-container">
              <h5 className="goal-gen-muscle-title">Trapezius</h5>
              <IntentionTrap setGoalTrap={setGoalTrap} />
            </div>
            <h4 className="goal-gen-count">{goalObj.trap}</h4>
          </div>
          <div className="goal-gen-muscle-selector-cont mt-2 d-flex justify-content-between">
            <div className="d-flex muscle-intention-container">
              <h5 className="goal-gen-muscle-title">Front Delts</h5>
              <IntentionFrontDelt setGoalFrontDelt={setGoalFrontDelt} />
            </div>
            <h4 className="goal-gen-count">{goalObj.frontDelt}</h4>
          </div>
          <div className="goal-gen-muscle-selector-cont mt-2 d-flex justify-content-between">
            <div className="d-flex muscle-intention-container">
              <h5 className="goal-gen-muscle-title">Rear/Side Delts</h5>
              <IntentionRearSideDelt setGoalRearSideDelt={setGoalRearSideDelt} />
            </div>
            <h4 className="goal-gen-count">{goalObj.rearSideDelt}</h4>
          </div>
          <div className="goal-gen-muscle-selector-cont mt-2 d-flex justify-content-between">
            <div className="d-flex muscle-intention-container">
              <h5 className="goal-gen-muscle-title">Back</h5>
              <IntentionBack setGoalBack={setGoalBack} />
            </div>
            <h4 className="goal-gen-count">{goalObj.back}</h4>
          </div>
          <div className="goal-gen-muscle-selector-cont mt-2 d-flex justify-content-between">
            <div className="d-flex muscle-intention-container">
              <h5 className="goal-gen-muscle-title">Chest</h5>
              <IntentionChest setGoalChest={setGoalChest} />
            </div>
            <h4 className="goal-gen-count">{goalObj.chest}</h4>
          </div>
          <div className="goal-gen-muscle-selector-cont mt-2 d-flex justify-content-between">
            <div className="d-flex muscle-intention-container">
              <h5 className="goal-gen-muscle-title">Bicep</h5>
              <IntentionBicep setGoalBicep={setGoalBicep} />
            </div>
            <h4 className="goal-gen-count">{goalObj.bicep}</h4>
          </div>
          <div className="goal-gen-muscle-selector-cont mt-2 d-flex justify-content-between">
            <div className="d-flex muscle-intention-container">
              <h5 className="goal-gen-muscle-title">Tricep</h5>
              <IntentionTricep setGoalTricep={setGoalTricep} />
            </div>
            <h4 className="goal-gen-count">{goalObj.tricep}</h4>
          </div>
          <div className="goal-gen-muscle-selector-cont mt-2 d-flex justify-content-between">
            <div className="d-flex muscle-intention-container">
              <h5 className="goal-gen-muscle-title">Quadricep</h5>
              <IntentionQuad setGoalQuad={setGoalQuad} />
            </div>
            <h4 className="goal-gen-count">{goalObj.quad}</h4>
          </div>
          <div className="goal-gen-muscle-selector-cont mt-2 d-flex justify-content-between">
            <div className="d-flex muscle-intention-container">
              <h5 className="goal-gen-muscle-title">Hamstring</h5>
              <IntentionHamstring setGoalHamstring={setGoalHamstring} />
            </div>
            <h4 className="goal-gen-count">{goalObj.hamstring}</h4>
          </div>
          <div className="goal-gen-muscle-selector-cont mt-2 d-flex justify-content-between">
            <div className="d-flex muscle-intention-container">
              <h5 className="goal-gen-muscle-title">Glutes</h5>
              <IntentionGlute setGoalGlute={setGoalGlute} />
            </div>
            <h4 className="goal-gen-count">{goalObj.glute}</h4>
          </div>
          <div className="goal-gen-muscle-selector-cont mt-2 d-flex justify-content-between">
            <div className="d-flex muscle-intention-container">
              <h5 className="goal-gen-muscle-title">Calves</h5>
              <IntentionCalve setGoalCalve={setGoalCalve} />
            </div>
            <h4 className="goal-gen-count">{goalObj.calve}</h4>
          </div>
          <div className="d-flex justify-content-center goal-gen-submit">
            <Button onClick={handleSubmit} variant="primary">Set as Current Goal</Button>
          </div>
        </div>
      </div>
    </>
  );
}
