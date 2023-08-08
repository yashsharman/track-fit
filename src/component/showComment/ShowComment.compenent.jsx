import React, { useState } from 'react';
import "./ShowComment.styles.css";

function ShowComment({ selectedRecordObj, CommentBoxVisibility, addComment }) {
  const [commentText, setCommentText] = useState(selectedRecordObj.comment || '');

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  return (
    <div className="commentBackground">
      <div className="comment-container">
        <h2>Comment</h2>
        <div className="comment-divider"></div>
        <input
          className="comment-input-box"
          type="text"
          placeholder="Comment Text ..."
          value={commentText}
          onChange={handleCommentChange}
        />
        <div className="btn-group">
          <button className="comment-btns" onClick={CommentBoxVisibility}>Cancel</button>
          <button className="comment-btns" onClick={() => addComment({...selectedRecordObj, comment:commentText })}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default ShowComment;
