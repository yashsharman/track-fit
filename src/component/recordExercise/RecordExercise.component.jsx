import { useContext, useEffect, useState } from "react";
import ShowCurrentProgress from "../ShowCurrentProgress/ShowCurrentProgress.component";
import UserInputContainer from "../userInputContainer/UserInputContainer.component";
import "./RecordExercise.styles.css";
import ShowCrudBtn from "../showCrudBtn/ShowCrudBtn.component";
import ShowComment from "../showComment/ShowComment.compenent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

let currentCount = 0;
let selectedRecordObj;
const timeBoundExercise = ["hanging", "plank"];
export const getTodaysDate = () => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const today = new Date();
  const dayOfWeek = daysOfWeek[today.getDay()].toUpperCase();
  const month = months[today.getMonth()].toUpperCase();
  const dayOfMonth = today.getDate();
  const year = today.getFullYear();

  return `${dayOfWeek}, ${dayOfMonth}/${month}/${year}`;
};

function RecordExercise() {
  const [recordsArry, setRecordArry] = useState([]);
  const [showCrudBtn, setShowCrudBtn] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [exerciseName, setExerciseName] = useState("");

  const getOldRecord = () => {
    let exerciseHistory;
    let todaysDate = getTodaysDate();

    try {
      exerciseHistory = JSON.parse(localStorage.getItem("exerciseHistory"));
      // console.log("try")
    } catch (error) {
      exerciseHistory = null;
      // console.log("catch")
    }

    if (exerciseHistory != null) {
      return exerciseHistory[todaysDate];

    }
    return null;
  };

  useEffect(() => {
    const currentUrl = window.location.href;
    const segments = currentUrl.split("/");
    const exerciseNameStr = segments[segments.length - 1];
    const exName = exerciseNameStr.replace(/%20/g, " ");
    setExerciseName(exName);


    let exRecord = getOldRecord();
    // console.log(exRecord[exName])
    if(exRecord != null || undefined){
      setRecordArry(exRecord[exName]);
    }

  }, []);
  useEffect(() => {

    //* Saving records in localStorage..
    if (recordsArry.length === 0) {
      setShowCrudBtn(false);
    } else {
      addToLocalStorage();
    }
  }, [recordsArry]);

  const addToLocalStorage = () => {
    let exerciseHistory;
    try {
      exerciseHistory = JSON.parse(localStorage.getItem("exerciseHistory"));
    } catch (error) {
      exerciseHistory = null;
    }
    let todaysDate = getTodaysDate();
    let exerciseHistoryObj = {
      [todaysDate]: {
        [exerciseName]: [...recordsArry],
      },
    };

    if (exerciseHistory == null) {
      localStorage.setItem(
        "exerciseHistory",
        JSON.stringify({
          [todaysDate]: {
            [exerciseName]: [...recordsArry],
          },
        })
      );
    } else {
      localStorage.setItem(
        "exerciseHistory",
        JSON.stringify({ ...exerciseHistory, ...exerciseHistoryObj })
      );
    }
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
    console.log(index)
    if (index > -1) {
      // only splice array when item is found
      recordsArryCopy.splice(index, 1); // 2nd parameter means remove one item only
    }
    setRecordArry(recordsArryCopy);
    console.log(recordsArryCopy)
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

  return (
    <div className="AddExercise-container">
      <div className="navigation-section">
        <span>{exerciseName}</span>
        <Link to="/history">
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
