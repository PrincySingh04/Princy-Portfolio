import React from "react";
import { GraduationCap, Target } from "lucide-react";
import { about } from "../data/siteData.js";
import { iconMap } from "../data/iconMap.js";

function About() {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <p className="eyebrow">— About</p>
        <h2 className="section-title section-title-left">{about.heading}</h2>

        <div className="about-grid">
          <div>
            <p className="about-bio">{about.bio}</p>

            <div className="about-chips">
              {about.chips.map((chip) => {
                const Icon = iconMap[chip.icon];
                return (
                  <div key={chip.label} className="about-chip">
                    <Icon size={17} className="icon-accent" />
                    <span>{chip.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="about-cards">
            <div className="glass-card">
              <div className="card-heading">
                <GraduationCap size={18} className="icon-accent" />
                <h3>Education</h3>
              </div>
              <p className="card-strong">{about.education.degree}</p>
              <p className="card-sub">{about.education.university}</p>
              <p className="card-accent-text">{about.education.year}</p>
            </div>

            <div className="glass-card">
              <div className="card-heading">
                <Target size={18} className="icon-accent" />
                <h3>Career Goal</h3>
              </div>
              <p className="card-sub">{about.careerGoal}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
