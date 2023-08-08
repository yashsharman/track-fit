import React from "react";
import "./ShowCurrentProgress.styles.css";
import { faTrophy as PrIcon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage as EmptyCommentIcon } from "@fortawesome/free-regular-svg-icons";
import { faMessage as commentIcon } from "@fortawesome/free-solid-svg-icons";
import { updateSelectedRecord } from "../recordExercise/RecordExercise.component";

function ShowCurrentProgress({ recordsArry }) {
  console.log(recordsArry)
  return (
    <>
      {recordsArry.map((record) => {
        return (<>
            <div  key={1} className="progress-container" onClick={(record)=>updateSelectedRecord(record)}>
              <div className="progress-container-left">
                {!record.comment ? (
                  <FontAwesomeIcon
                    icon={EmptyCommentIcon}
                    style={{ color: "gainsboro" }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={commentIcon}
                    style={{ color: "teal" }}
                  />
                )}
                {record.pr ? (
                  <FontAwesomeIcon icon={PrIcon} style={{ color: "orange" }} />
                ) : (
                  <FontAwesomeIcon icon={PrIcon} style={{ color: "white" }} />
                )}
                <b>{record.currentCount}</b>
              </div>
              <div className="progress-container-right">
                <div className="display-weight">
                  <b>{record.weight}</b>
                  <span className="light-text"> kgs</span>
                </div>
                <div className="display-reps">
                  <b>{record.reps}</b>
                  <span className="light-text"> reps</span>
                </div>
              </div>
            </div>
            <div className="divider"></div>
            </>
        );
      })}
    </>
  );
}

export default ShowCurrentProgress;
