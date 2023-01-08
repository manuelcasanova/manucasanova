import image from '../manuel.png';

export default function Home () {
return (
  <>
  <div className="title">
        <div className="title-name">Manuel</div>
        <div className="title-name">Casanova</div>
      </div>
      <div>
        <img className="photo" src={image} alt='Manuel' />
      </div>
      <div className="blocks">
      <div className="block"><a href="https://www.manucasanova.com/hospitality" rel="noreferrer" target="_blank">...in the Hospitality Industry</a></div>
        <div className="block"><a href="https://www.manucasanova.com/developer" rel="noreferrer" target="_blank">...as a Web Developer</a></div>
        <div className="block"><a href="https://www.casanovaspanish.com" rel="noreferrer" target="_blank">...as a Spanish Teacher</a></div>
      </div>
      <div className="contact">

       
          <a href="mailto:manucasanova@hotmail.com" className="hide"><i className="fa-solid fa-envelope" /></a>
          <a href="mailto:manucasanova@hotmail.com?subject=Hello Manuel!"></a>
       

        <a href="https://www.linkedin.com/in/manuel-casanova/" rel="noreferrer" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a>

      </div>
  </>
)
}