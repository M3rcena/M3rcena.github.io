import { useState } from 'react';
import AcademicSection from './components/AcademicSection';
import ArchitectureMatrix from './components/ArchitectureMatrix';
import CommandPalette from './components/CommandPalette';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Hero from './components/Hero';
import InteractiveTerminal from './components/InteractiveTerminal';
import Navbar from './components/Navbar';
import ProjectModal from './components/ProjectModal';
import ProjectsSection from './components/ProjectsSection';
import { useLanguage } from './context/LanguageContext';
import { getProjects } from './data/portfolioData';
import { sound } from './utils/soundEngine';

export default function App() {
  const { language } = useLanguage();
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const projects = getProjects(language);
  const selectedProject = selectedProjectId
    ? projects.find((p) => p.id === selectedProjectId) || null
    : null;

  const handleToggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    sound.enabled = next;
    if (next) sound.playClick();
  };

  const scrollToSection = (id: string) => {
    sound.playClick();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-sky-500 selection:text-white relative">
      {/* Navigation Bar */}
      <Navbar
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onExploreProjects={() => scrollToSection('projects')}
          onOpenTerminal={() => scrollToSection('terminal')}
        />

        {/* Featured Projects Section */}
        <ProjectsSection onSelectProject={(p) => setSelectedProjectId(p.id)} />

        {/* 6-Layer Architecture Competencies */}
        <ArchitectureMatrix />

        {/* NKUA Academic Foundations */}
        <AcademicSection />

        {/* Interactive CLI Terminal */}
        <InteractiveTerminal />

        {/* Contact & Transmission Dispatcher */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Deep-Dive Sandbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProjectId(null)}
      />

      {/* Global Command Palette (Cmd + K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        onSelectProject={(p) => setSelectedProjectId(p.id)}
      />
    </div>
  );
}