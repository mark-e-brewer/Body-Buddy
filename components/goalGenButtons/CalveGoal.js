import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export default function IntentionCalve({ setGoalCalve }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const calveIntention = ['S', 'M', 'N', 'F'];
  const handleButtonState = (targetValue) => {
    if (targetValue !== setGoalCalve) {
      setGoalCalve(targetValue);
    }
  };
  return (
    <>
      <div style={{ marginTop: '4px' }} className="d-flex align-self-center">
        {calveIntention.map((category, index) => (
          selectedIndex === index ? <Button variant="dark" className="intention-filter-btn-active px-1 mx-1 fs-6 py-1" value={category} onClick={() => handleButtonState(category)} active>{category}</Button>
            : (
              <Button
                variant="light"
                className="eintention-filter-btn px-1 mx-1 fs-6 py-1"
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

IntentionCalve.propTypes = {
  setGoalCalve: PropTypes.string.isRequired,
};
