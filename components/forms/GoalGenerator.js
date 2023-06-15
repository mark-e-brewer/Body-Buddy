/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FloatingLabel } from 'react-bootstrap';
import ExperienceSelector from '../goalGenButtons/ExperienceSelect';

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="goal-gen-form-container align-self-center">
        <div>
          <ExperienceSelector setExperience={setExperience} />
        </div>
        <hr className="goal-gen-page-line-top" />
        <div className="goal-gen-muscles-cont">
          <div className="goal-gen-muscle-selector-cont">
            <h5>Trapezius</h5>
          </div>
        </div>
      </div>
    </>
  );
}
