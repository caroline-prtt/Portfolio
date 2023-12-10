import Card from "../Card/Card";
import data from "../../data.json";
import "./portfolio.scss"

function Portfolio() {

    return(
        <div id="portfolio" className="portfolio">
            <h2 className="portfolio__title">PORTFOLIO</h2>
            <div className="portfolio__cards">
                {data.map((item, index) => (
                    <Card 
                        key={index}
                        id={item.id}
                        cover={item.cover} 
                        title={item.title} 
                        subtitle={item.subtitle}
                        keywords={item.keywords}
                    />
                ))}
            </div>
        </div>
    )
}

export default Portfolio ;
