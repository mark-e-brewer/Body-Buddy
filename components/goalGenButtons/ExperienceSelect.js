import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function ExperienceSelector({ setExperience }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleButtonState = (targetValue, index) => {
    setSelectedIndex(index);
    setExperience(targetValue);
  };

  const getButtonClassName = (index) => {
    if (index === 0) {
      return 'experience-btn experience-btn-beginner';
    } if (index === 1) {
      return 'experience-btn experience-btn-intermediate';
    } if (index === 2) {
      return 'experience-btn experience-btn-advanced';
    }
    return 'experience-btn';
  };

  return (
    <div className="exp-btn-cont">
      <div className="experience-btns">
        {['Beginner', 'Intermediate', 'Advanced'].map((experience, index) => (
          <utton
            type="button"
            className={`${getButtonClassName(index)} ${selectedIndex === index ? 'selected' : ''}`}
            onClick={() => handleButtonState(experience, index)}
          >
            {experience}
          </utton>
        ))}
      </div>
      <div className="blob-gen-exp" />
    </div>
  );
}

ExperienceSelector.propTypes = {
  setExperience: PropTypes.func.isRequired,
};
