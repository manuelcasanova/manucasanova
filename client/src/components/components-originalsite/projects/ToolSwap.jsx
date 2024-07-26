export default function ToolSwap() {
  return (
    <div className="project-component">

      <div className="project-component-top">

      <div className="project-name">
          <a href="https://github.com/manuelcasanova/finals" rel="noreferrer" target="_blank">Tool Swap</a>
        </div>

        <div className="project-links">

          <div className="github-link">
            <a href="https://github.com/manuelcasanova/finals" rel="noreferrer" target="_blank"><i className="fa-projects fa-brands fa-github"></i></a>
          </div>

          <div className="video-link">
            <a href="https://www.manucasanova.com/videos/toolswap.mp4" rel="noreferrer" target="_blank"><i className="fa-projects fa-brands fa-youtube"></i></a>
          </div>

          {/* <div className="video-link">
            <a href="https://toolswap.netlify.app/" rel="noreferrer" target="_blank"><i className="fa-solid fa-link"></i></a>
          </div> */}

        </div>



      </div>



      <div className="project-details">
        <div className="project-description">
          Web-based inventory tracking system that allows users to search for, reserve, add, edit and delete items to share with their neighbours, as a share-tool library.
        </div>
        <div className="project-front-end">Front-End: <b>ReactJs, CSS.</b></div>
        <div className="project-back-end">Back-End: <b>NodeJs, Express, PostgreSQL.</b></div>
        <div className="project-testing"></div>
      </div>


    </div>


  )
}