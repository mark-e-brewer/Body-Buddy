import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export default function StatOptionToggleGoal({ setShowGoal }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const filterShowGoal = ['Show Goal', 'Hide Goal'];
  const handleButtonState = (targetValue) => {
    setShowGoal(targetValue);
  };

  return (
    <>
      <div style={{ marginBottom: '0px', marginTop: '0px' }} className="d-flex align-self-center">
        {filterShowGoal.map((category, index) => (
          selectedIndex === index ? <Button variant="dark" className="stat-filter-show-goal-active" value={category} onClick={handleButtonState} active>{category}</Button>
            : (
              <Button
                variant="light"
                className="stat-filter-show-goal"
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

StatOptionToggleGoal.propTypes = {
  setShowGoal: PropTypes.string.isRequired,
};
