import { useState } from 'react';
import PropTypes from 'prop-types';

export default function StatOptionsButton({ setFilterGraphs }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleButtonState = (targetValue, index) => {
    setSelectedIndex(index);
    setFilterGraphs(targetValue);
  };

  const getButtonClassName = (index) => {
    if (index === 0) {
      return 'stat-filter-button stat-index0';
    } if (index === 1) {
      return 'stat-filter-button stat-index1';
    } if (index === 2) {
      return 'stat-filter-button stat-index2';
    } if (index === 3) {
      return 'stat-filter-button stat-index3';
    } if (index === 4) {
      return 'stat-filter-button stat-index4';
    }
    return 'stat-filter-button';
  };

  return (
    <>
      <div className="stats-filter-btn-cont">
        <div className="stats-filter-btns">
          {['Total Per Muscle', 'Total Workouts Sun-Sat', 'Muscle Total Sun-Sat', 'Past Month Percentages', 'Past Month Vs Goal'].map((category, index) => (
            <button
              type="button"
              className={`${getButtonClassName(index)} ${selectedIndex === index ? 'selected' : ''}`}
              onClick={() => handleButtonState(category, index)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="blob-stat-filter" />
      </div>
    </>
  );
}

StatOptionsButton.propTypes = {
  setFilterGraphs: PropTypes.string.isRequired,
};
