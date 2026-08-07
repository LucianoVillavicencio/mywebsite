import React from 'react';
import { Code2, Terminal, Wrench, Languages, Compass, Brain, Bot, Cog, Wifi } from 'lucide-react';

export const SkillsGrid: React.FC = () => {
  return (
    <section id="habilidades" className="section">
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-title">
            <Code2 size={26} /> Habilidades Técnicas & Tecnologías
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="skills-wrapper grid grid-2">
          {/* Lenguajes & Dev */}
          <div className="card skill-category">
            <h3>
              <Terminal size={20} /> Lenguajes de Programación
            </h3>
            <div className="skills-chips">
              <span className="chip main">
                <i className="fa-brands fa-python"></i> Python
              </span>
              <span className="chip main">
                <i className="fa-brands fa-js"></i> JavaScript
              </span>
              <span className="chip main">
                <i className="fa-brands fa-square-js"></i> TypeScript
              </span>
              <span className="chip main">
                <i className="fa-solid fa-database"></i> SQL
              </span>
              <span className="chip">
                <i className="fa-brands fa-html5"></i> HTML5 / CSS3
              </span>
            </div>

            <h3 className="sub-h3">
              <Code2 size={20} /> Frameworks & Herramientas
            </h3>
            <div className="skills-chips">
              <span className="chip main">
                <i className="fa-brands fa-react"></i> React
              </span>
              <span className="chip main">
                <i className="fa-brands fa-node-js"></i> Node.js
              </span>
              <span className="chip main">
                <i className="fa-solid fa-server"></i> Express
              </span>
              <span className="chip">
                <i className="fa-solid fa-bolt"></i> Vite
              </span>
              <span className="chip">
                <i className="fa-solid fa-gears"></i> APIs REST
              </span>
              <span className="chip">
                <i className="fa-solid fa-database"></i> MySQL
              </span>
            </div>
          </div>

          {/* Hardware & Infra */}
          <div className="card skill-category">
            <h3>
              <Wrench size={20} /> Hardware & Infraestructura
            </h3>
            <div className="skills-chips">
              <span className="chip main">
                <i className="fa-solid fa-desktop"></i> Ensamble & Desarme de PCs
              </span>
              <span className="chip">
                <i className="fa-solid fa-bolt"></i> Soldadura Básica
              </span>
              <span className="chip">
                <i className="fa-solid fa-keyboard"></i> Periféricos & Testing
              </span>
              <span className="chip main">
                <i className="fa-brands fa-windows"></i> Windows OS
              </span>
              <span className="chip main">
                <i className="fa-brands fa-linux"></i> Distribuciones Linux
              </span>
              <span className="chip">
                <i className="fa-solid fa-box"></i> Virtualización
              </span>
              <span className="chip">
                <i className="fa-solid fa-stethoscope"></i> Tools de Diagnóstico
              </span>
            </div>

            <h3 className="sub-h3">
              <Languages size={20} /> Idiomas & Comunicación
            </h3>
            <div className="skills-chips">
              <span className="chip main">Español (Nativo)</span>
              <span className="chip main">Inglés (B2 – Cambridge First)</span>
              <span className="chip">Alemán (A1)</span>
            </div>
          </div>
        </div>

        {/* Áreas de Interés */}
        <div className="card interests-card margin-top">
          <h3>
            <Compass size={22} /> Áreas de Interés & Innovación
          </h3>
          <div className="interests-grid">
            <div className="interest-item">
              <Brain size={20} /> Inteligencia Artificial
            </div>
            <div className="interest-item">
              <Bot size={20} /> Modelos de Lenguaje (LLMs)
            </div>
            <div className="interest-item">
              <Cog size={20} /> Automatización de Procesos
            </div>
            <div className="interest-item">
              <Wifi size={20} /> Internet de las Cosas (IoT)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
