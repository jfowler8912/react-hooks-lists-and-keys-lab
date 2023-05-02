import React from "react";

function ProjectItem({ name, about, technologies }) {
  const technologiesMapped = technologies.map((technology) => {
    return <span>{technology}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologiesMapped}
      </div>
    </div>
  );
}

export default ProjectItem;
