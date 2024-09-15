import image from '../manuel.png';
import { useNavigate, Link } from 'react-router-dom';
import { Fragment, useState } from 'react';

export default function Home() {

  const [showMore, setShowMore] = useState(false)

  const handleShowMore = () => {
    setShowMore(prev => !prev);
  };


  const navigate = useNavigate()
  const resume = "https://www.manucasanova.com/resume2.pdf"

  return (
    <>
      <div className="title">
        <div className="title-name">Manuel</div>
        <div className="title-name">Casanova</div>
      </div>
      <div>
        <img className="photo" src={image} alt='Manuel' />
      </div>

      <div className="contact">


<a href="mailto:manucasanova@hotmail.com"><i className="fa-solid fa-envelope" />
  <a href="mailto:manucasanova@hotmail.com?subject=Hello Manuel!"></a>
</a>


<div className="resume">
  <a title="resume" id="a-resume" href={resume} target="_blank" rel="noreferrer">
    <i class="fa-solid fa-file-pdf"></i>
    </a>
</div>

<a href="https://www.linkedin.com/in/manuel-casanova/" rel="noreferrer" target="_blank"><i className="fa-solid fa-brands fa-linkedin-in"></i></a>

<a href="https://github.com/manuelcasanova/" rel="noreferrer" target="_blank"><i className="fa-solid fa-brands fa-github"></i></a>

</div>

      <div className="blocks">

        <Link to="/developer" className='link no-line'>
          <div className="block bold">
            ...as a Web Developer
          </div>
        </Link>

        {/* {!showMore &&
          <div className="link-space">
            <a onClick={handleShowMore}><i className="fa-projects fa-brands fa-plus"></i></a>
          </div>
        }

        {showMore &&
          <div className="link-space">
            <a onClick={handleShowMore}><i className="fa-solid fa-minus"></i></a>
          </div>
        } */}

        {/* {showMore &&  */}

        {/* <div className='blocks-bottom'> */}

          <Link to="/hospitality" className='link no-line'>
            <div className="block-shorter">
              ...in the Hospitality Industry
            </div>
          </Link>


          <Link to="/spanish" className='link no-line'>
            <div className="block-shorter">
              ...as a Spanish Teacher
            </div>
          </Link>

          <Link to="/beyond" className='link no-line'>
            <div className="block-shorter">
              ...beyond the resume
            </div>
          </Link>

        {/* </div> */}

        {/* } */}

      </div >



    </>
  )
}