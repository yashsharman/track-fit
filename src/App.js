import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Track Fit!!!</h1>
        <h3>To do:</h3>
        <ol>
          <li>Search bar</li>
          <li>Daily tracking panel.</li>
          <li>Preloaded exercise for every Muscle.</li>
          <li>page to add weights and reps on a selected exercise.</li>
        </ol>
      </header>
    </div>
  );
}

export default App;
