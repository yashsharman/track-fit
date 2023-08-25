import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight,} from '@fortawesome/free-solid-svg-icons';
import './previewRecords.styles.css'


function PreviewRecords() {
  const userHistory =localStorage.getItem("exerciseHistory")
  return (
    <div className='PreviewRecords'>
      <div className="carouselcontroller">
      <FontAwesomeIcon className='controlIccons' icon={faAngleLeft} />
      <h3 className="dayHeading">Today</h3>
      <FontAwesomeIcon className='controlIccons' icon={faAngleRight} />
      </div>
      <div className="carousel">
        <div>{userHistory}</div>
      </div>
    </div>
  )
}

export default PreviewRecords;