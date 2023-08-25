import { useContext, useEffect, useState } from "react";
import ShowCurrentProgress from "../ShowCurrentProgress/ShowCurrentProgress.component";
import UserInputContainer from "../userInputContainer/UserInputContainer.component";
import "./RecordExercise.styles.css";
import ShowCrudBtn from "../showCrudBtn/ShowCrudBtn.component";
import ShowComment from "../showComment/ShowComment.compenent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
    } catch (error) {
      exerciseHistory = null;
      // console.log("catch" + exerciseHistory)
    }

    if (exerciseHistory != null && exerciseHistory[todaysDate]) {
      return exerciseHistory[todaysDate];
    }
    return [];
  };

  useEffect(() => {
    const currentUrl = window.location.href;
    const segments = currentUrl.split("/");
    const exerciseNameStr = segments[segments.length - 1];
    const exName = exerciseNameStr.replace(/%20/g, " ");
    setExerciseName(exName);

    let exRecord = getOldRecord();
    if (exRecord[exName] != null || undefined) {
      setRecordArry(exRecord[exName]);
    }
  }, []);
  useEffect(() => {
    //* Saving records in localStorage..
    addToLocalStorage();
    if (recordsArry.length == 0) {
      setShowCrudBtn(false);
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
  const random3DigitNumber = () => {
    return Math.floor(100 + Math.random() * 900); // Generates a random number between 100 and 999
  };
  // const randomNumber = random3DigitNumber();
  // console.log(randomNumber); // Output a random 3-digit number

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
    console.log(recordsArryCopy);
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