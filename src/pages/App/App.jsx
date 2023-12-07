import Navbar from "../../components/Navbar/Navbar";
import Home from "../../components/Home/Home";
import Presentation from "../../components/Presentation/Presentation";
import Portfolio from "../../components/Portfolio/Portfolio";
import Contact from "../../components/Contact/Contact";
import './App.scss';

function App() {
  return(
    <>
      <header>
        <Navbar/>
      </header>
      <main>
        <Home/>
        <Presentation/>
        <Portfolio/>
        <Contact/>
      </main>
    </>
  )
}

export default App;
