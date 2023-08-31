import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import { getTodaysDate } from "../../utils/commonFuncs.utils";

import "./previewRecords.styles.css";
import ShowCurrentProgress from "../ShowCurrentProgress/ShowCurrentProgress.component";

function PreviewRecords() {
  const todaysDate = getTodaysDate();
  const userHistory = JSON.parse(localStorage.getItem("exerciseHistory"));
  let todaysRecords;
  if (
    userHistory &&
    userHistory[todaysDate] !== null &&
    userHistory[todaysDate] !== undefined
  ) {
    todaysRecords = userHistory[todaysDate];
    console.log(userHistory[todaysDate]);
  }
  return (
    <div className="PreviewRecords">
      <div className="carouselcontroller">
        <FontAwesomeIcon className="controlIccons" icon={faAngleLeft} />
        <h3 className="dayHeading">Today</h3>
        <FontAwesomeIcon className="controlIccons" icon={faAngleRight} />
      </div>
      <div className="carousel">
        <div className="exercise-group-container">
          {todaysRecords &&
            Object.keys(todaysRecords).map((key) => {
              if (key === "") {
                return null;
              }
              return (
                <div className="exercise-container">
                  <h3 className="exercise-heading">{key}</h3>
                  <ShowCurrentProgress recordsArry={todaysRecords[key]} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default PreviewRecords;
