import React from "react";
import { Github, ArrowRight } from "lucide-react";
import { projects } from "../data/siteData.js";

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <div className="section-header">
          <p className="eyebrow">— Portfolio</p>
          <h2 className="section-title">Selected projects.</h2>
          <p className="section-subtitle">
            Products and systems built end to end — from schema to interface.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.title} className="glass-card glow-card project-card">
              <div className="project-thumb">
                <span>{project.title}</span>
                {project.featured && <span className="featured-badge">Featured</span>}
              </div>

              <div className="project-body">
                <h3>{project.title}</h3>

                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="project-highlights">
                  {project.highlights.map((point) => (
                    <li key={point}>
                      <span className="bullet-dot" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="project-links">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer">
                    <Github size={16} /> GitHub
                  </a>
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="project-link-accent">
                      <ArrowRight size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
