import ShowCurrentProgress from "../ShowCurrentProgress/ShowCurrentProgress.component";
import UserInputContainer from "../userInputContainer/UserInputContainer.component";
import './RecordExercise.styles.css'
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
function RecordExercise({ exerciseName = "Chin-ups" }) {
  return (
    <div className="AddExercise-container">
      <div className="exercise-heading">{!exerciseName ? "Example Exercise" : exerciseName}</div>
      <div className="weight-set-container">
        {renderExerciseElement(exerciseName)}
        <div className="AddExercise-btn-group">
          <button className="default-btn save-btn" onClick={() => {}}>
            SAVE
          </button>
          <button
            className="default-btn clear-btn"
            onClick={() => {
              clearInputBoxes();
            }}
          >
            CLEAR
          </button>
        </div>
      </div>
      <ShowCurrentProgress exerciseRecords={exerciseRecords} />
    </div>
  );
}

export default RecordExercise;
