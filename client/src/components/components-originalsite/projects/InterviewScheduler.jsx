export default function InterviewScheduler() {
  return (
    <div className="project-component">

      <div className="project-component-top">

        <div className="project-name">
          <a href="https://github.com/manuelcasanova/scheduler" rel="noreferrer" target="_blank">Interview Scheduler</a>
        </div>

        <div className="project-links">

          <div className="github-link">
            <a href="https://github.com/manuelcasanova/scheduler" rel="noreferrer" target="_blank"><i className="fa-projects fa-brands fa-github"></i></a>
          </div>
          {/* 
          <div className="video-link">
            <a href="https://LINK" rel="noreferrer" target="_blank"><i className="fa-projects fa-brands fa-youtube"></i></a>
          </div> */}

        </div>



      </div>

      <div className="project-details">
        <div className="project-description">
          A scheduler that allows users to create, edit and delete interview appointments.
        </div>
        <div className="project-front-end">Front-End: <b>ReactJs, CSS, HTML.</b></div>
        <div className="project-back-end">Back-End: <b>NodeJs, Express, PostgreSQL.</b></div>
        <div className="project-testing">Testing: <b>JEST, Storybook, Cypress.</b></div>
      </div>

    </div>


  )
}