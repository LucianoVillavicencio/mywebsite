import React from 'react';
import { Trophy, CheckCircle2, Code } from 'lucide-react';

export const ICPCSection: React.FC = () => {
  return (
    <section id="actividades" className="section">
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-title">
            <Trophy size={26} /> Competencias & Algoritmos (ICPC)
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="card glass-card icpc-card">
          <div className="icpc-header">
            <div className="icpc-icon">
              <Code size={30} />
            </div>
            <div>
              <h3>ICPC – International Collegiate Programming Contest</h3>
              <span className="badge-gold">
                Participante 2025 – Actualidad · UTN Rosario
              </span>
            </div>
          </div>
          <ul className="icpc-list">
            <li>
              <CheckCircle2 size={18} />
              <span>
                Participante activo en la competencia de programación universitaria más antigua y prestigiosa del mundo, resolviendo problemas algorítmicos complejos bajo estricta presión de tiempo.
              </span>
            </li>
            <li>
              <CheckCircle2 size={18} />
              <span>
                Aplicación práctica de optimización matemática, estructuras de datos avanzadas y diseño de algoritmos de alta eficiencia en equipo.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
