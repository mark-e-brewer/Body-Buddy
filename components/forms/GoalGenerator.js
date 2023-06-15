/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FloatingLabel } from 'react-bootstrap';

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
  const goals = {};

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
      <div>
        <Form onSubmit={handleSubmit}>
          <FloatingLabel label="Experience Level" className="goal-gen-floating-label">
            <Form.Select
              aria-label="Experience Level"
              name="experience"
              onChange={handleChange}
              value={formInput.experience}
              className="goal-gen-input"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </Form.Select>
          </FloatingLabel>
        </Form>
      </div>
    </>
  );
}
