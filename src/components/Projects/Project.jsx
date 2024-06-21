import React from "react";
import "./project.css";
import { PROJECTS } from "./projects.js";
import ProjectTab from "./ProjectTab.jsx";

export default function Project() {
  return (
    <section id="project">
      <h5>Study Purpose developed projects</h5>
      <h2>My Projects</h2>

      <div className="container project_container">
        <div className="project_content">
          {PROJECTS.map(({ id, name, description, techPoints, url }) => {
            return (
              <ProjectTab
                id={id}
                name={name}
                description={description}
                techPoints={techPoints}
                url={url}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
