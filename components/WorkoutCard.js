import React from 'react';
import { Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { deleteWorkout } from '../API/apiData';

export default function WorkoutCard({ workoutObj, onUpdate }) {
  const deleteThisWorkout = () => {
    if (window.confirm('Delete this Workout?')) {
      deleteWorkout(workoutObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card className="d-flex" style={{ margin: '5px', width: '15rem' }}>
      <Card.Title>{workoutObj.day}</Card.Title>
      <div className="d-flex justify-content-between">
        <Card.Text>Front Deltoids</Card.Text>
        <Card.Text>{workoutObj.frontDeltSets}</Card.Text>
      </div>
      <div className="d-flex justify-content-between">
        <Card.Text>Side & Rear Deltoids</Card.Text>
        <Card.Text>{workoutObj.rearSideDeltSets}</Card.Text>
      </div>
      <div className="d-flex justify-content-between">
        <Card.Text>Back</Card.Text>
        <Card.Text>{workoutObj.backSets}</Card.Text>
      </div>
      <div className="d-flex justify-content-between">
        <Card.Text>Chest</Card.Text>
        <Card.Text>{workoutObj.chestSets}</Card.Text>
      </div>
      <div className="d-flex justify-content-between">
        <Card.Text>Biceps</Card.Text>
        <Card.Text>{workoutObj.bicepSets}</Card.Text>
      </div>
      <div className="d-flex justify-content-between">
        <Card.Text>Triceps</Card.Text>
        <Card.Text>{workoutObj.tricepSets}</Card.Text>
      </div>
      <div className="d-flex justify-content-between">
        <Card.Text>Quadriceps</Card.Text>
        <Card.Text>{workoutObj.quadSets}</Card.Text>
      </div>
      <div className="d-flex justify-content-between">
        <Card.Text>Hamstrings</Card.Text>
        <Card.Text>{workoutObj.hamstringSets}</Card.Text>
      </div>
      <div className="d-flex justify-content-between">
        <Card.Text>Glutes</Card.Text>
        <Card.Text>{workoutObj.gluteSets}</Card.Text>
      </div>
      <div className="d-flex justify-content-between">
        <Card.Text>Calves</Card.Text>
        <Card.Text>{workoutObj.calveSets}</Card.Text>
      </div>
      <Button onClick={deleteThisWorkout}>Delete</Button>
    </Card>
  );
}

WorkoutCard.propTypes = {
  workoutObj: PropTypes.shape({
    backSets: PropTypes.number,
    bicepSets: PropTypes.number,
    calveSets: PropTypes.number,
    chestSets: PropTypes.number,
    day: PropTypes.string,
    firebaseKey: PropTypes.string,
    frontDeltSets: PropTypes.number,
    gluteSets: PropTypes.number,
    hamstringSets: PropTypes.number,
    quadSets: PropTypes.number,
    rearSideDeltSets: PropTypes.number,
    tricepSets: PropTypes.number,
    userUid: PropTypes.string,
    weekUid: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
