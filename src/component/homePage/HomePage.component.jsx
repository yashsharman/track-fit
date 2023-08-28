import "./homepage.styles.css";
import Navbar from "../navbar/Navbar.component";
import PreviewRecords from "../previewRecords/PreviewRecords.component";

function HomePage() {
  return (
    <div className="hompage">
      <Navbar />
      <PreviewRecords/>
    </div>
  );
}

export default HomePage;
