import React from "react";
import { Github, Linkedin } from "lucide-react";
import { contact, footerText } from "../data/siteData.js";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>{footerText}</p>
        <div className="social-row">
          <a href={contact.githubUrl} target="_blank" rel="noreferrer">
            <Github size={16} />
          </a>
          <a href={contact.linkedinUrl} target="_blank" rel="noreferrer">
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
