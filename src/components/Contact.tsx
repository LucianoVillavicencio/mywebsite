import React, { useState } from 'react';
import { Mail, MapPin, Copy, Send, Loader2, CheckCircle2 } from 'lucide-react';

interface ContactProps {
  onCopy: (text: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onCopy }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmittedSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const nombre = formData.get('Nombre') as string;
    const email = formData.get('Email') as string;
    const mensaje = formData.get('Mensaje') as string;

    try {
      const response = await fetch('https://formsubmit.co/ajax/lucianorvillavicencio@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `Nuevo mensaje de portfolio - ${nombre}`,
          _template: 'table',
          Nombre: nombre,
          Email: email,
          Mensaje: mensaje
        })
      });

      if (response.ok) {
        setSubmittedSuccess(true);
        form.reset();
        onCopy('¡Mensaje enviado directamente a mi correo! Te responderé pronto.');
      } else {
        throw new Error('Error en respuesta del servidor');
      }
    } catch (err) {
      console.error('Error al enviar con FormSubmit: ', err);
      // Fallback: abrir mailto si falla la red
      const mailtoUrl = `mailto:lucianorvillavicencio@gmail.com?subject=Consulta%20desde%20Portfolio%20-%20${encodeURIComponent(
        nombre
      )}&body=${encodeURIComponent(`De: ${nombre} (${email})\n\nMensaje:\n${mensaje}`)}`;
      window.location.href = mailtoUrl;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="section">
      <div className="container">
        <div className="section-title-wrap">
          <h2 className="section-title">
            <Mail size={26} /> Contacto & Redes
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="grid grid-2">
          <div className="card contact-info-card">
            <h3>¿Hablamos sobre un proyecto o vacante?</h3>
            <p>
              Estoy disponible para posiciones en desarrollo de software, soporte técnico especializado, administración de infraestructura o proyectos desafiantes.
            </p>

            <div className="contact-methods">
              <div className="contact-item">
                <div className="icon-wrap">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="lbl">Email Directo</span>
                  <a href="mailto:lucianorvillavicencio@gmail.com" className="val">
                    lucianorvillavicencio@gmail.com
                  </a>
                </div>
                <button
                  className="copy-btn"
                  onClick={() => onCopy('lucianorvillavicencio@gmail.com')}
                  title="Copiar email al portapapeles"
                >
                  <Copy size={16} />
                </button>
              </div>

              <div className="contact-item">
                <div className="icon-wrap">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="lbl">Ubicación</span>
                  <span className="val">Rosario, Santa Fe, Argentina</span>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a
                href="https://linkedin.com/in/lucianovillavicencio/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                <i className="fa-brands fa-linkedin"></i> LinkedIn
              </a>
              <a
                href="https://github.com/LucianoVillavicencio"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                <i className="fa-brands fa-github"></i> GitHub
              </a>
            </div>
          </div>

          <div className="card contact-form-card">
            <h3>Enviar Mensaje Directo</h3>
            {submittedSuccess && (
              <div style={{
                background: 'rgba(20, 184, 166, 0.12)',
                border: '1px solid var(--accent-teal)',
                color: 'var(--accent-teal)',
                padding: '0.8rem 1rem',
                borderRadius: 'var(--radius-md)',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.9rem'
              }}>
                <CheckCircle2 size={18} /> ¡Mensaje enviado con éxito! Te responderé a la brevedad.
              </div>
            )}
            <form id="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nombre Completo</label>
                <input
                  type="text"
                  id="name"
                  name="Nombre"
                  placeholder="Tu nombre"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Tu Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="Email"
                  placeholder="ejemplo@correo.com"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="Mensaje"
                  rows={4}
                  placeholder="Escribe tu consulta o propuesta..."
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-primary full-width"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} /> Enviando...
                  </>
                ) : (
                  <>
                    <Send size={16} /> Enviar Mensaje Directo
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

