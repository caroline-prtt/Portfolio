import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Presentation from "../Presentation/Presentation";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
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
