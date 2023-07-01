import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export default function StatOptionsMuscleGroups({ setMuscleGroup }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const filterMusclesOptions = ['All', 'Traps', 'Front Delts', 'Rear/Side Delts', 'Back', 'Chest', 'Biceps', 'Triceps', 'Quads', 'Hamstrings', 'Glutes', 'Calves'];
  const handleButtonState = (targetValue, index) => {
    setMuscleGroup(targetValue);
    setSelectedIndex(index);
  };

  const gliderStyle = {
    left: `${selectedIndex * (100 / filterMusclesOptions.length)}%`,
    width: `${70 / filterMusclesOptions.length}%`,
  };

  return (
    <>
      <div className="muscle-select-stats-cont d-flex align-self-center">
        <div className="glider" style={gliderStyle} />
        {filterMusclesOptions.map((category, index) => (
          <Button
            variant="light"
            className={`stat-filter-button-muscles ${selectedIndex === index ? 'stat-filter-button-muscles-active' : ''}`}
            value={category}
            onClick={() => handleButtonState(category, index)}
          >
            {category}
          </Button>
        ))}
      </div>
    </>
  );
}

StatOptionsMuscleGroups.propTypes = {
  setMuscleGroup: PropTypes.string.isRequired,
};
