import { Route, Routes } from 'react-router-dom';
import './App.css';
import RecordExercise from './component/recordExercise/RecordExercise.component';
import HomePage from './component/homePage/HomePage.component';
import Search from './component/search/search.component';
import AddNewExercise from './component/addNewExercise/addnewexercise.component';
import { saveExerciseToLocalStorage } from './utils/firebase.utils';
import { useEffect, useState } from 'react';


function App() {
  const [defaultExercises, setDefaultExercises] = useState()

  const setDefautExercise = async()=>{
    let localDefaultExercises =JSON.parse(localStorage.getItem("defaultExercises"));
    if(!localDefaultExercises){
      console.log("localDefaultExercises not found in local")
      let exObj = await saveExerciseToLocalStorage()
      setDefaultExercises(exObj)
      localStorage.setItem("defaultExercises", JSON.stringify(exObj) )
    }else{
      setDefaultExercises(localDefaultExercises)
    }
  }
  useEffect(()=>{
    setDefautExercise()
  },[])
  return (
    <div className="App">
      <Routes>
        <Route path='/record-exercise/*' element={<RecordExercise />}/>
        <Route path='/' element={<HomePage data={defaultExercises} />}/>
        <Route path='/search' element={<Search data={defaultExercises} />}/>
        <Route path='/addnewexercise' element={<AddNewExercise />}/>
      </Routes>
    </div>
  );
}

export default App;
