import { Link } from "react-router-dom";
import Card from "../Card/Card";
import data from "../../data.json";
import "./portfolio.scss"

function Portfolio() {

    const scrollToTop = () => {
        window.scrollTo(0,0);
    }

    return(
        <div id="portfolio" className="portfolio">
            <h2 className="portfolio__title">PORTFOLIO</h2>
            <div className="portfolio__cards">
                {data.map((item, index) => (
                    <Link key={item.id} to={`/project/${item.id}`} onClick={scrollToTop} className="portfolio__cards__link">
                        <Card 
                            key={index}
                            cover={item.cover} 
                            title={item.title} 
                            subtitle={item.subtitle}
                            keywords={item.keywords}
                        />
                    </Link> 
                ))}
            </div>
        </div>
    )
}

export default Portfolio ;