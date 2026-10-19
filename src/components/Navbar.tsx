import confetti from 'canvas-confetti';
import {
  Code2,
  Command,
  Download,
  Globe,
  GraduationCap,
  Layers,
  Mail,
  Menu,
  Terminal,
  Volume2,
  VolumeX,
  X
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getProfileInfo } from '../data/portfolioData';
import { sound } from '../utils/soundEngine';
import { Github, Linkedin } from './BrandIcons';

interface NavbarProps {
  onOpenCommandPalette: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export default function Navbar({
  onOpenCommandPalette,
  soundEnabled,
  onToggleSound
}: NavbarProps) {
  const { language, toggleLanguage, t } = useLanguage();
  const profile = getProfileInfo(language);

  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['projects', 'architecture', 'academic', 'terminal', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerDownloadConfetti = () => {
    sound.playClick(1200, 0.04);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.1, x: 0.85 }
    });
  };

  const navItems = [
    { id: 'projects', label: t.nav.projects, icon: Code2, accent: 'text-sky-400' },
    { id: 'architecture', label: t.nav.architecture, icon: Layers, accent: 'text-orange-400' },
    { id: 'academic', label: t.nav.academic, icon: GraduationCap, accent: 'text-purple-400' },
    { id: 'terminal', label: t.nav.terminal, icon: Terminal, accent: 'text-emerald-400' },
    { id: 'contact', label: t.nav.contact, icon: Mail, accent: 'text-cyan-400' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'py-2.5 backdrop-blur-xl bg-slate-950/85 border-b border-slate-850 shadow-2xl shadow-black/40'
          : 'py-3.5 backdrop-blur-md bg-slate-950/60 border-b border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand & Availability Status */}
        <a
          href="#"
          onClick={() => sound.playClick(800, 0.02)}
          className="flex items-center gap-2.5 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-xl shrink-0 min-w-0"
        >
          <div className="relative shrink-0">
            <img
              src="/assets/profile.jpg"
              alt="Michail Farmakis"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl object-cover border border-slate-700/80 group-hover:border-sky-400 transition-colors shadow-md"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-slate-950 animate-pulse" />
          </div>

          <div className="min-w-0">
            <div className="font-bold text-xs sm:text-sm text-white flex items-center gap-1.5 leading-none">
              <span className="truncate">{profile.name}</span>
              <span className="font-mono text-[9px] sm:text-[10px] text-sky-400 font-semibold px-1 sm:px-1.5 py-0.2 rounded bg-sky-950/80 border border-sky-800/60 shrink-0">
                m3rcena
              </span>
            </div>
            <div className="font-mono text-[10px] sm:text-[11px] text-slate-400 mt-1 leading-none hidden sm:block truncate max-w-[170px] md:max-w-none">
              {t.nav.role}
            </div>
          </div>
        </a>

        {/* Desktop Center Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 p-1 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-inner text-xs font-mono shrink-0">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => sound.playClick()}
                className={`cursor-pointer px-3.5 py-1.5 rounded-full transition-all duration-200 flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${isActive
                    ? 'bg-slate-800 text-white font-bold shadow-md shadow-black/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-850/60'
                  }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? item.accent : 'text-slate-500'}`} />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Language Switcher Button */}
          <button
            onClick={toggleLanguage}
            className="cursor-pointer px-2 sm:px-2.5 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-850 text-slate-300 hover:text-white border border-slate-800 transition-colors shadow-sm flex items-center gap-1 font-mono text-xs font-bold shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            title={language === 'en' ? 'Αλλαγή σε Ελληνικά' : 'Switch to English'}
          >
            <Globe className="w-3.5 h-3.5 text-sky-400" />
            <span>{t.nav.langSwitch}</span>
          </button>

          {/* Command Palette Trigger */}
          <button
            onClick={() => {
              sound.playClick();
              onOpenCommandPalette();
            }}
            className="cursor-pointer p-2 sm:px-2.5 sm:py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-850 text-slate-400 hover:text-slate-200 border border-slate-800 flex items-center gap-1.5 text-xs font-mono transition-all shadow-sm group shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            title="Search & Quick Actions (Cmd+K)"
          >
            <Command className="w-3.5 h-3.5 text-sky-400 group-hover:rotate-12 transition-transform" />
            <span className="hidden md:inline">{t.nav.search}</span>
            <kbd className="hidden lg:inline px-1 py-0.2 rounded bg-slate-950 border border-slate-800 text-[9px] text-slate-500">
              ⌘K
            </kbd>
          </button>

          {/* Audio Toggle */}
          <button
            onClick={onToggleSound}
            className="cursor-pointer p-2 rounded-xl bg-slate-900/90 hover:bg-slate-850 text-slate-400 hover:text-slate-200 border border-slate-800 transition-colors shadow-sm shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            title={soundEnabled ? t.nav.soundOn : t.nav.soundOff}
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-emerald-400" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-500" />
            )}
          </button>

          {/* Social Links (Desktop only) */}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer p-2 rounded-xl bg-slate-900/90 hover:bg-slate-850 text-slate-400 hover:text-white border border-slate-800 transition-colors hidden 2xl:flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer p-2 rounded-xl bg-slate-900/90 hover:bg-slate-850 text-slate-400 hover:text-sky-400 border border-slate-800 transition-colors hidden 2xl:flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          {/* Resume Download CTA */}
          <a
            href="/assets/Michail_Farmakis.pdf"
            download="Michail_Farmakis_Resume.pdf"
            onClick={triggerDownloadConfetti}
            className="cursor-pointer px-3 py-1.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-mono text-xs font-semibold hidden sm:flex items-center gap-1.5 shadow-lg shadow-sky-500/20 hover:shadow-sky-500/35 transition-all shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{t.nav.resume}</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => {
              sound.playClick();
              setMobileMenuOpen((prev) => !prev);
            }}
            className="cursor-pointer xl:hidden p-2 rounded-xl bg-slate-900/90 hover:bg-slate-850 text-slate-400 hover:text-white border border-slate-800 transition-colors shrink-0"
            title="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden px-4 pt-3 pb-4 bg-slate-950/95 border-b border-slate-850 space-y-2 font-mono text-xs animate-fadeIn">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => {
                  sound.playClick();
                  setMobileMenuOpen(false);
                }}
                className={`cursor-pointer px-4 py-2.5 rounded-xl flex items-center gap-2.5 transition-colors ${isActive
                    ? 'bg-slate-900 text-white font-bold border border-slate-800'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900/50'
                  }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? item.accent : 'text-slate-500'}`} />
                <span>{item.label}</span>
              </a>
            );
          })}

          {/* Mobile Drawer Actions Row */}
          <div className="pt-2 border-t border-slate-850 flex flex-wrap items-center justify-between gap-2">
            <a
              href="/assets/Michail_Farmakis.pdf"
              download="Michail_Farmakis_Resume.pdf"
              onClick={() => {
                triggerDownloadConfetti();
                setMobileMenuOpen(false);
              }}
              className="flex-1 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-mono text-xs font-semibold flex items-center justify-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{t.nav.resume} (PDF)</span>
            </a>

            <div className="flex items-center gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-sky-400"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
