import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { navLinks, profile } from "../data/siteData.js";

function Navbar({ isLight, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    navLinks.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <nav className="navbar-inner">
        <button className="navbar-brand" onClick={() => scrollToSection("home")}>
          <span className="navbar-logo">PS</span>
          <span className="navbar-name">{profile.name}</span>
        </button>

        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                className={`navbar-link ${activeSection === link.id ? "navbar-link-active" : ""}`}
                onClick={() => scrollToSection(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <button className="theme-toggle" onClick={onToggleTheme} aria-label="Toggle theme">
            {isLight ? <Moon size={16} /> : <Sun size={16} />}
          </button>
          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  className={activeSection === link.id ? "mobile-link-active" : "mobile-link"}
                  onClick={() => scrollToSection(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
