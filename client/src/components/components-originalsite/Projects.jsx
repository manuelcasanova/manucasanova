import PERNTutorial from "./projects/PERNTutorial";
import ToolSwap from "./projects/ToolSwap";
import Steps from "./projects/Steps"
import Casanovaspanish from "./projects/Casanovaspanish";
import Tips from "./projects/Tips";

export default function Projects() {
  return (
    <div className="projects" id="projects">

      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        <Steps />
        <Tips />
        <PERNTutorial />
        <Casanovaspanish />
        <ToolSwap />
        
      </div>

    </div>
  )
}
