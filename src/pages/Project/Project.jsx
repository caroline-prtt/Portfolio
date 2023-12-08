import { useParams } from "react-router-dom";
import data from "../../data.json";
import ErrorPage from "../ErrorPage/ErrorPage";

function Project() {
    
    const {id} = useParams();
    
    const project = data.find(item => item.id === id);

    if (!project){
        return <ErrorPage/>
    }

    return(
        <p>Bienvenue sur la page du projet numéro {id}</p>
    )
}
export default Project;