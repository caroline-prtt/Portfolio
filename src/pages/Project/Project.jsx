import { useParams } from "react-router-dom";
import data from "../../data.json";
import ErrorPage from "../ErrorPage/ErrorPage";
import './project.scss'

function Project() {
    
    const {id} = useParams();
    
    const project = data.find(item => item.id === id);

    if (!project){
        return <ErrorPage/>
    }

    return(
        <div className="project">
            <div>
                <p>Bienvenue sur la page du projet numéro {id}</p>
            </div>
        </div>
        
    )
}

export default Project;