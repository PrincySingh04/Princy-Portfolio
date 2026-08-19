import React, { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { contact } from "../data/siteData.js";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");

  const updateField = (field) => (event) => {
    setForm({ ...form, [field]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          subject: form.subject || `Portfolio message from ${form.name}`,
          message: form.message,
        }),
      });

      const result = await response.json();
      if (!result.success) throw new Error("Request failed");

      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="section">
      <div className="section-inner">
        <div className="section-header">
          <p className="eyebrow">— Contact</p>
          <h2 className="section-title">Any type of query & discussion.</h2>
          <p className="section-subtitle">
            Open to full-time roles, internships, and freelance projects.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <a href={`mailto:${contact.email}`} className="contact-item">
              <Mail size={19} className="icon-accent" />
              <span>{contact.email}</span>
            </a>
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="contact-item">
              <Phone size={19} className="icon-accent" />
              <span>{contact.phone}</span>
            </a>
            <div className="contact-item">
              <MapPin size={19} className="icon-accent" />
              <span>{contact.location}</span>
            </div>

            <div className="social-row">
              <a href={contact.githubUrl} target="_blank" rel="noreferrer" className="social-icon">
                <Github size={18} />
              </a>
              <a href={contact.linkedinUrl} target="_blank" rel="noreferrer" className="social-icon">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div className="glass-card glow-card contact-form-card">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-field">
                  <label>Name</label>
                  <input type="text" value={form.name} onChange={updateField("name")} placeholder="Your name" />
                </div>
                <div className="form-field">
                  <label>Email</label>
                  <input type="email" value={form.email} onChange={updateField("email")} placeholder="you@example.com" />
                </div>
              </div>

              <div className="form-field">
                <label>Subject</label>
                <input type="text" value={form.subject} onChange={updateField("subject")} placeholder="What's this about?" />
              </div>

              <div className="form-field">
                <label>Message</label>
                <textarea rows={4} value={form.message} onChange={updateField("message")} placeholder="Tell me about your project..." />
              </div>

              <button type="submit" className="btn btn-primary btn-full" disabled={status === "sending"}>
                {status === "sending" && "Sending..."}
                {status === "sent" && "Message Sent!"}
                {(status === "idle" || status === "error") && "Send Message"}
              </button>

              {status === "error" && (
                <p className="form-error">
                  Please fill in your name, email, and message, then try again.
                </p>
              )}

              {status === "sent" && (
                <p className="form-hint">
                  Thanks! Your message was sent to {contact.email}.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
