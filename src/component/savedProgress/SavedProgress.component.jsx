import './SavedProgress.component.css'
import { ReactComponent as EmptyPrIcon} from '../../assets/empty-pr.svg';
import { ReactComponent as PrIcon} from '../../assets/pr.svg';
import { ReactComponent as CommentIcon} from '../../assets/comment-icon.svg';
import { ReactComponent as EmptyCommentIcon} from '../../assets/empty-comment-icon.svg';

function SavedProgress() {
  return (
    <div className="SavedProgress-container">
        <div className="progress-container">
            <div className="comment-icon"><EmptyCommentIcon className='icons'/></div>
            <div className="pr-container"><EmptyPrIcon className='icons'/></div>
            <div className="display-set"><b>1</b></div>
            <div className="display-weight"><b>12.55 </b><span className='light-text'>kgs</span></div>
            <div className="display-reps"><b>8 </b><span className='light-text'>reps</span></div>
        </div>
            <hr />
    </div>
  )
}

export default SavedProgress;