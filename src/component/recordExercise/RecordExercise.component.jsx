import { useState } from "react";
import ShowCurrentProgress from "../ShowCurrentProgress/ShowCurrentProgress.component";
import UserInputContainer from "../userInputContainer/UserInputContainer.component";
import "./RecordExercise.styles.css";

const timeBoundExercise = ["hanging", "plank"];
let currentCount = 0;

export const updateSelectedRecord = (event, record) => {
  let saveBtn = document.querySelector(".save-btn");
  let clearBtn = document.querySelector(".clear-btn");
  let recordElements = document.querySelectorAll(".progress-container");
  //?Highlight the selected progress container & change btn with respective functions...
  recordElements.forEach((recordElement) => {
    if (event.target !== recordElement) {
      recordElement.classList.remove("selected-progress-container");
      saveBtn.innerText = "SAVE";
      clearBtn.innerText = "CLEAR"
      clearBtn.classList.remove("delete-btn");
    } else if (event.target === recordElement) {
      event.target.classList.toggle("selected-progress-container");
    }
    if(event.target.classList.contains("selected-progress-container")){
      saveBtn.innerText = "UPDATE";
      clearBtn.innerText = "DELETE"
      clearBtn.classList.add("delete-btn");
    }
  });

  //? if the object containes same set-numb then update data in input text..
  document.querySelector(".weight").value = record.weight;
  document.querySelector(".reps").value = record.reps;
  //?save the new data in the prev index with updated values.
};
function RecordExercise({ exerciseName = "Chin-ups" }) {
  const [recordsArry, setRecordArry] = useState([]);
  const clearInputBoxes = () => {
    document
      .querySelectorAll("input")
      .forEach((inputbox) => (inputbox.value = 0));
  };

  const renderExerciseElement = (exerciseName) => {
    let renderElement;
    timeBoundExercise.map((exName) => {
      if (exName === exerciseName) {
        renderElement = (
          <>
            <UserInputContainer type={"time"} />
            <UserInputContainer type={"reps"} />
          </>
        );
      } else {
        renderElement = (
          <>
            <UserInputContainer type={"weight"} />
            <UserInputContainer type={"reps"} />
          </>
        );
      }
    });
    return renderElement;
  };
  const addSet = () => {
    currentCount++;
    let currentSetObj = {};
    document.querySelectorAll("input").forEach((inputbox) => {
      currentSetObj[inputbox.className] = inputbox.value;
    });
    currentSetObj.currentCount = currentCount;
    setRecordArry([...recordsArry, currentSetObj]);
  };

  return (
    <div className="AddExercise-container">
      <div className="exercise-heading">
        {!exerciseName ? "Example Exercise" : exerciseName}
      </div>
      <div className="weight-set-container">
        {renderExerciseElement(exerciseName)}
        <div className="AddExercise-btn-group">
          <button className="default-btn save-btn" onClick={() => addSet()}>
            SAVE
          </button>
          <button
            className="default-btn clear-btn"
            onClick={() => clearInputBoxes()}
          >
            CLEAR
          </button>
        </div>
      </div>
      <ShowCurrentProgress recordsArry={recordsArry} key={1} />
    </div>
  );
}

export default RecordExercise;
