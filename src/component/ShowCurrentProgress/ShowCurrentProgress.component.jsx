import "./ShowCurrentProgress.styles.css";
import { faTrophy as PrIcon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage as EmptyCommentIcon } from "@fortawesome/free-regular-svg-icons";
import { faMessage as commentIcon } from "@fortawesome/free-solid-svg-icons";

function ShowCurrentProgress({recordsArry}) {
  console.log("renderd")
  const {comment,pr,currentCount, weight,reps} = recordsArry
  return (<>
            <div key={currentCount} className="progress-container">
              <div className="progress-container-left">
                {!comment ? (
                  <FontAwesomeIcon icon={EmptyCommentIcon}  style={{ color: "gainsboro" }}/>
                ) : (
                  <FontAwesomeIcon icon={commentIcon} style={{ color: "teal" }} />
                )}
                {pr ? (
                  <FontAwesomeIcon icon={PrIcon} style={{ color: "orange" }} />
                ) : (
                  <FontAwesomeIcon icon={PrIcon} style={{ color: "white" }} />
                )}
                <b>{currentCount}</b>
              </div>
              <div className="progress-container-right">
                <div className="display-weight">
                  <b>{weight}</b>
                  <span className="light-text"> kgs</span>
                </div>
                <div className="display-reps">
                  <b>{reps}</b>
                  <span className="light-text"> reps</span>
                </div>
              </div>
            </div>
            <span className="divider"></span>
          </>
       
  );
}

export default ShowCurrentProgress;
