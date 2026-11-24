import About from "./sections/About";
import Contact from "./sections/Contact";
import Experiences from "./sections/Experiences";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar/>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experiences />
      <Contact />
      {/* about */}
      {/* projects */}
      {/* experience */}
      {/* contact */}
      {/* footer */}
    </div>
  )
}

export default App

