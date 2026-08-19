import React from "react";
import { Code2 } from "lucide-react";
import { services } from "../data/siteData.js";

function Services() {
  return (
    <section id="services" className="section">
      <div className="section-inner">
        <div className="section-header">
          <p className="eyebrow">— Services</p>
          <h2 className="section-title">What I Do</h2>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.title} className="glass-card glow-card service-card">
              <div className="service-icon-box">
                <Code2 size={20} className="icon-accent" />
              </div>
              <h3>{service.title}</h3>
              <p className="card-sub">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
