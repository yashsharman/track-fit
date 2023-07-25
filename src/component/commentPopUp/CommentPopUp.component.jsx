import React from "react";
import './CommentPopUp.styles.css'
function CommentPopUp() {
  return (
    <div className="comment-popup-container">
      <h2>Comment</h2>
      <hr />
      <input type="text" placeholder="Comment Text" />
      <div className="btn-group">
        <button className="comment-btn">Cancel</button>
        <button className="comment-btn">Save</button>
      </div>
    </div>
  );
}

export default CommentPopUp;
