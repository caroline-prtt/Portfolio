import { Link } from "react-router-dom";
import "./errorPage.scss"

function ErrorPage (){
    return (
       <section className="error">
            <div className="error__404">
                <h2 className="error__404 dark-green">404</h2>
                <h2 className="error__404 light-green">404</h2>
                <h2 className="error__404 light-yellow">404</h2>
            </div>
            <p>La page que vous demandez n'existe pas.</p>
            <Link to="/#home" className="error__returnLink">Retourner sur la page d'accueil</Link>
       </section>
    )
}

export default ErrorPage;