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

  const deleteSet = () => {
    let recordsArryCopy = [...recordsArry];
    const index = recordsArryCopy.indexOf(selectedRecordObj);
    if (index > -1) {
      // only splice array when item is found
      recordsArryCopy.splice(index, 1); // 2nd parameter means remove one item only
    }
    setRecordArry(recordsArryCopy);
  };

  const updateSet = () => {
    let newRecordArr = [...recordsArry];
    const index = newRecordArr.indexOf(selectedRecordObj);
    newRecordArr[index].weight = document.querySelector(".weight").value;
    newRecordArr[index].reps = document.querySelector(".reps").value;
    setRecordArry(newRecordArr);
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
    document.querySelector(".weight").value = record.weight;
    document.querySelector(".reps").value = record.reps;
    checkIfEleSelected();
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
        {renderExerciseElement(exerciseName)}
        {showCrudBtn ? (
          <ShowCrudBtn
            showGroupSecondBtn={showCrudBtn}
            deleteSet={deleteSet}
            updateSet={updateSet}
          />
        ) : (
          <ShowCrudBtn
            showGroupSecondBtn={showCrudBtn}
            addSet={addSet}
            clearInputBoxes={clearInputBoxes}
          />
        )}
      <ShowCurrentProgress
        recordsArry={recordsArry}
        switchBtnandStyle={switchBtnandStyle}
        CommentBoxVisibility={CommentBoxVisibility}
        isVisible={isVisible}
      />
      {isVisible && (
        <ShowComment
          CommentBoxVisibility={CommentBoxVisibility}
          addComment={addComment}
          selectedRecordObj={selectedRecordObj}
        />
      )}
    </div>
  );
}

export default RecordExercise;
