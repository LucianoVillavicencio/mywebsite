import React, { useState, useEffect } from 'react';
import { FolderGit2, CheckCircle } from 'lucide-react';

export const ProjectDashboard: React.FC = () => {
  const [barHeights, setBarHeights] = useState([60, 85, 45, 95, 70]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBarHeights([
        Math.floor(Math.random() * 40) + 55,
        Math.floor(Math.random() * 30) + 70,
        Math.floor(Math.random() * 50) + 40,
        Math.floor(Math.random() * 25) + 75,
        Math.floor(Math.random() * 35) + 60,
      ]);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="proyectos" className="section">
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-title">
            <FolderGit2 size={26} /> Proyectos Destacados
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="card project-card grid grid-2">
          <div className="project-info">
            <span className="project-year">2026 · Proyecto de Cátedra (Desarrollo de Software - UTN)</span>
            <h3 className="project-title">Sistema de Gestión Integrada para Gimnasio</h3>
            <p className="project-description">
              Aplicación web integral cliente-servidor para la administración operativa, control de membresías, asistencias y cobros de un centro deportivo. Desarrollado con estándares de alta disponibilidad y diseño modular.
            </p>
            <ul className="project-highlights">
              <li>
                <CheckCircle size={16} /> Diseñado e implementado con arquitectura cliente-servidor desacoplada.
              </li>
              <li>
                <CheckCircle size={16} /> Interfaz intuitiva y adaptativa para recepción, entrenadores y usuarios.
              </li>
              <li>
                <CheckCircle size={16} /> API REST estructurada con persistencia relacional en MySQL.
              </li>
            </ul>
            <div className="tech-tags">
              <span className="tag">React</span>
              <span className="tag">TypeScript</span>
              <span className="tag">Vite</span>
              <span className="tag">Node.js</span>
              <span className="tag">Express</span>
              <span className="tag">MySQL</span>
              <span className="tag">API REST</span>
            </div>
          </div>

          <div className="project-preview">
            <div className="preview-mockup">
              <div className="mockup-header">
                <span className="mockup-dot"></span>
                <span className="mockup-dot"></span>
                <span className="mockup-dot"></span>
                <span>Gym Management Dashboard</span>
              </div>
              <div className="mockup-body">
                <div className="mockup-stat-grid">
                  <div className="stat-card">
                    <span className="num">340+</span>
                    <span className="lbl">Socios Activos</span>
                  </div>
                  <div className="stat-card">
                    <span className="num">98%</span>
                    <span className="lbl">Asistencia Promedio</span>
                  </div>
                </div>
                <div className="mockup-chart-placeholder">
                  {barHeights.map((h, i) => (
                    <div
                      key={i}
                      className="chart-bar"
                      style={{ height: `${h}%` }}
                      title={`Actividad: ${h}%`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
