import React, { useState, useEffect } from 'react';
import { Sun, Moon, Printer, Menu, X } from 'lucide-react';

interface NavbarProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['perfil', 'experiencia', 'educacion', 'proyectos', 'habilidades', 'actividades', 'contacto'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const navLinks = [
    { href: '#perfil', label: 'Perfil', id: 'perfil' },
    { href: '#experiencia', label: 'Especialización', id: 'experiencia' },
    { href: '#educacion', label: 'Educación', id: 'educacion' },
    { href: '#proyectos', label: 'Proyectos', id: 'proyectos' },
    { href: '#habilidades', label: 'Habilidades', id: 'habilidades' },
    { href: '#actividades', label: 'ICPC', id: 'actividades' },
    { href: '#contacto', label: 'Contacto', id: 'contacto', isHighlight: true },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container nav-container">
        <a href="#hero" className="nav-logo">
          <span className="logo-accent">LV</span> Villavicencio
        </a>

        <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`} id="nav-menu">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`nav-link ${link.isHighlight ? 'highlight' : ''} ${
                activeSection === link.id ? 'active-nav' : ''
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            onClick={onToggleTheme}
            className="btn-icon"
            aria-label="Cambiar tema"
            title={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={handlePrint}
            className="btn-secondary btn-sm"
            aria-label="Imprimir CV en PDF"
            title="Exportar CV a PDF"
          >
            <Printer size={16} /> PDF
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn-icon mobile-only"
            aria-label="Menú navegación"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
};
