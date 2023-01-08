export default function Wikimaps() {
  return (
    <div className="project-component">

      <div className="project-component-top">

      <div className="project-name">
          <a href="https://github.com/manuelcasanova/wikimaps" rel="noreferrer" target="_blank">Wikimaps</a>
        </div>

        <div className="project-links">

          <div className="github-link">
            <a href="https://github.com/manuelcasanova/wikimaps" rel="noreferrer" target="_blank"><i className="fa-projects fa-brands fa-github"></i></a>
          </div>

          {/* <div className="video-link">
            <a href="https://LINK" rel="noreferrer" target="_blank"><i className="fa-projects fa-brands fa-youtube"></i></a>
          </div> */}


        </div>



      </div>

      <div className="project-details">
        <div className="project-description">
          A web app that allows users to collaboratively create maps which list multiple
          "points". For example: "Best Places to Eat Around Town".
        </div>
        <div className="project-front-end">Front-End: <b>HTML, CSS.</b></div>
        <div className="project-back-end">Back-End: <b>Node, Express, PostgreSQL.</b></div>
        <div className="project-testing"></div>
      </div>


    </div>


  )
}