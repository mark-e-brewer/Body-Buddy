import { useState } from 'react';
import PropTypes from 'prop-types';

export default function IntentionChest({ setGoalChest }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const chestIntention = ['S', 'M', 'N', 'F'];
  const tooltips = ['Skip', 'Maintain Muscle', 'Normal Growth', 'Focus Heavily'];
  const handleButtonState = (targetValue) => {
    if (targetValue !== setGoalChest) {
      setGoalChest(targetValue);
    }
  };
  return (
    <>
      <div className="intent-radio-btns d-flex align-self-center">
        {chestIntention.map((category, index) => (
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

IntentionChest.propTypes = {
  setGoalChest: PropTypes.string.isRequired,
};
