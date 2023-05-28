import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function CircularProgressBar({ percent }) {
  const radius = 50; // Radius of the progress bar
  const circumference = 2 * Math.PI * radius; // Circumference of the progress bar
  const progressBarRef = useRef(null);
  let percentDisplayed = percent;
  if (percentDisplayed > 100) {
    percentDisplayed = 100;
  }

  useEffect(() => {
    const progressElement = progressBarRef.current;
    const progressAnimation = progressElement.animate(
      [{ strokeDashoffset: circumference }, { strokeDashoffset: (1 - percentDisplayed / 100) * circumference }],
      { duration: 1300, easing: 'linear', fill: 'forwards' },
    );

    // Clear animation on unmount
    return () => {
      progressAnimation.cancel();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [percent]);

  return (
    <>
      <div className="circular-progress-container">
        <svg className="circular-progress" width={radius * 4.8} height={radius * 4.8} viewBox={`-10 0 ${radius * 2.4} ${radius * 2}`}>
          <circle
            ref={progressBarRef}
            className="progress-bar"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            r={radius}
            cx={radius}
            cy={radius}
          />
          <text className="progress-text" x="44%" y="52%" dominantBaseline="middle" textAnchor="middle" transform={`rotate(90 ${radius} ${radius})`}>
            {percentDisplayed}%
          </text>
        </svg>
      </div>
    </>
  );
}

CircularProgressBar.propTypes = {
  percent: PropTypes.number.isRequired,
};
