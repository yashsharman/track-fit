import './App.css';
import AddExercise from './component/addExercise/addExercise.component';
import SavedProgress from './component/savedProgress/SavedProgress.component';

function App() {
  return (
    <div className="App">
      <AddExercise/>
      <SavedProgress/>
    </div>
  );
}

export default App;
