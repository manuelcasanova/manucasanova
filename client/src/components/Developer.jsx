import { Link } from "react-router-dom"
import { useState } from "react"

export default function Developer() {

const [showRwithme, setShowRwithme] = useState(false)
const [showSteps, setShowSteps] = useState(false)
const [showTips, setShowTips] = useState(false)
const [showPern, setShowPern] = useState(false)
const [showCasanova, setShowCasanova] = useState(false)

const handleShowRWithMe = () => {
  setShowRwithme(prev => !prev);
};

const handleShowSteps = () => {
  setShowSteps(prev => !prev);
};

const handleShowTips = () => {
  setShowTips(prev => !prev);
};

const handleShowPern = () => {
  setShowPern(prev => !prev);
};

const handleShowCasanova = () => {
  setShowCasanova(prev => !prev);
};

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
                <a onClick={handleShowRWithMe}><i className="fa-projects fa-brands fa-plus"></i></a>
              </div>

              <div className="link-space">
                <a href="https://www.rwithme.com/rwithme.mp4" rel="noreferrer" target="_blank"><i className="fa-projects fa-brands fa-youtube"></i></a>
              </div>

              <div className="link-space">
                <a href="https://www.rwithme.com" rel="noreferrer" target="_blank"><i className="fa-solid fa-link"></i></a>
              </div>
            </li>

{showRwithme &&
            <div className="cursive">RWITHME is a social media platform designed specifically for cycling and running enthusiasts. It allows users to discover and share maps and routes, join planned rides and runs, and create their own routes to share with the community. The app also supports interactive features, such as engaging in conversations within specific rides or runs, exchanging private messages, and following other users. It’s a hub for connecting with fellow athletes.</div>}

            <li className="li-line">

              <li>Steps!</li>

              <div className="link-space">
                <a onClick={handleShowSteps}><i className="fa-projects fa-brands fa-plus"></i></a>
              </div>

              <div className="link-space">
                <a href="https://www.casinosteps.ca/videos/steps.mp4" rel="noreferrer" target="_blank"><i className="fa-projects fa-brands fa-youtube"></i></a>
              </div>

              <div className="link-space">
                <a href="https://www.casinosteps.ca" rel="noreferrer" target="_blank"><i className="fa-solid fa-link"></i></a>
              </div>
            </li>

            {showSteps &&
            <div className="cursive">Steps! is an app tailored for students of Casino, the Cuban dance also known as Cuban salsa. It provides a resource for learners to view instructional videos of the dance steps taught in class and hear the pronunciation of each step's name. Administrators can upload new steps and manage access, ensuring students can only view content relevant to their current level. This app supports a structured learning experience while making dance instruction accessible and engaging.</div>}

            <li className="li-line">

              <li>Tips!</li>

              <div className="link-space">
                <a onClick={handleShowTips}><i className="fa-projects fa-brands fa-plus"></i></a>
              </div>

              <div className="link-space">
                <a href="https://www.tips.manucasanova.com/tips.mp4" rel="noreferrer" target="_blank"><i className="fa-projects fa-brands fa-youtube"></i></a>
              </div>

              <div className="link-space">
                <a href="https://www.tips.manucasanova.com/" rel="noreferrer" target="_blank"><i className="fa-solid fa-link"></i></a>
              </div>
            </li>

            {showTips &&
            <div className="cursive">Tips! is a specialized calculator designed for restaurant managers and supervisors to streamline tip distribution among team members. The app calculates how tips should be shared based on various factors, including hours worked, different packages and menus, and roles (such as servers or server support). It simplifies the process of ensuring fair and accurate tip distribution, tailored to the specific needs of the restaurant.</div>}


            <li className="li-line">

              <li>A PERN stack CRUD Application Tutorial</li>

              <div className="link-space">
                <a onClick={handleShowPern}><i className="fa-projects fa-brands fa-plus"></i></a>
              </div>

              <div className="link-space">
                <a href="https://www.manucasanova.com/videos/movies.mp4" rel="noreferrer" target="_blank"><i className="fa-projects fa-brands fa-youtube"></i></a>
              </div>

              <div className="link-space">
                <a href="https://medium.com/@manuelcasanovafernandez/a-pern-stack-crud-application-tutorial-e8676582c708" rel="noreferrer" target="_blank"><i className="fa-solid fa-link"></i></a>
              </div>
            </li>

            {showPern &&
            <div className="cursive">This article is a tutorial to create a simple CRUD application with the PERN stack (PostgreSQL, Express, React, Node).</div>}


            <li className="li-line">

              <li>Casanovaspanish</li>

              <div className="link-space">
                <a onClick={handleShowCasanova}><i className="fa-projects fa-brands fa-plus"></i></a>
              </div>

              <div className="link-space">
                <a href="https://www.casanovaspanish.com" rel="noreferrer" target="_blank"><i className="fa-solid fa-link"></i></a>
              </div>
            </li>


            {showCasanova &&
            <div className="cursive">Website for an online Spanish tutor.</div>}

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
            <li>Node JS</li>
            <li>PostgreSQL</li>
            <li>Full-Stack Applications Deployment</li>
            <li>cPanel Hosting Management</li>
            <li>Web hosting management: Domain management, SSL certificate installation, server configuration</li>


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