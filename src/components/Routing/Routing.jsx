import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import App from "../../pages/App/App";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";

function Routing () {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<App/>}></Route>
                <Route path="*" element={<ErrorPage/>}></Route>
            </Routes>
        </Router>
    )  
}

export default Routing;
