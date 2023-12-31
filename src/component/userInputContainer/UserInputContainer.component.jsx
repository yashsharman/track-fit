import './UserInputContainer.styles.css'
const inputType = {
  reps: {
    heading: "REPS",
    headingType: "",
  },
  weight: {
    heading: "WEIGHT",
    headingType: "(kgs)",
  },
  time: {
    heading: "TIME",
    headingType: "(sec)",
  },
};
const Increment = (e) => {
  switch (e.target.previousSibling.className) {
    case "reps":
      e.target.previousSibling.value = +e.target.previousSibling.value + 1;
      break;
    case "time":
      e.target.previousSibling.value = +e.target.previousSibling.value + 5;
      break;
    case "weight":
      e.target.previousSibling.value = +e.target.previousSibling.value + 2.5;
      break;
    default:
      console.log("default");
  }
};
const Decrement = (e) => {
    switch (e.target.nextSibling.className) {
        case "reps":
          e.target.nextSibling.value = +e.target.nextSibling.value - 1;
          break;
        case "time":
          e.target.nextSibling.value = +e.target.nextSibling.value - 5;
          break;
        case "weight":
          e.target.nextSibling.value = +e.target.nextSibling.value - 2.5;
          break;
        default:
          console.log("default");
      }
};
function UserInputContainer({ type }) {
  return (
    <>
      <div className="input-container">
        <h4>
          {inputType[type].heading} {inputType[type].headingType}
        </h4>
        <span className='heading-underline'></span>
        <div className="AddExercise-inputs">
          <button
            className={`${type.heading}-btn userInput-btn`}
            onClick={(e) => Decrement(e)}
          >
            &minus;
          </button>
          <input
            type="text"
            defaultValue={0}
            className={inputType[type].heading.toLowerCase()}
          />
          <button
            className={`${type.heading}-btn userInput-btn`}
            onClick={(e) => Increment(e)}
          >
            &#43;
          </button>
        </div>
      </div>
    </>
  );
}

export default UserInputContainer;
