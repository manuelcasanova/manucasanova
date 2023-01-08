export default function Tweeter() {
  return (
    <div className="project-component">

      <div className="project-component-top">

      <div className="project-name">
          <a href="https://github.com/manuelcasanova/tweeter2" rel="noreferrer" target="_blank">Tweeter</a>
        </div>

        <div className="project-links">

          <div className="github-link">
            <a href="https://github.com/manuelcasanova/tweeter2" rel="noreferrer" target="_blank"><i className="fa-projects fa-brands fa-github"></i></a>
          </div>

          {/* <div className="video-link">
            <a href="https://LINK" rel="noreferrer" target="_blank"><i className="fa-projects fa-brands fa-youtube"></i></a>
          </div> */}

        </div>



      </div>

      <div className="project-details">
        <div className="project-description">
          A single-page Twitter clone.
        </div>
        <div className="project-front-end">Front-End: <b>HTML, CSS, Javascript.</b></div>
        <div className="project-back-end">Back-End: <b>NodeJs, Express, jQuery, Ajax.</b></div>
        <div className="project-testing">Testing: <b>Mocha, Chai.</b></div>
      </div>


    </div>


  )
}