import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Profile } from './components/Profile';
import { Specialization } from './components/Specialization';
import { EducationTimeline } from './components/EducationTimeline';
import { ProjectDashboard } from './components/ProjectDashboard';
import { SkillsGrid } from './components/SkillsGrid';
import { ICPCSection } from './components/ICPCSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

export function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'light' ? 'light' : 'dark';
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setToastMessage(`Copiado: <strong>${text}</strong>`);
        setTimeout(() => setToastMessage(null), 3000);
      },
      (err) => {
        console.error('Error al copiar: ', err);
        setToastMessage('Error al copiar al portapapeles');
        setTimeout(() => setToastMessage(null), 3000);
      }
    );
  };

  return (
    <div className="app-root">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Profile />
        <Specialization />
        <EducationTimeline />
        <ProjectDashboard />
        <SkillsGrid />
        <ICPCSection />
        <Contact onCopy={handleCopy} />
      </main>
      <Footer />
      <Toast message={toastMessage} />
    </div>
  );
}

export default App;
