import React from 'react';
import { MapPin, Mail, Send } from 'lucide-react';

export const Hero: React.FC = () => {
  const profileJson = `{
  "nombre": "Luciano Villavicencio",
  "carrera": "Ingeniería en Sistemas (UTN)",
  "enfoque": "Desarrollo de Software & Servicios IT",
  "certificacion": "Especialista en PC, Redes & WIFI",
  "stack_dev": ["React", "TypeScript", "Node.js", "Python", "SQL"],
  "ubicacion": "Rosario, Argentina",
  "intereses": [
    "IA / LLMs", 
    "Automatizaciones", 
    "IoT", 
    "Algoritmos (ICPC)"
  ],
  "idiomas": {
    "es": "Nativo",
    "en": "B2 (Cambridge First)",
    "de": "A1"
  }
}`;

  return (
    <section id="hero" className="hero-section">
      <div className="container grid hero-grid">
        <div className="hero-content">
          <div className="badge">
            <span className="pulse-dot"></span> Disponible para nuevos desafíos técnicos
          </div>
          <h1 className="hero-name">
            Luciano <span className="gradient-text">Villavicencio</span>
          </h1>
          <h2 className="hero-title">
            Estudiante de Ingeniería en Sistemas | Software Developer & IT Specialist
          </h2>
          <p className="hero-subtitle">
            Desarrollo Full-Stack (React / Node / TS / Python) · Soporte Técnico · Hardware · Redes
          </p>

          <div className="hero-contact-info">
            <span className="info-item">
              <MapPin size={16} /> Rosario, Argentina
            </span>
            <a href="mailto:lucianorvillavicencio@gmail.com" className="info-item">
              <Mail size={16} /> lucianorvillavicencio@gmail.com
            </a>
          </div>

          <div className="hero-buttons">
            <a href="#contacto" className="btn-primary">
              <Send size={16} /> Contactar
            </a>
            <a
              href="https://github.com/LucianoVillavicencio"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <i className="fa-brands fa-github"></i> GitHub
            </a>
            <a
              href="https://linkedin.com/in/lucianovillavicencio/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <i className="fa-brands fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="code-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
            <span className="code-title">luciano_profile.json</span>
          </div>
          <pre className="code-block">
            <code>
              {profileJson.split('\n').map((line, idx) => {
                // Syntax highlighting helper
                if (line.includes(':')) {
                  const [key, ...rest] = line.split(':');
                  const val = rest.join(':');
                  return (
                    <div key={idx}>
                      <span className="key">{key}</span>:
                      <span className="string">{val}</span>
                    </div>
                  );
                }
                return <div key={idx}>{line}</div>;
              })}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
};
