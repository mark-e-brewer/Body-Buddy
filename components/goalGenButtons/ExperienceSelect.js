import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export default function ExperienceSelector({ setExperience }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const filterExperience = ['Beginner', 'Intermediate', 'Advanced'];
  const handleButtonState = (targetValue) => {
    setExperience(targetValue);
  };
  return (
    <>
      <div style={{ marginTop: '4px' }} className="experience-btns d-flex align-self-center">
        {filterExperience.map((category, index) => (
          selectedIndex === index ? <Button variant="dark" className="experience-filter-btn-active" value={category} onClick={handleButtonState} active>{category}</Button>
            : (
              <Button
                variant="light"
                className="experience-filter-btn"
                value={category}
                onClick={(e) => {
                  setSelectedIndex(index);
                  handleButtonState(e.target.value);
                }}
              >{category}
              </Button>
            )
        ))}
      </div>
    </>
  );
}

ExperienceSelector.propTypes = {
  setExperience: PropTypes.string.isRequired,
};
