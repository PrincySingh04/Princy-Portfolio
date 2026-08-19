import React from "react";
import { skills } from "../data/siteData.js";
import { iconMap } from "../data/iconMap.js";

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <div className="section-header">
          <p className="eyebrow">— Skills</p>
          <h2 className="section-title">The stack I build with.</h2>
          <p className="section-subtitle">
            From interface to database, with clean architecture in between.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => {
            const Icon = iconMap[skill.icon];
            return (
              <div key={skill.title} className="glass-card glow-card">
                <div className="skill-header">
                  <div className="skill-icon-box">
                    <Icon size={18} className="icon-accent" />
                  </div>
                  <h3>{skill.title}</h3>
                </div>

                <div className="tag-row">
                  {skill.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="proficiency-row">
                  <span>Proficiency</span>
                  <span className="proficiency-value">{skill.proficiency}%</span>
                </div>
                <div className="proficiency-track">
                  <div
                    className="proficiency-fill"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
