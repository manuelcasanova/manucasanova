// import resume from "https://www.manucasanova.com/resume.pdf"
import "./resume.css"
const resume = "https://www.manucasanova.com/resume.pdf"

export default function Resume () {
  return (
    <div className="resume">
      <a title="resume" id="a-resume" href={resume} target="_blank" rel="noreferrer"><i class="fa-solid fa-file-lines"></i></a>
    </div>
  )
}