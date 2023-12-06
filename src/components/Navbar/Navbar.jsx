import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
import "./navbar.scss"

function Navbar(){

    return(
        <nav className="navbar">
            <div className="navbar__logo">
                <Link to="home" smooth={true} duration={500}><img src={logo} alt="Logo Caroline Protat"></img></Link>
            </div>
            <div className="navbar__menu">
                <ul className="navbar__menu__list">
                    <li className="navbar__menu__list__link"><Link to="home" smooth={true} duration={500}>ACCUEIL</Link></li>
                    <li className="navbar__menu__list__link"><Link to="presentation" smooth={true} duration={500}>PRÉSENTATION</Link></li>
                    <li className="navbar__menu__list__link"><Link to="portfolio" smooth={true} duration={500}>PORTFOLIO</Link></li>
                    <li className="navbar__menu__list__link"><Link to="contact" smooth={true} duration={500}>CONTACT</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
