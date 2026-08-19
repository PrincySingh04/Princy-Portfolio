import React from "react";
import { whyHireMe } from "../data/siteData.js";

function WhyHireMe() {
  return (
    <section className="section">
      <div className="section-inner">
        <div className="section-header">
          <p className="eyebrow">— Why Hire Me</p>
          <h2 className="section-title">A developer who ships and keeps learning.</h2>
          <p className="section-subtitle">
            I approach problems methodically, adapt quickly to new stacks, and treat
            continuous learning as part of the job — not an extra.
          </p>
        </div>

        <div className="why-grid">
          {whyHireMe.map((item) =>
            item.highlight ? (
              <div key={item.title} className="why-card why-card-highlight">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ) : (
              <div key={item.title} className="glass-card glow-card why-card">
                <h3>{item.title}</h3>
                <p className="card-sub">{item.description}</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default WhyHireMe;
