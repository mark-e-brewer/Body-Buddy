import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function WeekCard({ weekObj }) {
  return (
    <>
      <Card className="d-flex justify-content-center week-card" style={{ width: '18rem' }}>
        <h2 className="d-flex justify-content-center">Week {weekObj.weekNum}</h2>
        <Card.Title className="d-flex justify-content-center week-m-group" style={{ marginBottom: '1px' }}>Front Deltoids</Card.Title>
        <div className="d-flex justify-content-center week-comp-div">
          <div className="completion">{weekObj.frontDeltTotal} of {weekObj.frontDeltGoal}</div>
        </div>
        <Card.Title className="d-flex justify-content-center week-m-group" style={{ marginBottom: '1px', marginTop: '1px' }}>Side & Rear Deltoids</Card.Title>
        <div className="d-flex justify-content-center week-comp-div">
          <div className="completion">{weekObj.rearSideDeltTotal} of {weekObj.rearSideDeltGoal}</div>
        </div>
        <Card.Title className="d-flex justify-content-center week-m-group" style={{ marginBottom: '1px', marginTop: '1px' }}>Back</Card.Title>
        <div className="d-flex justify-content-center week-comp-div">
          <div className="completion">{weekObj.backTotal} of {weekObj.backGoal}</div>
        </div>
        <Card.Title className="d-flex justify-content-center week-m-group" style={{ marginBottom: '1px', marginTop: '1px' }}>Chest</Card.Title>
        <div className="d-flex justify-content-center week-comp-div">
          <div className="completion">{weekObj.chestTotal} of {weekObj.chestGoal}</div>
        </div>
        <Card.Title className="d-flex justify-content-center week-m-group" style={{ marginBottom: '1px', marginTop: '1px' }}>Biceps</Card.Title>
        <div className="d-flex justify-content-center week-comp-div">
          <div className="completion">{weekObj.bicepTotal} of {weekObj.bicepGoal}</div>
        </div>
        <Card.Title className="d-flex justify-content-center week-m-group" style={{ marginBottom: '1px', marginTop: '1px' }}>Triceps</Card.Title>
        <div className="d-flex justify-content-center week-comp-div">
          <div className="completion">{weekObj.tricepTotal} of {weekObj.tricepGoal}</div>
        </div>
        <Card.Title className="d-flex justify-content-center week-m-group" style={{ marginBottom: '1px', marginTop: '1px' }}>Quadriceps</Card.Title>
        <div className="d-flex justify-content-center week-comp-div">
          <div className="completion">{weekObj.quadTotal} of {weekObj.quadGoal}</div>
        </div>
        <Card.Title className="d-flex justify-content-center week-m-group" style={{ marginBottom: '1px', marginTop: '1px' }}>Hamstrings</Card.Title>
        <div className="d-flex justify-content-center week-comp-div">
          <div className="completion">{weekObj.hamstringTotal} of {weekObj.hamstringGoal}</div>
        </div>
        <Card.Title className="d-flex justify-content-center week-m-group" style={{ marginBottom: '1px', marginTop: '1px' }}>Glutes</Card.Title>
        <div className="d-flex justify-content-center week-comp-div">
          <div className="completion">{weekObj.gluteTotal} of {weekObj.gluteGoal}</div>
        </div>
        <Card.Title className="d-flex justify-content-center week-m-group" style={{ marginBottom: '1px', marginTop: '1px' }}>Calves</Card.Title>
        <div className="d-flex justify-content-center week-comp-div" style={{ marginBottom: '5px' }}>
          <div className="completion">{weekObj.calveTotal} of {weekObj.calveGoal}</div>
        </div>
        <div className="d-flex justify-content-center">
          <Button
            style={{
              border: 'none',
              width: '100px',
              marginBottom: '5px',
              backgroundColor: '#9385a8',
            }}
          >
            <FontAwesomeIcon icon={faDumbbell} />
          </Button>
        </div>
      </Card>
    </>
  );
}

WeekCard.propTypes = {
  weekObj: PropTypes.shape({
    backGoal: PropTypes.number,
    bicepGoal: PropTypes.number,
    calveGoal: PropTypes.number,
    chestGoal: PropTypes.number,
    firebaseKey: PropTypes.string,
    frontDeltGoal: PropTypes.number,
    gluteGoal: PropTypes.number,
    hamstringGoal: PropTypes.number,
    quadGoal: PropTypes.number,
    rearSideDeltGoal: PropTypes.number,
    tricepGoal: PropTypes.number,
    backTotal: PropTypes.number,
    bicepTotal: PropTypes.number,
    calveTotal: PropTypes.number,
    chestTotal: PropTypes.number,
    frontDeltTotal: PropTypes.number,
    gluteTotal: PropTypes.number,
    hamstringTotal: PropTypes.number,
    quadTotal: PropTypes.number,
    rearSideDeltTotal: PropTypes.number,
    tricepTotal: PropTypes.number,
    userUid: PropTypes.string,
    weekUid: PropTypes.string,
    weekNum: PropTypes.number,
  }).isRequired,
};
