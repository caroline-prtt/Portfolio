import { Element } from "react-scroll";
import "./home.scss"

function Home() {
  return(
    <Element name="home">
      <div className="home">
        <div className="home__title">
          <p><span>Bienvenue sur mon portfolio,</span></p>
          <p><span>Je suis Caroline Protat,</span></p>
          <p><span>Développeuse web junior.</span></p>
        </div>
        <div className="home__picture">
        </div>
      </div>
    </Element>
  )  
}

export default Home;