import { HashLink as Link } from "react-router-hash-link"
import logo from "../../assets/logo/logo.png";
import "./navbar.scss"

function Navbar(){

    return(
        <nav className="navbar">
            <div className="navbar__logo">
                <Link smooth to="/#home"><img src={logo} alt="Logo Caroline Protat"></img></Link>
            </div>
            <div className="navbar__menu">
                <ul className="navbar__menu__list">
                    <li className="navbar__menu__list list">
                        <Link smooth to="/#home" className="navbar__menu__list link">ACCUEIL</Link>
                    </li>
                    <li className="navbar__menu__list list">
                        <Link smooth to="/#presentation" className="navbar__menu__list link">PRÉSENTATION</Link>
                    </li>
                    <li className="navbar__menu__list list">
                        <Link smooth to="/#portfolio" className="navbar__menu__list link">PORTFOLIO</Link>
                    </li>
                    <li className="navbar__menu__list list">
                        <Link smooth to="/#contact" className="navbar__menu__list link">CONTACT</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
