export default function Steps() {
  return (
    <div className="project-component">

      <div className="project-component-top">

      <div className="project-name">
          <a>Steps!</a>
        </div>

        <div className="project-links">

          <div className="video-link">
            <a href="https://www.casinosteps.ca/videos/steps.mp4" rel="noreferrer" target="_blank"><i className="fa-projects fa-brands fa-youtube"></i></a>
          </div>

          {/* Google drive: https://drive.google.com/file/d/1hyHMkWUplRda-CcIPFk16_h8Pc_D-RoX/view?usp=sharing */}

          <div className="video-link">
            <a href="https://www.casinosteps.ca" rel="noreferrer" target="_blank"><i className="fa-solid fa-link"></i></a>
          </div>

        </div>



      </div>



      <div className="project-details">
        <div className="project-description">
          Application that allows dance students to watch videos of the steps learned in class. The administrator can add, edit, update and delete users and steps.
        </div>
        <div className="project-front-end">Front-End: <b>ReactJs, CSS.</b></div>
        <div className="project-back-end">Back-End: <b>NodeJs, Express, MongoDB, Firebase.</b></div>
        <div className="project-testing"></div>
      </div>


    </div>


  )
}