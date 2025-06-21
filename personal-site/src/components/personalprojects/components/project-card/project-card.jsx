import "./project-card.css";

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="icon-wrapper">
        <img src={project.icon} alt="" className="icon" />
      </div>
      <h3>{project.title}</h3>
    </div>
  );
}
