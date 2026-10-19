import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getProfileInfo } from '../data/portfolioData';
import { sound } from '../utils/soundEngine';
import { Github, Linkedin } from './BrandIcons';

export default function Footer() {
  const { language, t } = useLanguage();
  const profile = getProfileInfo(language);
  const [athensTime, setAthensTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      setAthensTime(new Date().toLocaleTimeString('en-US', { hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 md:px-8 border-t border-slate-850 bg-slate-950 font-mono text-xs text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand & University */}
        <div className="space-y-1 text-center md:text-left">
          <div className="font-bold text-white text-sm">
            {profile.name} ({profile.handle})
          </div>
          <div className="text-slate-500 text-[11px] font-sans">
            {profile.department} • {profile.university}
          </div>
        </div>

        {/* Center: Live Telemetry */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-[10px] sm:text-[11px] text-center max-w-full">
          <span className="flex items-center gap-1.5 text-slate-300 shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {language === 'el' ? 'ΑΘΗΝΑ [UTC+3]:' : 'ATHENS [UTC+3]:'} {athensTime}
          </span>
          <span className="text-slate-600 hidden sm:inline">•</span>
          <span className="text-sky-400 shrink-0">
            {language === 'el' ? 'GITHUB PAGES' : 'HOSTED ON GITHUB PAGES'}
          </span>
        </div>

        {/* Right: Back to top & Socials */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-sky-400 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="cursor-pointer p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors flex items-center gap-1.5"
            title={t.footer.backToTop}
          >
            <span>{language === 'el' ? 'Κορυφή' : 'Top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
