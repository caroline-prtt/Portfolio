import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
import "./navbar.scss"

function Navbar(){
    return(
        <nav className="navbar">
            <div className="navbar__logo">
                <img src={logo} alt="Logo Caroline Protat"></img>
            </div>
            <ul className="navbar__menu">
                <li><Link to="home" smooth={true} duration={500}>ACCUEIL</Link></li>
                <li><Link to="presentation" smooth={true} duration={500}>PRÉSENTATION</Link></li>
                <li><Link to="portfolio" smooth={true} duration={500}>PORTFOLIO</Link></li>
                <li><Link to="contact" smooth={true} duration={500}>CONTACT</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;
