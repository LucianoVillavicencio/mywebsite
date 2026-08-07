import React from 'react';
import { UserCheck } from 'lucide-react';

export const Profile: React.FC = () => {
  return (
    <section id="perfil" className="section">
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-title">
            <UserCheck size={26} /> Perfil Profesional
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="card glass-card profile-card">
          <p className="profile-text">
            Estudiante de <strong>Ingeniería en Sistemas de Información (UTN)</strong> que combina de forma equilibrada el <strong>Desarrollo de Software Full-Stack</strong> con amplia experiencia práctica en <strong>Soporte Técnico, Infraestructura de Hardware y Redes</strong>. Certificado como <strong>Especialista en Reparación de PC, Redes y WIFI</strong>, integro la lógica algorítmica y estructuras de datos con el diagnóstico técnico directo.
          </p>
          <p className="profile-text">
            Apasionado por la resolución de problemas (participante activo en competencias algorítmicas ICPC) y el diseño de aplicaciones modernas (Python, JavaScript/TypeScript, React, Node.js, SQL), con capacidad para resolver incidencias complejas tanto a nivel de código como de infraestructura física y lógica.
          </p>
        </div>
      </div>
    </section>
  );
};
