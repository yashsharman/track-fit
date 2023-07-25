const inputType ={
    reps: 'reps',
    weight: 'weight',
    time: 'time',
}
function UserInputContainer({type}) {
  return (
    <>
      <div className="weight-input-container">
        <h4>WEIGHT (kgs)</h4>
        <hr />
        <div className="AddExercise-inputs">
          <button className="AddExercise-btn default-btn" onClick={() => {}}>
            &minus;
          </button>
          <input type="text" />
          <button className="AddExercise-btn default-btn" onClick={() => {}}>
            {" "}
            &#43;
          </button>
        </div>
      </div>
    </>
  );
}

export default UserInputContainer;
