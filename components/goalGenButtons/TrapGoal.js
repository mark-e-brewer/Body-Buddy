import { useState } from 'react';
import PropTypes from 'prop-types';

export default function IntentionTrap({ setGoalTrap }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const trapIntention = ['S', 'M', 'N', 'F'];
  const tooltips = ['Skip', 'Maintain Muscle', 'Normal Growth', 'Focus Heavily'];
  const handleButtonState = (targetValue) => {
    if (targetValue !== setGoalTrap) {
      setGoalTrap(targetValue);
    }
  };
  return (
    <>
      <div className="intent-radio-btns d-flex align-self-center">
        {trapIntention.map((category, index) => (
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

IntentionTrap.propTypes = {
  setGoalTrap: PropTypes.string.isRequired,
};
