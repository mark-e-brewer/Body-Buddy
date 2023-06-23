import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export default function StatOptionsMuscleGroups({ setMuscleGroup }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const filterMusclesOptions = ['All', 'Traps', 'Front Delts', 'Rear/Side Delts', 'Back', 'Chest', 'Biceps', 'Triceps', 'Quads', 'Hamstrings', 'Glutes', 'Calves'];
  const handleButtonState = (targetValue) => {
    setMuscleGroup(targetValue);
  };
  return (
    <>
      <div className="muscle-select-stats-cont d-flex align-self-center">
        {filterMusclesOptions.map((category, index) => (
          selectedIndex === index ? <Button variant="light" id="muscle-filter-stat-active" className="stat-filter-button-muscles-active" value={category} onClick={handleButtonState}>{category}</Button>
            : (
              <Button
                variant="light"
                className="stat-filter-button-muscles"
                id="muscle-filter-stat"
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

StatOptionsMuscleGroups.propTypes = {
  setMuscleGroup: PropTypes.string.isRequired,
};
