export default function TinyApp() {
  return (
    <div className="project-component">

      <div className="project-component-top">

      <div className="project-name">
          <a href="https://github.com/manuelcasanova/tinyapp" rel="noreferrer" target="_blank">Tiny App</a>
        </div>

        <div className="project-links">

          <div className="github-link">
            <a href="https://github.com/manuelcasanova/tinyapp" rel="noreferrer" target="_blank"><i className="fa-projects fa-brands fa-github"></i></a>
          </div>

          {/* <div className="video-link">
            <a href="https://LINK" rel="noreferrer" target="_blank"><i className="fa-projects fa-brands fa-youtube"></i></a>
          </div> */}
        </div>



      </div>

      <div className="project-details">
        <div className="project-description">
          TinyApp is a full stack web application built with Node and Express that allows users to shorten long URLs.
        </div>
        <div className="project-front-end">Front-End:<b> HTML, CSS, Javascript.</b></div>
        <div className="project-back-end">Back-End: <b>NodeJs, Express.</b></div>
        <div className="project-testing"></div>
      </div>


    </div>


  )
}