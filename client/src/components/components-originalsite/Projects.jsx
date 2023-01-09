import PERNTutorial from "./projects/PERNTutorial";
import ToolSwap from "./projects/ToolSwap";
import Steps from "./projects/Steps"
import Casanovaspanish from "./projects/Casanovaspanish";

export default function Projects() {
  return (
    <div className="projects" id="projects">

      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        <Steps />
        <Casanovaspanish />
        <ToolSwap />
        <PERNTutorial />
      </div>

    </div>
  )
}
