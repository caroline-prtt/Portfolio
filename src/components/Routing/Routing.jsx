import {Routes, Route} from "react-router-dom";
import App from "../../pages/App/App";
import Project from "../../pages/Project/Project";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";

function Routing () {
    return(
        <Routes>
            <Route path="/" element={<App/>}></Route>
            <Route path="/project/:id" element={<Project/>}></Route>
            <Route path="*" element={<ErrorPage/>}></Route>
        </Routes>
    )  
}

export default Routing;
