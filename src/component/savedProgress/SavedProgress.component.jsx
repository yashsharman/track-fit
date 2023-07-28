import "./SavedProgress.styles.css";
import { ReactComponent as EmptyPrIcon } from "../../assets/empty-pr.svg";
import { ReactComponent as PrIcon } from "../../assets/pr.svg";
import { ReactComponent as CommentIcon } from "../../assets/comment-icon.svg";
import { ReactComponent as EmptyCommentIcon } from "../../assets/empty-comment-icon.svg";

function SavedProgress({ exerciseRecords }) {
  let currentCount = 0;
  return (
    <div className="SavedProgress-container">
      {exerciseRecords.map((exrcise) => {
        currentCount += 1;
        return (
          <>
            <div className="progress-container">
              <div className="comment-icon">
                <EmptyCommentIcon className="icons" />
              </div>
              <div className="pr-container">
                <EmptyPrIcon className="icons" />
              </div>
              <div className="display-set">
                <b>{currentCount}</b>
              </div>
              <div className="display-weight">
                <b>{exrcise.weight}</b>
                <span className="light-text"> kgs</span>
              </div>
              <div className="display-reps">
                <b>{exrcise.reps}</b>
                <span className="light-text"> reps</span>
              </div>
            </div>
            <hr />
          </>
        );
      })}
    </div>
  );
}

export default SavedProgress;
