function ShowComment({ comment }) {
  return (
    <div className="comment-container">
      <h2>Comment</h2>
      <hr />
      {!comment ? (
        <input type="text" placeholder="Comment Text" />
      ) : (
        <div className="Comment-message">{comment}</div>
      )}
      <div className="btn-group">
        <button className="comment-btn">Cancel</button>
        <button className="comment-btn">Save</button>
      </div>
    </div>
  );
}

export default ShowComment;
