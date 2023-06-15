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
      <div style={{ marginTop: '4px' }} className="d-flex align-self-center">
        {filterExperience.map((category, index) => (
          selectedIndex === index ? <Button variant="dark" className="experience-filter-btn-active px-1 mx-1 fs-6 py-1" value={category} onClick={handleButtonState} active>{category}</Button>
            : (
              <Button
                variant="light"
                className="experience-filter-btn px-1 mx-1 fs-6 py-1"
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
