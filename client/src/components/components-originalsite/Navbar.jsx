import { Link } from "react-router-dom"

export default function Navbar() {

  // Get the container element


  //   let btnContainer = document.getElementById("navbar");

  // console.log(btnContainer)

  // Get all buttons with className="btn" inside the container


  // let btns = btnContainer.getElementsByClassName("btn");

  // console.log("btns", btns)

  // Loop through the buttons and add the active class to the current/clicked button


  // for (let i = 0; i < btns.length; i++) {
  //   btns[i].addEventListener("click", function() {
  //     let current = document.getElementsByClassName("active");
  //     current[0].className = current[0].className.replace(" active", "");
  //     this.className += " active";
  //   });
  // }


  return (
    <>

      {/* Navbar small screens */}

      <div id="navbar" className="navbar-small" >
        {/* <a className="active" href="#">Home</a> */}
        <Link to="/" className='btn'>Home</Link>
        {/* <a href="#" className='red'>Home</a> */}
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>


      {/* Navbar 600-1200 screens */}

      <div id="navbar" className="navbar" >

        {/* <a className="btn active" href="#home">Home</a> */}
        <Link to="/" className='btn'>Home</Link>
        {/* <a className="btn" href="#home">Home</a> */}
        <a className="btn" href="#about">About</a>
        <a className="btn"
          // navbar-skills" 
          href="#skills">Skills</a>
        <a className="btn" href="#projects">Projects</a>
        <a className="btn" href="#schoolprojects">School Projects</a>
        <a className="btn" href="#contact">Contact</a>

      </div>


      {/* Navbar 1200 screens */}

      <div id="navbar" className="navbar-big" >

        {/* <a className="btn active" href="#home">Home</a> */}
        <Link to="/" className='btn'>Home</Link>
        {/* <a className="btn" href="#home">Home</a> */}
        <a className="btn" href="#about">About</a>
        <a className="btn"
          // navbar-skills" 
          href="#about">Skills</a>
        <a className="btn" href="#projects">Projects</a>
        <a className="btn" href="#schoolprojects">School Projects</a>

        <a className="btn" href="#contact">Contact</a>


      </div>

    </>
  )
}
