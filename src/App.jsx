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
// element 
import { Element } from "react-scroll"

function App() {


  return (

    <div className="bg-gray-800">
      <Navbar />
      <ScrollTop />
      <Home />
      <Video />
      <About />
      <Project />
      <Portfolio />
      <Element name="kontakt">
        <Contact />
      </Element>
      <Footer />


    </div>

  )
}

export default App
