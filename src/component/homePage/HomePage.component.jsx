import "./homepage.styles.css";
import { ReactComponent as TrackFitlogo } from "../../assets/trackfit-logo2.svg";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div className="navbar">
      <div className="logo-div">
        <TrackFitlogo className="trackfit-logo" />
        <h3>TrackFit</h3>
      </div>
      <Link to="/search">
      <span
        className="addExercise-icon"
        >
        Add Exercise
      </span>
        </Link>
    </div>
  );
}

export default HomePage;
