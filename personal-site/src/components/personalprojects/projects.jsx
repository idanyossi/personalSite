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
            description:
              "a mobile app for job searching, built with React Native and using mongoDB and FastAPI for the backend. Meant to make job searching easier and more streamlined with less bloat",
          }}
        />
        <ProjectCard
          project={{
            title: "Personal Portfolio",
            icon: "./goofyphoto.jpg",
            description:
              "a personal portfolio website built with React, showcasing my skills and projects. It includes a responsive design and smooth navigation for an optimal user experience.",
          }}
        />
      </div>
    </>
  );
}
