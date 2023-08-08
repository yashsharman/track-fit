import React from "react";
import "./ShowCurrentProgress.styles.css";
import { faTrophy as PrIcon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage as EmptyCommentIcon } from "@fortawesome/free-regular-svg-icons";
import { faMessage as commentIcon } from "@fortawesome/free-solid-svg-icons";

function ShowCurrentProgress({recordsArry ,switchBtnandStyle,CommentBoxVisibility}) {
  return (
    <>
      {recordsArry.map((record) => {
        return (<div key={record.currentCount}>
            <div   className="progress-container" id={record.currentCount} onClick={(event)=>switchBtnandStyle(event,record)}>
              <div className={`progress-container-left`}>
                {!record.comment ? (
                  <FontAwesomeIcon
                    icon={EmptyCommentIcon}
                    style={{ color: "gainsboro" }}
                    onClick={()=>{CommentBoxVisibility(record.currentCount)}}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={commentIcon}
                    style={{ color: "teal" }}
                    onClick={()=>{CommentBoxVisibility(record.currentCount)}}
                  />
                )}
                {record.pr ? (
                  <FontAwesomeIcon icon={PrIcon} style={{ color: "orange" }} />
                ) : (
                  <FontAwesomeIcon icon={PrIcon} style={{ color: "rgb(0,0,0,0)" }} />
                )}
                <b id={record.currentCount}>{record.currentCount}</b>
              </div>
              <div className="progress-container-right" id={record.currentCount}>
                <div className="display-weight" id={record.currentCount}>
                  <b id={record.currentCount}>{record.weight}</b>
                  <span className="light-text" id={record.currentCount}> kgs</span>
                </div>
                <div className="display-reps">
                  <b id={record.currentCount}>{record.reps}</b>
                  <span className="light-text" id={record.currentCount}> reps</span>
                </div>
              </div>
            </div>
            <div className="divider"></div>
            </div>
        );
      })}
    </>
  );
}

export default ShowCurrentProgress;
