import { useState } from 'react';
import PropTypes from 'prop-types';

export default function IntentionBack({ setGoalBack }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const backIntention = ['S', 'M', 'N', 'F'];
  const tooltips = ['Skip', 'Maintain Muscle', 'Normal Growth', 'Focus Heavily'];
  const handleButtonState = (targetValue) => {
    if (targetValue !== setGoalBack) {
      setGoalBack(targetValue);
    }
  };
  return (
    <>
      <div className="intent-radio-btns d-flex align-self-center">
        {backIntention.map((category, index) => (
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

IntentionBack.propTypes = {
  setGoalBack: PropTypes.string.isRequired,
};
