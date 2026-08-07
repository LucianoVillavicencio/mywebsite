import React from 'react';
import { Cpu, Network, Laptop, Code2 } from 'lucide-react';

export const Specialization: React.FC = () => {
  return (
    <section id="experiencia" className="section">
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-title">
            <Cpu size={26} /> Áreas de Especialización Técnico-Profesional
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="grid grid-2" style={{ gap: '1.5rem' }}>
          {/* Software Development Pillar */}
          <div className="card feature-card">
            <div className="feature-icon">
              <Code2 size={24} />
            </div>
            <h3>Desarrollo de Software & Algoritmos</h3>
            <ul>
              <li>Desarrollo Full-Stack con JavaScript, TypeScript, React, Node.js y Express.</li>
              <li>Diseño e implementación de APIs RESTful con persistencia en MySQL/SQL.</li>
              <li>Resolución de problemas algorítmicos y estructuras de datos avanzadas (ICPC).</li>
              <li>Automatización de procesos con scripts de Python y control de versiones con Git.</li>
            </ul>
          </div>

          {/* Hardware Pillar */}
          <div className="card feature-card">
            <div className="feature-icon">
              <Cpu size={24} />
            </div>
            <h3>Armado & Mantenimiento de Hardware</h3>
            <ul>
              <li>Ensamble de equipos de alto rendimiento garantizando flujo de aire (airflow) óptimo.</li>
              <li>Mantenimiento preventivo y correctivo de componentes informáticos críticos.</li>
              <li>Reemplazo de pasta térmica y thermal pads en GPUs y procesadores de alta gama.</li>
              <li>Diagnóstico preciso y resolución de fallas críticas de hardware.</li>
            </ul>
          </div>

          {/* Networking Pillar */}
          <div className="card feature-card">
            <div className="feature-icon">
              <Network size={24} />
            </div>
            <h3>Configuración de Redes & Conectividad</h3>
            <ul>
              <li>Instalación y administración de redes LAN/WLAN domésticas y corporativas.</li>
              <li>Configuración de routers, switches, puntos de acceso y periféricos de red.</li>
              <li>Cableado estructurado y verificación de continuidad y ancho de banda.</li>
            </ul>
          </div>

          {/* IT Support Pillar */}
          <div className="card feature-card">
            <div className="feature-icon">
              <Laptop size={24} />
            </div>
            <h3>Soporte Técnico & Sistemas Operativos</h3>
            <ul>
              <li>Instalación, optimización y tuning de sistemas Windows y distribuciones Linux.</li>
              <li>Desinfección profunda de malware, recuperación de datos y backups de seguridad.</li>
              <li>Asistencia técnica presencial/remota y asesoramiento preventivo.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
