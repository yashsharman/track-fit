import { Route, Routes } from "react-router-dom";
import "./App.css";
import RecordExercise from "./component/recordExercise/RecordExercise.component";
import HomePage from "./component/homePage/HomePage.component";
import Search from "./component/search/search.component";
import AddNewExercise from "./component/addNewExercise/addnewexercise.component";
import { saveExerciseToLocalStorage } from "./utils/firebase.utils";
import { createContext, useEffect, useState } from "react";
import History from "./component/history/history.component";

const defaultExercise = createContext();
function App() {
  const [defaultExercisesObj, setDefaultExercisesObj] = useState();

  const setDefautExercise = async () => {
    let localDefaultExercisesObj = JSON.parse(
      localStorage.getItem("defaultExercisesObj")
    );
    if (!localDefaultExercisesObj) {
      console.log("localDefaultExercisesObj not found in local");
      let exObj = await saveExerciseToLocalStorage();
      setDefaultExercisesObj(exObj);
      localStorage.setItem("defaultExercisesObj", JSON.stringify(exObj));
    } else {
      setDefaultExercisesObj(localDefaultExercisesObj);
    }
  };
  useEffect(() => {
    setDefautExercise();
  }, []);
  return (
    <div className="App">
        <defaultExercise.Provider value={defaultExercisesObj}>
      <Routes>
          <Route path="/record-exercise/*" element={<RecordExercise />} />
          <Route path="/" element={<HomePage data={defaultExercisesObj} />} />
          <Route
            path="/search"
            element={<Search data={defaultExercisesObj} />}
          />
        <Route path="/addnewexercise" element={<AddNewExercise />} />
        <Route path="/history/*" element={<History />} />
      </Routes>
        </defaultExercise.Provider>
    </div>
  );
}

export default App;
export { defaultExercise };
