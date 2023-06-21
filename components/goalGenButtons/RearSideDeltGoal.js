import { useState } from 'react';
import PropTypes from 'prop-types';

export default function IntentionRearSideDelt({ setGoalRearSideDelt }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const rearSideDeltIntention = ['S', 'M', 'N', 'F'];
  const tooltips = ['Skip', 'Maintain Muscle', 'Normal Growth', 'Focus Heavily'];
  const handleButtonState = (targetValue) => {
    if (targetValue !== setGoalRearSideDelt) {
      setGoalRearSideDelt(targetValue);
    }
  };
  return (
    <>
      <div className="intent-radio-btns d-flex align-self-center">
        {rearSideDeltIntention.map((category, index) => (
          selectedIndex === index ? (
            <button
              type="button"
              title={tooltips[index]}
              className={`intention-filter-btn intention-tooltip ${
                selectedIndex === index ? 'active' : ''
              }`}
              value={category}
              onClick={() => handleButtonState(category)}
            >
              {category}
            </button>
          )
            : (
              <button
                type="button"
                title={tooltips[index]}
                className="intention-filter-btn"
                value={category}
                onClick={(e) => {
                  setSelectedIndex(index);
                  handleButtonState(e.target.value);
                }}
              >{category}
              </button>
            )
        ))}
      </div>
    </>
  );
}

IntentionRearSideDelt.propTypes = {
  setGoalRearSideDelt: PropTypes.string.isRequired,
};
