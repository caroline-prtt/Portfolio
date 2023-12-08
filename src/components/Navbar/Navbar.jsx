import { HashLink as Link } from "react-router-hash-link"
import logo from "../../assets/logo.png";
import "./navbar.scss"

function Navbar(){

    return(
        <nav className="navbar">
            <div className="navbar__logo">
                <Link smooth to="/#home"><img src={logo} alt="Logo Caroline Protat"></img></Link>
            </div>
            <div className="navbar__menu">
                <ul className="navbar__menu__list">
                    <li className="navbar__menu__list__link"><Link smooth to="/#home">ACCUEIL</Link></li>
                    <li className="navbar__menu__list__link"><Link smooth to="/#presentation">PRÉSENTATION</Link></li>
                    <li className="navbar__menu__list__link"><Link smooth to="/#portfolio">PORTFOLIO</Link></li>
                    <li className="navbar__menu__list__link"><Link smooth to="/#contact">CONTACT</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
