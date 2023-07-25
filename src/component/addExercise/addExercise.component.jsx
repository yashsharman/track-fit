import CommponentPopUp from "../commentPopUp/CommentPopUp.component";
import SavedProgress from "../savedProgress/SavedProgress.component";
import UserInputContainer from "../userInputContainer/UserInputContainer.component";
const clearInputBoxes = ()=>{
    document.querySelectorAll("input").forEach((inputbox)=>inputbox.value = 0)
}
function AddExercise() {
  return (
    <div className="AddExercise-container">
        <div className="weight-set-container">
         <UserInputContainer type={"weight"}/>
         <UserInputContainer type={"reps"}/>
            <div className="AddExercise-btn-group">
                <button className="default-btn" onClick={()=>{}}>SAVE</button>
                <button className="default-btn" onClick={()=>{clearInputBoxes()}}>CLEAR</button>
            </div>
        </div> 
      <SavedProgress/>
        <CommponentPopUp/>
    </div>
  )
}

export default AddExercise;