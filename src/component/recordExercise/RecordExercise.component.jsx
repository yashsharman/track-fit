import SavedProgress from "../savedProgress/SavedProgress.component";
import UserInputContainer from "../userInputContainer/UserInputContainer.component";
const clearInputBoxes = () => {
  document
    .querySelectorAll("input")
    .forEach((inputbox) => (inputbox.value = 0));
};
const exerciseRecords = [
  {
    comment: "hello",
    weight: 12.5,
    reps: 12,
    pr: false,
  },
  {
    comment: "",
    weight: 14.5,
    reps: 12,
    pr: true,
  },
  {
    comment: "",
    weight: 1.5,
    reps: 12,
    pr: false,
  },
  {
    comment: "",
    weight: 125.5,
    reps: 12,
    pr: false,
  },
];
const timeBoundExercise = ["hanging", "plank"];
const renderExerciseElement = (exerciseName) => {
  let renderElement;
  timeBoundExercise.map((exName) => {
    if (exName == exerciseName) {
      renderElement = (
        <>
          <UserInputContainer type={"time"} />
          <UserInputContainer type={"reps"} />
        </>
      );
    } else {
      renderElement = (
        <>
          <UserInputContainer type={"weight"} />
          <UserInputContainer type={"reps"} />
        </>
      );
    }
  });
  return renderElement;
};
function RecordExercise({ exerciseName="Chin-ups" }) {
  return (
    <div className="AddExercise-container">
      <h2>{!exerciseName ? "Example Exercise" : exerciseName}</h2>
      <div className="weight-set-container">
        {renderExerciseElement(exerciseName)}
        <div className="AddExercise-btn-group">
          <button className="default-btn" onClick={() => {}}>
            SAVE
          </button>
          <button
            className="default-btn"
            onClick={() => {
              clearInputBoxes();
            }}
          >
            CLEAR
          </button>
        </div>
      </div>
      <SavedProgress exerciseRecords={exerciseRecords} />
    </div>
  );
}

export default RecordExercise;
