import { getNameFromURL } from '../../utils/commonFuncs.utils' 
import ShowCurrentProgress from '../ShowCurrentProgress/ShowCurrentProgress.component'
import './history.styles.css'
function History() {
  const exerciseName = getNameFromURL()
  let exerciseRecords;
  const getPrevRecords = ()=>{
    const userHistory =  JSON.parse(localStorage.getItem("exerciseHistory"))
     let historyKeys = Object.keys(userHistory)
     let currentExerciseRecords ={}
      historyKeys.map((key)=>{
        if(userHistory[key][exerciseName]){
          currentExerciseRecords[key]= userHistory[key][exerciseName]
        }
     })
     exerciseRecords = currentExerciseRecords
     console.log(userHistory)
  }
  getPrevRecords()
  return (
    <>
    <div className="navigation-section">{exerciseName}</div>
    <div className="complete-history-list">
     
     {Object.keys(exerciseRecords).map((key)=>{
      return(<div className='info-container'>
      <h3 className='exercise-heading'>{key}</h3>
      <ShowCurrentProgress recordsArry={exerciseRecords[key]}/>
      </div>)
     })}
    </div>
    </>

  )
}

export default History