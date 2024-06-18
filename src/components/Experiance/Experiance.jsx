import React from "react";
import "./experiance.css";
import { SKILL } from "./Skill.js";
import ExperianceTab from "./ExperianceTab.jsx";

const Experiance = () => {
  return (
    <section id="experiance">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experiance_container">
        <div className="experiance_frontend">
          <h3>Frontend Development</h3>
          <div className="experiance_content">
            {SKILL.map(({ tech, level, stack }) => {
              return (
                stack === "FE" && <ExperianceTab level={level} tech={tech} />
              );
            })}
          </div>
        </div>
        {/* END OF FRONTEND */}
        <div className="experiance_backend">
          <h3>Backend Development</h3>
          <div className="experiance_content">
            {SKILL.map(({ tech, level, stack }) => {
              return (
                stack === "BE" && <ExperianceTab level={level} tech={tech} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiance;
