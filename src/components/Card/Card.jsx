import { Link } from "react-router-dom";
import './card.scss';

function Card(props) {

    const scrollToTop = () => {
        window.scrollTo(0,0);
    }

    return(
        <div className='container'>

            <div className="card">

                <div className='card__image'>
                    <img src={props.cover} alt="Page d'accueil du site web"/>
                </div>

                <div className="card__keywords">
                    {props.keywords.map((keyword, index) =>(
                        <div key={index} className="keyword">{keyword}</div>
                    ))}
                </div>
                        
                <div className='card__description'>
                    <h4 className='card__description__title'>{props.title}</h4>
                    <h5 className='card__description__subtitle'>{props.subtitle}</h5>
                </div>
            </div>

            <Link to={`/project/${props.id}`} onClick={scrollToTop} className="link">EN SAVOIR PLUS</Link>

        </div>
    )
}

export default Card;