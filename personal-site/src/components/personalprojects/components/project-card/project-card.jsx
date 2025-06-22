import { useState } from "react";
import "./project-card.css";

export default function ProjectCard({ project }) {
  const [Expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!Expanded);
  };
  const handleClose = () => {
    setExpanded(false);
  };
  return (
    <>
      <div className="project-card" onClick={handleClick}>
        <div className="icon-wrapper">
          <img src={project.icon} alt="" className="icon" />
        </div>
        <h3>{project.title}</h3>
      </div>
      {Expanded && (
        <div className="expanded-card" onClick={handleClose}>
          <div className="expanded-card-content">
            <button className="close">x</button>
            <div>
              <img src={project.icon} alt="" className="icon" />
            </div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        </div>
      )}
    </>
  );
}
