import "./SavedProgress.styles.css";
import { ReactComponent as EmptyPrIcon } from "../../assets/empty-pr.svg";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";

function SavedProgress({ exerciseRecords }) {
  let currentCount = 0;
  return (
    <div className="SavedProgress-container">
      {exerciseRecords.map((exrcise) => {
        currentCount += 1;
        return (
          <>
            <div key={currentCount} className="progress-container">
              <div className="comment-icon">
                {!exrcise.comment ? <FontAwesomeIcon icon={faMessage} /> :<FontAwesomeIcon icon={faMessage} /> }
              </div>
              <div className="pr-container">
              {exrcise.pr ?<FontAwesomeIcon icon={faTrophy} style={{color: "orange"}}/>:null}
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
