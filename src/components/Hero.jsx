import React from "react";
import { Download, ArrowRight, Mail } from "lucide-react";
import { profile } from "../data/siteData.js";
import { useTypewriter } from "../hooks/useTypewriter.js";

function Hero() {
  const typedText = useTypewriter(profile.titles);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <span className="hero-badge">
            <span className="hero-badge-dot" />
            {profile.badge}
          </span>

          <h1 className="hero-title">
            <span className="hero-title-white">{profile.firstName} </span>
            <span className="hero-title-accent">{profile.lastName}</span>
          </h1>

          <p className="hero-typewriter">
            {typedText}
            <span className="hero-cursor" />
          </p>

          <p className="hero-intro">{profile.intro}</p>

          <div className="hero-actions">
            <a href={profile.resumeFile} download className="btn btn-primary">
              <Download size={16} /> Download Resume
            </a>
            <button className="btn btn-outline" onClick={() => scrollToSection("projects")}>
              View Projects <ArrowRight size={16} />
            </button>
            <button className="btn btn-outline" onClick={() => scrollToSection("contact")}>
              <Mail size={16} /> Contact Me
            </button>
          </div>
        </div>

        <div className="hero-photo-wrap">
          <div className="hero-photo-glow" />
          <div className="hero-photo-frame">
            <img src={profile.profileImage} alt={profile.name} className="hero-photo" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
