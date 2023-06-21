import { useState } from 'react';
import PropTypes from 'prop-types';

export default function IntentionTricep({ setGoalTricep }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const tricepIntention = ['S', 'M', 'N', 'F'];
  const tooltips = ['Skip', 'Maintain', 'Normal', 'Focus'];
  const handleButtonState = (targetValue) => {
    if (targetValue !== setGoalTricep) {
      setGoalTricep(targetValue);
    }
  };

  return (
    <>
      <div style={{ marginTop: '4px' }} className="d-flex align-self-center">
        {tricepIntention.map((category, index) => (
          <button
            type="button"
            title={tooltips[index]}
            className={`intention-filter-btn px-1 mx-1 fs-6 py-1 intention-tooltip ${
              selectedIndex === index ? 'active' : ''
            }`}
            value={category}
            onClick={(e) => {
              setSelectedIndex(index);
              handleButtonState(e.target.value);
            }}
          >
            {category}
          </button>
        ))}
      </div>
    </>
  );
}

IntentionTricep.propTypes = {
  setGoalTricep: PropTypes.func.isRequired,
};
