import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export default function StatOptionsButton({ setFilterGraphs }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const filterStatOptions = ['Total Per Muscle', 'Workouts Sun-Sat', 'Muscle Total Sun-Sat'];
  const handleButtonState = (targetValue) => {
    setFilterGraphs(targetValue);
  };
  return (
    <>
      <div style={{ marginTop: '8px' }} className="d-flex align-self-center">
        {filterStatOptions.map((category, index) => (
          selectedIndex === index ? <Button variant="dark" className="stat-filter-button-active px-1 mx-1 fs-6 py-1 mb-3" value={category} onClick={handleButtonState} active>{category}</Button>
            : (
              <Button
                variant="light"
                className="stat-filter-button px-1 mx-1 fs-6 py-1 mb-3"
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

StatOptionsButton.propTypes = {
  setFilterGraphs: PropTypes.string.isRequired,
};
