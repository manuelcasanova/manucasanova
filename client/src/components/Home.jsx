import image from '../manuel.png';
import { useNavigate, Link } from 'react-router-dom';

export default function Home() {

  const navigate = useNavigate()

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



        {/* <a href="https://www.manucasanova.com/hospitality" rel="noreferrer" target="_blank">
          ...in the Hospitality Industry
          </a> */}

        <Link to="/hospitality" className='link no-line'>
          <div className="block">
            ...in the Hospitality Industry
          </div>
        </Link>


        {/* <div className="block"><a href="https://www.manucasanova.com/developer" rel="noreferrer" target="_blank">...as a Web Developer</a></div> */}


        <Link to="/developer" className='link no-line'>
          <div className="block">
            ...as a Web Developer
          </div>
        </Link>



        {/* <div className="block"><a href="https://www.casanovaspanish.com" rel="noreferrer" target="_blank">...as a Spanish Teacher</a></div> */}
        <div >

          <Link to="/spanish" className='link no-line'>
            <div className="block">
              ...as a Spanish Teacher
            </div>
          </Link>

        </div>

      </div>
      <div className="contact">


        <a href="mailto:manucasanova@hotmail.com"><i className="fa-solid fa-envelope" /></a>
        <a href="mailto:manucasanova@hotmail.com?subject=Hello Manuel!"></a>


        <a href="https://www.linkedin.com/in/manuel-casanova/" rel="noreferrer" target="_blank"><i className="fa-solid fa-brands fa-linkedin-in"></i></a>

      </div>
    </>
  )
}