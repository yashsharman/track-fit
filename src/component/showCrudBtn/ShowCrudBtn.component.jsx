import './ShowCurrentProgress.styles.css'
function ShowCrudBtn({showGroupSecondBtn, addSet,clearInputBoxes,deleteSet,updateSet}) {
  return (
    <div className="AddExercise-btn-group">
      {showGroupSecondBtn ? (
          <div className="AddExercise-btn-group">
            <button className="default-btn save-btn" onClick={()=>{updateSet()}}>
              UPDATE
            </button>
            <button
              className="default-btn delete-btn"
              onClick={() =>{deleteSet()}}
            >
              DELETE
            </button>
          </div>
      ) : (
          <div className="AddExercise-btn-group">
            <button className="default-btn save-btn" onClick={() => addSet()}>
              SAVE
            </button>
            <button
              className="default-btn clear-btn"
              onClick={() => clearInputBoxes()}
            >
              CLEAR
            </button>
          </div>
      )}
    </div>
  );
}

export default ShowCrudBtn;
