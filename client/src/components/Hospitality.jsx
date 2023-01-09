import { Link } from "react-router-dom"

export default function Hospitality() {
  return (
    <div className="hospitality">
      <div className="hospitality-section">
        <div className="hospitality-section-title">Experience</div>
        <div className="list">
        <ul>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>

          </ul>
        </div>
      </div>

      <div className="hospitality-section">
        <div className="hospitality-section-title">Skills</div>
        <div className="list">
        <ul>
            <li className="li-title">Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
            <li className="li-title">Coffee</li>
            <li>Tea</li>
            <li>Milk</li>
            <li>Coffee</li>
            <li>Tea</li>
            <li>Milk Milk Milk Milk Milk Milk Milk Milk Milk Milk Milk Milk Milk Milk Milk Milk Milk Milk</li>
          </ul>
        </div>

      </div>

      <div className="hospitality-section">
        <div className="hospitality-section-title">Degrees and courses</div>
        <div className="list">
          <ul>
        
            <li>Tea</li>
            <li>Milk</li>
          </ul>
        </div>

      </div>



      {/* <div>
      <Link to="/" className="no-decoration">Back home</Link>
    </div> */}
    </div>
  )
}