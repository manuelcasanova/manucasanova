import InterviewScheduler from "./projects/InterviewScheduler";
import JungleOnRails from "./projects/JungleOnRails";
import TinyApp from "./projects/TinyApp";
import Wikimaps from "./projects/Wikimaps";
import Tweeter from "./projects/Tweeter";
import LighthouseBNB from "./projects/LighthouseBNB";


export default function SchoolProjects() {
  return (
    <div className="projects" id="schoolprojects" >

      <h2 className="section-title">School projects</h2>
      <div className="projects-grid">
        <JungleOnRails />
        <InterviewScheduler />
        <Wikimaps />
        <LighthouseBNB />
        <Tweeter />
        <TinyApp />
      </div>

    </div>
  )
}
