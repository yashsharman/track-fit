import React, { useState } from 'react';
import ShowCurrentProgress from '../ShowCurrentProgress/ShowCurrentProgress.component';
import UserInputContainer from '../userInputContainer/UserInputContainer.component';
import './RecordExercise.styles.css';
import { useParams } from 'react-router-dom';

const timeBoundExercise = ['hanging', 'plank'];

export const updateSelectedRecord = (indexToUpdate, updatedTimeValue) => {
  setRecordArry((prevRecords) => {
    const updatedRecords = [...prevRecords];

    const selectedRecord = updatedRecords[indexToUpdate];

    selectedRecord.time = updatedTimeValue;

    return updatedRecords; 
  });
};

function RecordExercise() {
  const { exerciseName } = useParams(); // To get exercise name

  const [recordsArry, setRecordArry] = useState([]);
  
  const clearInputBoxes = () => {
    document.querySelectorAll('input').
    forEach((inputbox) => (inputbox.value = 0));
  };

  const renderExerciseElement = (exerciseName) => {
    let renderElement;
    timeBoundExercise.map((exName) => {
      if (exName === exerciseName) {
        renderElement = (
          <>
            <UserInputContainer type={'time'} />
            <UserInputContainer type={'reps'} />
          </>
        );
      } else {
        renderElement = (
          <>
            <UserInputContainer type={'weight'} />
            <UserInputContainer type={'reps'} />
          </>
        );
      }
    });
    return renderElement;
  };

  const addSet = () => {
    let currentSetObj = {};
    document.querySelectorAll('input')
    .forEach((inputbox) => {
      currentSetObj[inputbox.className] = inputbox.value;
    });
    setRecordArry([...recordsArry, currentSetObj]);
  };

  
  return (
    <div className="AddExercise-container">
      <div className="exercise-heading">
        {!exerciseName ? 'Example Exercise' : exerciseName}
      </div>
      <div className="weight-set-container">
        <UserInputContainer type={'weight'} />
        <UserInputContainer type={'reps'} />

        <div className="AddExercise-btn-group">
          <button
            className="default-btn save-btn"
            onClick={() => addSet()}>
            SAVE
          </button>

          <button 
          className="default-btn clear-btn" 
          onClick={() => clearInputBoxes()}>
            CLEAR
          </button>
        </div>
      </div>

      <ShowCurrentProgress recordsArry={recordsArry} key={1} />
    </div>
  );
}

export default RecordExercise;
