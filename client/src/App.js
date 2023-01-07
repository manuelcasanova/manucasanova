
import './App.css';
import image from './manuel.png';

function App() {
  return (
    <div className="App">
      <div className="title">
        <div className="title-name">Manuel</div>
        <div className="title-name">Casanova</div>
      </div>
      <div>
        <img className="photo" src={image} alt='Manuel' />
      </div>
      <div className="blocks">
        <div className="block">...in the Hospitality Industry</div>
        <div className="block">...as a Web Developer</div>
        <div className="block">...as a Spanish Teacher</div>
      </div>
      <div className="contact">

        <p>
          <a href="mailto:manucasanova@hotmail.com" className="hide"><i className="fa-solid fa-envelope" /></a>
          <a href="mailto:manucasanova@hotmail.com?subject=Hello Manuel!"></a>
        </p>

        <a href="https://www.linkedin.com/in/manuel-casanova/" rel="noreferrer" target="_blank"><i className="fa-brands fa-linkedin-in fa-social"></i></a>

      </div>
    </div>
  );
}

export default App;
