import './card.scss';

function Card(props) {
    return(
        <div className='card'>
            <div className='card__image'>
                <img src={props.cover} alt="" />
            </div>
            <div className='card__content'>
                <h4 className='card__content__title'>{props.title}</h4>

            </div>
        </div>
    )
}

export default Card;