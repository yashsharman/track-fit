import UserInputContainer from "../userInputContainer/UserInputContainer.component";

function AddExercise() {
  return (
    <div className="AddExercise-container">
        <div className="weight-set-container">
         <UserInputContainer/>
            <div className="AddExercise-btn-group">
                <button className="default-btn" onClick={()=>{}}>SAVE</button>
                <button className="default-btn" onClick={()=>{}}>CLEAR</button>
            </div>
        </div>
    </div>
  )
}

export default AddExercise;