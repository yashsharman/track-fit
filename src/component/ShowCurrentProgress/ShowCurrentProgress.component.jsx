import React from "react";
import "./ShowCurrentProgress.styles.css";
import { faTrophy as PrIcon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage as EmptyCommentIcon } from "@fortawesome/free-regular-svg-icons";
import { faMessage as commentIcon } from "@fortawesome/free-solid-svg-icons";

function ShowCurrentProgress({
  recordsArry,
  switchBtnandStyle,
  CommentBoxVisibility,
}) {
  let currentCount = 0;
  return (
    <>
      {recordsArry.map((record) => {
        currentCount++;
        return (
          <div key={currentCount}>
            <div
              className="progress-container"
              id={currentCount}
              onClick={(event) => switchBtnandStyle && switchBtnandStyle(event, record)}
            >
              <div className={`progress-container-left`}>
                {!record.comment ? (
                  <FontAwesomeIcon
                    icon={EmptyCommentIcon}
                    style={{ color: "gainsboro" }}
                    onClick={() => {
                      CommentBoxVisibility && CommentBoxVisibility(currentCount);
                    }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={commentIcon}
                    style={{ color: "teal" }}
                    onClick={() => {
                      CommentBoxVisibility && CommentBoxVisibility(currentCount);
                    }}
                  />
                )}
                {record.pr ? (
                  <FontAwesomeIcon icon={PrIcon} style={{ color: "orange" }} />
                ) : (
                  <FontAwesomeIcon
                    icon={PrIcon}
                    style={{ color: "rgb(0,0,0,0)" }}
                  />
                )}
                <b id={currentCount}>{currentCount}</b>
              </div>
              <div className="progress-container-right" id={currentCount}>
                <div className="display-weight" id={currentCount}>
                  <b id={currentCount}>{record.weight}</b>
                  <span className="light-text" id={currentCount}>
                    {" "}
                    kgs
                  </span>
                </div>
                <div className="display-reps">
                  <b id={currentCount}>{record.reps}</b>
                  <span className="light-text" id={currentCount}>
                    {" "}
                    reps
                  </span>
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
