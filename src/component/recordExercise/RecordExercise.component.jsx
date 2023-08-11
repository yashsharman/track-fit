import { useEffect, useState } from "react";
import ShowCurrentProgress from "../ShowCurrentProgress/ShowCurrentProgress.component";
import UserInputContainer from "../userInputContainer/UserInputContainer.component";
import "./RecordExercise.styles.css";
import ShowCrudBtn from "../showCrudBtn/ShowCrudBtn.component";
import ShowComment from "../showComment/ShowComment.compenent";

const timeBoundExercise = ["hanging", "plank"];
let currentCount = 0;
let selectedRecordObj;

function RecordExercise() {
  const [exerciseName, setExerciseName] = useState("Example")
  const [recordsArry, setRecordArry] = useState([]);
  const [showCrudBtn, setShowCrudBtn] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentUrl = window.location.href;
    const segments = currentUrl.split("/");
    const exerciseNameStr = segments[segments.length - 1];
    let exName = exerciseNameStr.replace(/%20/g, " ");
    setExerciseName(exName);
  }, []);

  const addSet = () => {
    currentCount++;
    let currentSetObj = {};
    document.querySelectorAll("input").forEach((inputbox) => {
      currentSetObj[inputbox.className] = inputbox.value;
    });
    currentSetObj.currentCount = currentCount;
    setRecordArry([...recordsArry, currentSetObj]);
  };
  const addComment = (record) => {
    let currentRecordsArry = [...recordsArry];
    let recordsArryCopy = currentRecordsArry.map((ele) => {
      if (record.currentCount === ele.currentCount) {
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

  const getTodaysDate = () => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let weekday = weekdays[date.getDay()];
    // This arrangement can be altered based on how we want the date's format to appear.
    let currentDate = `${weekday}, ${day}/${month}/${year}`;
    return currentDate;
  };

  useEffect(() => {
    // setShowCrudBtn(recordsArry.length !== 0); // Show buttons if recordsArry is not empty
    // if (recordsArry.length !== 0) {
    //   console.log("saving data");
    //   let todaysDate = getTodaysDate();
    //   let DataToBeSaved = {
    //     [exerciseName]: {
    //       [todaysDate]: recordsArry,
    //     },
    //   };
    //   localStorage.setItem("exerciseData", JSON.stringify(DataToBeSaved));
    // }
  }, [recordsArry, exerciseName]);

  return (
    <div className="AddExercise-container">
      <div className="exercise-heading">
        {exerciseName}
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
