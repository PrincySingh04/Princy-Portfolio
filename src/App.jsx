import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Services from "./components/Services.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import WhyHireMe from "./components/WhyHireMe.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  const [isLight, setIsLight] = useState(false);

  return (
    <div className={isLight ? "app light" : "app"}>
      <div className="bg-grid" />
      <div className="bg-glow bg-glow-cyan" />
      <div className="bg-glow bg-glow-blue" />

      <Navbar isLight={isLight} onToggleTheme={() => setIsLight((v) => !v)} />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Experience />
      <WhyHireMe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
