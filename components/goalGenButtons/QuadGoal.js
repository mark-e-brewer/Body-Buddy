import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export default function IntentionQuad({ setGoalQuad }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const quadIntention = ['S', 'M', 'N', 'F'];
  const handleButtonState = (targetValue) => {
    if (targetValue !== setGoalQuad) {
      setGoalQuad(targetValue);
    }
  };
  return (
    <>
      <div style={{ marginTop: '4px' }} className="d-flex align-self-center">
        {quadIntention.map((category, index) => (
          selectedIndex === index ? <Button style={{ backgroundColor: '#476C94', border: 'none', width: '24px' }} className="intention-filter-btn-active px-1 mx-1 fs-6 py-1" value={category} onClick={() => handleButtonState(category)} active>{category}</Button>
            : (
              <Button
                variant="light"
                className="intention-filter-btn px-1 mx-1 fs-6 py-1"
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

IntentionQuad.propTypes = {
  setGoalQuad: PropTypes.string.isRequired,
};
