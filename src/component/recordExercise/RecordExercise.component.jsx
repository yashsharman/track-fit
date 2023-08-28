import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";

import ShowCurrentProgress from "../ShowCurrentProgress/ShowCurrentProgress.component";
import UserInputContainer from "../userInputContainer/UserInputContainer.component";
import ShowCrudBtn from "../showCrudBtn/ShowCrudBtn.component";
import ShowComment from "../showComment/ShowComment.compenent";
import {
  getTodaysDate,
  getNameFromURL,
  getOldRecord,
  random3DigitNumber,
} from "../../utils/commonFuncs.utils";

import "./RecordExercise.styles.css";

let selectedRecordObj;
const timeBoundExercise = ["Hanging", "Plank"];

function RecordExercise() {
  const [recordsArry, setRecordArry] = useState([]);
  const [showCrudBtn, setShowCrudBtn] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [exerciseName, setExerciseName] = useState("");

  useEffect(() => {
    addToLocalStorage();
    let exName = getNameFromURL();
    setExerciseName(exName);
    let exRecord = getOldRecord();
    if (exRecord[exName] != null || undefined) {
      setRecordArry(exRecord[exName]);
    }
  }, []);

  useEffect(() => {
    //* Saving records in localStorage..
    addToLocalStorage();
    if (recordsArry.length === 0) {
      setShowCrudBtn(false);
    }
  }, [recordsArry]);

  const renderExerciseElement = (exerciseName) => {
    let inputElements;
    timeBoundExercise.map((exName) => {
      exName == exerciseName
        ? (inputElements = (
            <>
              <UserInputContainer type={"time"} />
              <UserInputContainer type={"reps"} />
            </>
          ))
        : (inputElements = (
            <>
              <UserInputContainer type={"weight"} />
              <UserInputContainer type={"reps"} />
            </>
          ));
    });
    return inputElements;
  };

  const addToLocalStorage = () => {
let localData = JSON.parse(localStorage.getItem("exerciseHistory"));
    let todaysDate = getTodaysDate();
    if (localData === undefined) {
      let tempObj = {
        [todaysDate]: {
          [exerciseName]: recordsArry,
        },
      };
      localStorage.setItem("exerciseHistory", JSON.stringify(tempObj));
    }

    localData[todaysDate]
      ? (localData[todaysDate][exerciseName] = recordsArry)
      : (localData[todaysDate] = { [exerciseName]: recordsArry });

    localStorage.setItem("exerciseHistory", JSON.stringify(localData));
  };
  const addSet = () => {
    let currentSetObj = {};
    currentSetObj.id = random3DigitNumber();
    document.querySelectorAll("input").forEach((inputbox) => {
      currentSetObj[inputbox.className] = inputbox.value;
    });
    setRecordArry([...recordsArry, currentSetObj]);
  };

  const addComment = (record) => {
    let currentRecordsArry = [...recordsArry];
    let recordsArryCopy = currentRecordsArry.map((ele) => {
      if (record.id === ele.id) {
        return record;
      }
      return ele;
    });
    setRecordArry(recordsArryCopy);
    setIsVisible(false);
  };

  const clearInputBoxes = () => {
    document
      .querySelectorAll("input")
      .forEach((inputbox) => (inputbox.value = 0));
  };

  const deleteSet = () => {
    let recordsArryCopy = recordsArry.filter(
      (record) => record !== selectedRecordObj
    );
    setRecordArry(recordsArryCopy);
  };

  const updateSet = () => {
    let newRecordArr = [...recordsArry];
    const index = newRecordArr.indexOf(selectedRecordObj);
    newRecordArr[index].weight = document.querySelector(".weight").value;
    newRecordArr[index].reps = document.querySelector(".reps").value;
    setRecordArry(newRecordArr);
  };

  const switchBtnandStyle = (event, record) => {
    selectedRecordObj = record;
    let recordElements = document.querySelectorAll(".progress-container");
    //?Highlight the selected progress container & change btn with respective functions...
    recordElements.forEach((recordElement) => {
      if (event.target.id !== recordElement.id) {
        recordElement.classList.remove("selected-progress-container");
      } else if (event.target.id === recordElement.id) {
        recordElement.classList.toggle("selected-progress-container");
      }
    });
    document.querySelector(".weight").value = record.weight;
    document.querySelector(".reps").value = record.reps;
    checkIfEleSelected();
  };

  const checkIfEleSelected = () => {
    document.querySelector(".selected-progress-container")
      ? setShowCrudBtn(true)
      : setShowCrudBtn(false);
  };

  const CommentBoxVisibility = (commentSet) => {
    setIsVisible((prevVisibility) => !prevVisibility);
    let targetObj = recordsArry.map((record) =>
      record.currentCount === commentSet ? record : null
    );
    selectedRecordObj = targetObj;
  };

  return (
    <div className="AddExercise-container">
      <div className="navigation-section">
        <span>{exerciseName}</span>
        <Link to={`/history/${exerciseName}`}>
          <FontAwesomeIcon icon={faClockRotateLeft} className="history-icon" />
        </Link>
      </div>
      <div className="weight-set-container">
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
      </div>
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
