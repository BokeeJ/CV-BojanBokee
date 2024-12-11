import Home from "./Pages/Home"
import Navbar from "./Components/Navbar"
import Project from "./Pages/Project"
import About from "./Pages/About"
import Portfolio from "./Pages/Portfolio"
import Contact from "./Pages/Contact"
import Video from "./Pages/Video"
import './App.css';
import Footer from "./Components/Footer"
import ScrollTop from "./Services/ScrollTop"
import Prevod from "./Services/Prevod"
// element 
import { Element } from "react-scroll"

// prevod 
import './i18n';

function App() {


  return (

    <div className="bg-black">
      <Prevod />
      <Navbar />
      <ScrollTop />
      <Element name="home">
        <Home />
      </Element>
      <Video />
      <Element name="projekti">
        <Project />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="portfolio">
        <Portfolio />
      </Element>
      <Element name="kontakt">
        <Contact />
      </Element>
      <Footer />


    </div>

  )
}

export default App
