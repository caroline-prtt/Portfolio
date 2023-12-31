import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import photo from '../../assets/portrait/photo.png'
import "./home.scss"

function Home() {
  return(
    <div id="home" className="home">
      <div className="home__title">
        <p className="home__title title"><span>Bienvenue sur mon portfolio,</span></p>
        <h1 className="home__title title"><span>JE SUIS CAROLINE PROTAT,</span></h1>
        <p className="home__title title"><span>DÉVELOPPEUSE WEB.</span></p>
        <p className="home__title subtitle">Basée sur Lyon, je suis à la recherche de ma première expérience en tant que développeuse front-end junior.</p>
        <p className="home__title subtitle">Où me trouver :</p>
        <div className="home__title icons">
          <Link to="https://www.linkedin.com/in/caroline-protat-b67761231/" title='Mon profil Linkedin' className='home__title icons__link'><FontAwesomeIcon icon={faLinkedin} /></Link>
          <Link to="https://github.com/caroline-prtt" title="Mon compte GitHub" className="home__title icons__link"><FontAwesomeIcon icon={faGithub} /></Link>
          <HashLink smooth to="/#contact" title="Par mail" className="home__title icons__link"><FontAwesomeIcon icon={faEnvelope} /></HashLink>
        </div>
      </div>
      <div className="home__picture">
        <img src={photo} alt="Portrait"></img>
      </div>
    </div>
  )  
}

export default Home;