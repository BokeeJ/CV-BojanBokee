import Home from "./Pages/Home"
import Navbar from "./Components/Navbar"
import Project from "./Pages/Project"
import About from "./Pages/About"
import Portfolio from "./Pages/Portfolio"
import Contact from "./Pages/Contact"
import Video from "./Pages/Video"
import './App.css';
import Footer from "./Components/Footer"

function App() {


  return (

    <div className="bg-gray-800">
      <Navbar />
      <Home />
      <Video />
      <About />
      <Project />
      <Portfolio />
      <Contact />
      <Footer />


    </div>

  )
}

export default App
