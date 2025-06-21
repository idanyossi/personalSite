import "./projects.css";
import ProjectCard from "./components/project-card/project-card.jsx";

export default function Projects() {
  return (
    <>
      <h1 className="projects-title">Projects</h1>
      <div className="project-wrapper">
        <ProjectCard
          project={{
            title: "Twine Mobile App",
            icon: "./twine.png",
          }}
        />
        <ProjectCard
          project={{
            title: "Personal Portfolio",
            icon: "./goofyphoto.jpg",
          }}
        />
      </div>
    </>
  );
}
