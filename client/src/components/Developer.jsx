import { Link } from "react-router-dom"

export default function Developer() {
  return (
    <div className="hospitality">
      <div className="hospitality-section">
        <div className="hospitality-section-title">Experience and Projects</div>
        <div className="list">
          <ul>
            <div className="li-title">2022 - present</div>
            <li className="li-line">
              <li>Full Stack Web Developer</li>
            </li>
            <div className="li-title">Projects</div>
            <li className="li-line">

              <li>RWITHME</li>

              <div className="link-space">
                <a href="https://www.rwithme.com/rwithme.mp4" rel="noreferrer" target="_blank"><i className="fa-projects fa-brands fa-youtube"></i></a>
              </div>

              <div className="link-space">
                <a href="https://www.rwithme.com" rel="noreferrer" target="_blank"><i className="fa-solid fa-link"></i></a>
              </div>
            </li>


            <li className="li-line">

              <li>Casinosteps</li>

              <div className="link-space">
                <a href="https://www.casinosteps.ca/videos/steps.mp4" rel="noreferrer" target="_blank"><i className="fa-projects fa-brands fa-youtube"></i></a>
              </div>

              <div className="link-space">
                <a href="https://www.casinosteps.ca" rel="noreferrer" target="_blank"><i className="fa-solid fa-link"></i></a>
              </div>
            </li>

            <li className="li-line">

              <li>Tips!</li>

              <div className="link-space">
                <a href="https://www.tips.manucasanova.com/tips.mp4" rel="noreferrer" target="_blank"><i className="fa-projects fa-brands fa-youtube"></i></a>
              </div>

              <div className="link-space">
                <a href="https://www.tips.manucasanova.com/" rel="noreferrer" target="_blank"><i className="fa-solid fa-link"></i></a>
              </div>
            </li>


            <li className="li-line">

              <li>A PERN stack CRUD Application Tutorial</li>

              <div className="link-space">
                <a href="https://www.manucasanova.com/videos/movies.mp4" rel="noreferrer" target="_blank"><i className="fa-projects fa-brands fa-youtube"></i></a>
              </div>

              <div className="link-space">
                <a href="https://medium.com/@manuelcasanovafernandez/a-pern-stack-crud-application-tutorial-e8676582c708" rel="noreferrer" target="_blank"><i className="fa-solid fa-link"></i></a>
              </div>
            </li>


            <li className="li-line">

              <li>Casanovaspanish</li>

              <div className="link-space">
                <a href="https://www.casanovaspanish.com" rel="noreferrer" target="_blank"><i className="fa-solid fa-link"></i></a>
              </div>
            </li>


          </ul>
        </div>
      </div>



      <div className="hospitality-section">
        <div className="hospitality-section-title">Skills</div>
        <div className="list">
          <ul>


            <div className="li-title">Web Development</div>
            <li>JavaScript</li>
            <li>React JS</li>
            <li>Express JS</li>
            <li>Node Js</li>
            <li>PostgreSQL</li>



            <div className="li-title">Informatics</div>
            <li>Office software: Word processing, Spreadsheets, Slide presentation software, Email management software</li>
            <li>Editing programs: Pixlr, Audacity, Screencast-o-matic</li>
            <li>Authoring tools: Lim, Exelearning, Hot potatoes, LAMS</li>
            <li>E-learning platforms: Moodle, Coursesites, Edmodo, Schoology, Udemy</li>


            <div className="li-title">Languages</div>
            <li>Spanish: native</li>
            <li>English: full professional proficiency</li>
            <li>French: professional proficiency</li>


          </ul>
        </div>

      </div>

      <div className="hospitality-section">
        <div className="hospitality-section-title">Degrees and courses</div>
        <div className="list">
          <ul>


            <div className="li-title">Degrees</div>
            <li>Full Stack Web Development Diploma - 2022</li>
 



            <div className="li-title">Courses</div>
            <li>Programming Fundamentals with JavaScript</li>
            <li>Networking & HTTP for Web Developers</li>
            <li>Intro to Web Server Development with Node</li>
            <li>Intro to Front End Development</li>
            <li>Relational Databases & SQL</li>
            <li>React</li>
            <li>Automated Testing in React</li>
            <li>Ruby on Rails</li>
     
   


          </ul>
        </div>

      </div>



      {/* <div>
      <Link to="/" className="no-decoration">Back home</Link>
    </div> */}
    </div>
  )
}