import "./App.css";
import { useRef, useState, useEffect } from "react";
import About from "./components/about/about.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import Projects from "./components/personalprojects/projects.jsx";

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "0px",
      threshold: 0.8,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.getAttribute("data-section"));
        }
      });
    }, option);

    const sections = [aboutRef.current, projectsRef.current];
    sections.forEach((sec) => sec && observer.observe(sec));

    return () => sections.forEach((sec) => sec && observer.unobserve(sec));
  }, []);

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
      <section ref={aboutRef} data-section="about">
        <About />
      </section>
      <section ref={projectsRef} data-section="projects">
        <Projects />
      </section>
    </div>
  );
}

export default App;
