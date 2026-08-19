import React from "react";
import { experience } from "../data/siteData.js";

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-inner">
        <div className="section-header">
          <p className="eyebrow">— Experience</p>
          <h2 className="section-title">Freelance Experience</h2>
        </div>

        <div className="glass-card glow-card experience-card">
          <h3>{experience.role}</h3>
          <p className="card-sub experience-mode">{experience.mode}</p>
          <ol className="experience-list">
            {experience.items.map((item, index) => (
              <li key={item}>
                <span className="experience-number">{index + 1}</span>
                <span className="card-sub">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Experience;
