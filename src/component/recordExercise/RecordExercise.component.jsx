import CommponentPopUp from "../commentPopUp/CommentPopUp.component";
import SavedProgress from "../savedProgress/SavedProgress.component";
import UserInputContainer from "../userInputContainer/UserInputContainer.component";
const clearInputBoxes = () => {
  document
    .querySelectorAll("input")
    .forEach((inputbox) => (inputbox.value = 0));
};
const exerciseRecords = [
  {
    comment: "",
    weight: 12.5,
    reps: 12,
  },
  {
    comment: "",
    weight: 14.5,
    reps: 12,
  },
  {
    comment: "",
    weight: 1.5,
    reps: 12,
  },
  {
    comment: "",
    weight: 125.5,
    reps: 12,
  },
];
function RecordExercise() {
  return (
    <div className="AddExercise-container">
      <div className="weight-set-container">
        <UserInputContainer type={"weight"} />
        <UserInputContainer type={"reps"} />
        <UserInputContainer type={"time"} />
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
      <SavedProgress  exerciseRecords={exerciseRecords}/>
      <CommponentPopUp />
    </div>
  );
}

export default RecordExercise;


const jsonForlocalStorage= {
  crunchs:{
    '12/7/2023':[
      {
        comment: "",
        weight: 12.5,
        reps: 12,
        pr: false,
      },
      {
        comment: "",
        weight: 14.5,
        reps: 12,
        pr: false,
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
    ],
    '22/7/2023':[
      {
        comment: "",
        weight: 12.5,
        reps: 12,
        pr: false,
      },
      {
        comment: "",
        weight: 14.5,
        reps: 12,
        pr: false,
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
    ]
  }
}