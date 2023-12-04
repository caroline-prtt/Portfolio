import logo from "../../assets/logo.png"
import "./header.scss"


function Header() {
  return(
    <header>
        <nav>
            <div>
                <img src={logo} alt="Logo Caroline Protat"></img>
            </div>
        </nav>
    </header>
  )
}

export default Header;