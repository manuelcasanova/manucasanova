import Header from "./Header"
import Image from "./Image"
import About from "./About"
import Skills from "./Skills"
import Projects from "./Projects"
import Contact from "./Contact"
import Social from "./Social"
import SchoolProjects from "./SchoolProjects"
// import Resume from "./Resume"
import Footer from "./Footer"

export default function Main() {
  return (
    <div className="app-main">
      <Header />
      <Image />
      <Social />
      <div className="about-skills">
        <About />
        <Skills />
      </div>
      <Projects />
      <SchoolProjects />
      <Contact />
      {/* <Resume /> */}
      {/* <Footer /> */}
    </div>
  )
}
