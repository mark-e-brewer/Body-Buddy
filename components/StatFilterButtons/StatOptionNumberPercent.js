import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export default function StatOptionNumberPercent({ setShowNumPercent }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const filterNumberPercent = ['%', '#'];
  const handleButtonState = (targetValue) => {
    setShowNumPercent(targetValue);
  };

  return (
    <>
      <div
        style={{
          marginBottom: '0px', marginTop: '0px', width: '80px', marginLeft: '4px', marginRight: '14px',
        }}
        className="num-percent-fil"
      >
        {filterNumberPercent.map((category, index) => (
          selectedIndex === index ? (
            <Button
              variant="dark"
              style={{
                width: '40px', height: '38px', fontWeight: '600', fontSize: '20px', paddingTop: '3px',
              }}
              className="stat-filter-number-percent"
              value={category}
              onClick={handleButtonState}
              active
            >{category}
            </Button>
          )
            : (
              <Button
                variant="light"
                className="stat-filter-number-percent"
                value={category}
                style={{
                  width: '40px', height: '38px', fontWeight: '600', fontSize: '20px', paddingTop: '3px',
                }}
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

StatOptionNumberPercent.propTypes = {
  setShowNumPercent: PropTypes.string.isRequired,
};
