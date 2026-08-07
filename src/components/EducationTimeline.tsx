import React from 'react';
import { GraduationCap, MapPin, Award, BookOpen } from 'lucide-react';

export const EducationTimeline: React.FC = () => {
  return (
    <section id="educacion" className="section">
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-title">
            <GraduationCap size={26} /> Formación Académica <br className="mobile-break" /> & Certificaciones
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="timeline">
          {/* UTN */}
          <div className="timeline-item">
            <div className="timeline-dot">
              <GraduationCap size={22} />
            </div>
            <div className="timeline-content card">
              <div className="timeline-header">
                <div>
                  <h3>Universidad Tecnológica Nacional (UTN)</h3>
                  <h4>Ingeniería en Sistemas de Información</h4>
                </div>
                <span className="timeline-date">2023 - Actualidad</span>
              </div>
              <p className="timeline-location">
                <MapPin size={14} /> Rosario, Argentina
              </p>
              <div className="progress-info">
                <span>
                  3.º año en curso — <strong>15 de 36 materias aprobadas</strong>
                </span>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '42%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* FAGDUT */}
          <div className="timeline-item">
            <div className="timeline-dot">
              <Award size={22} />
            </div>
            <div className="timeline-content card">
              <div className="timeline-header">
                <div>
                  <h3>Instituto de Capacitación FAGDUT</h3>
                  <h4>Especialista en Reparación de PC, Redes y WIFI</h4>
                </div>
                <span className="timeline-date">2015</span>
              </div>
              <p className="timeline-location">
                <MapPin size={14} /> Rosario, Argentina
              </p>
              <p className="timeline-desc">
                <BookOpen size={16} /> Certificación técnica obtenida tempranamente a los 13 años, marcando el inicio de mi trayectoria profesional e interés profundo en el diagnóstico y mantenimiento de infraestructura técnica.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
