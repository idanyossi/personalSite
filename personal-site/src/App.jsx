import "./App.css";
import { useRef, useState } from "react";
import About from "./components/about/about.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import Projects from "./components/personalprojects/projects.jsx";

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const [activeSection, setActiveSection] = useState("about");

  const handleNavClick = (section) => {
    setActiveSection(section);
    if (section === "about") {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "projects") {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="app-lineup">
      <Navbar activeSection={activeSection} onNavClick={handleNavClick} />
      <section ref={aboutRef}>
        <About />
      </section>
      <section ref={projectsRef}>
        <Projects />
      </section>
    </div>
  );
}

export default App;
