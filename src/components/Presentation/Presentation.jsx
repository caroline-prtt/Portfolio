import { Element } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faSass, faJs, faReact, faGitAlt, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import "./presentation.scss";

function Presentation() {
    return(
        <Element name="presentation">
            <div className="presentation">
                <h2 className="presentation__title">PRÉSENTATION</h2>
                <div className="presentation__text">
                    <p>Après une carrière enrichissante en tant que notaire, au cours de laquelle j'ai cultivé des compétences essentielles telles que l'organisation, la rigueur, la persévérance, la curiosité et l'autonomie pendant près de 10 ans, j'ai entrepris une passionnante transition vers le monde du développement web.</p>
                    <p>J’ai suivi avec succès la formation de développeur web d'OpenClassrooms. Cette expérience m'a permis d'acquérir des compétences en HTML, CSS, JavaScript, et React, ainsi que quelques notions en back-end.</p>
                    <p>Mon parcours professionnel antérieur m’a permis de forger des qualités telles que la gestion efficace du temps, la résolution de problèmes et une approche méthodique du travail. Ces compétences, combinées à mes nouvelles connaissances en développement web, font de moi une personne polyvalente et adaptable.</p>
                    <p>Je souhaite aujourd’hui appliquer mes connaissances techniques émergentes dans un environnement professionnel stimulant. Je suis prête à relever de nouveaux défis au sein d'une équipe dynamique, où je pourrai contribuer activement, tout en continuant à développer mes compétences et à apprendre de manière continue.</p>
                </div>
                <div className="presentation__competences">
                    <h3>COMPÉTENCES</h3>
                    <div className="presentation__competences__list">
                        <div>
                            <FontAwesomeIcon icon={faHtml5} />
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faCss3Alt} />
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faSass} />
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faJs} />
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faReact} />
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faGitAlt} />
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faNodeJs} />
                        </div>
                        
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default Presentation;