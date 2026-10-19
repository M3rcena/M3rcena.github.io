import confetti from 'canvas-confetti';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Code2,
  Download,
  Layers,
  Mail,
  Search
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  getArchitectureLayers,
  getProfileInfo,
  getProjects
} from '../data/portfolioData';
import { ProjectData } from '../types';
import { sound } from '../utils/soundEngine';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (p: ProjectData) => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
  onSelectProject
}: CommandPaletteProps) {
  const { language, t } = useLanguage();
  const profile = getProfileInfo(language);
  const projects = getProjects(language);
  const layers = getArchitectureLayers(language);

  const [query, setQuery] = useState('');

  // Close on Escape & toggle on Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProjects = projects.filter(
    (p) =>
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.summary.toLowerCase().includes(query.toLowerCase()) ||
      p.stack.some((s) => s.toLowerCase().includes(query.toLowerCase()))
  );

  const filteredLayers = layers.filter(
    (l) =>
      l.name.toLowerCase().includes(query.toLowerCase()) ||
      l.domain.toLowerCase().includes(query.toLowerCase()) ||
      l.skills.some((s) => s.toLowerCase().includes(query.toLowerCase()))
  );

  const handleDownloadCV = () => {
    sound.playClick();
    confetti({ particleCount: 50, spread: 60 });
    const a = document.createElement('a');
    a.href = '/assets/Michail_Farmakis.pdf';
    a.download = 'Michail_Farmakis_Resume.pdf';
    a.click();
    onClose();
  };

  return (
    <AnimatePresence>
      <div
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
        className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/80 backdrop-blur-md"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.18 }}
          className="relative w-full max-w-2xl rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Search Input Bar */}
          <div className="p-4 bg-slate-850 border-b border-slate-800 flex items-center gap-3">
            <Search className="w-5 h-5 text-sky-400 shrink-0" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t.commandPalette.placeholder}
              className="flex-1 bg-transparent text-white outline-none font-mono text-sm placeholder:text-slate-500"
            />
            <kbd className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 font-mono text-[11px] text-slate-500">
              ESC
            </kbd>
          </div>

          {/* Results List */}
          <div className="max-h-96 overflow-y-auto p-3 space-y-4 font-mono text-xs">
            {/* Quick Actions */}
            <div>
              <div className="text-[10px] uppercase font-bold text-slate-500 px-3 py-1">
                {t.commandPalette.actions}
              </div>
              <div className="space-y-1">
                <button
                  onClick={handleDownloadCV}
                  className="cursor-pointer w-full text-left px-3 py-2 rounded-xl hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-between transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Download className="w-4 h-4 text-sky-400" />
                    <span>{t.commandPalette.downloadResumeAction}</span>
                  </span>
                  <span className="text-[10px] text-slate-500 font-sans">PDF</span>
                </button>

                <a
                  href={`mailto:${profile.email}`}
                  onClick={onClose}
                  className="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-between transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-emerald-400" />
                    <span>
                      {language === 'el' ? 'Αποστολή Email (' : 'Send Direct Email ('}
                      {profile.email})
                    </span>
                  </span>
                  <span className="text-[10px] text-slate-500 font-sans">Mail</span>
                </a>
              </div>
            </div>

            {/* Projects Matches */}
            {filteredProjects.length > 0 && (
              <div>
                <div className="text-[10px] uppercase font-bold text-slate-500 px-3 py-1">
                  {t.commandPalette.projects}
                </div>
                <div className="space-y-1">
                  {filteredProjects.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        sound.playClick();
                        onSelectProject(p);
                        onClose();
                      }}
                      className="cursor-pointer w-full text-left px-3 py-2.5 rounded-xl hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-between transition-colors group"
                    >
                      <div className="flex items-center gap-2.5">
                        <Code2 className="w-4 h-4 text-orange-400" />
                        <div>
                          <div className="font-bold text-white group-hover:text-sky-400 transition-colors">
                            {p.name}
                          </div>
                          <div className="text-[11px] text-slate-500 font-sans truncate max-w-sm">
                            {p.tagline}
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-orange-400">
                        {p.badge}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Architecture Matches */}
            {filteredLayers.length > 0 && (
              <div>
                <div className="text-[10px] uppercase font-bold text-slate-500 px-3 py-1">
                  {t.commandPalette.architecture}
                </div>
                <div className="space-y-1">
                  {filteredLayers.map((l) => (
                    <a
                      key={l.id}
                      href="#architecture"
                      onClick={() => {
                        sound.playClick();
                        onClose();
                      }}
                      className="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-between transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <Layers className="w-4 h-4" style={{ color: l.color }} />
                        <span>{l.name}</span>
                      </span>
                      <span className="text-[10px] text-slate-500">{l.layerNumber}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Info */}
          <div className="p-3 bg-slate-850 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500 font-mono">
            <span>{language === 'el' ? 'Πλοήγηση με ↑ ↓' : 'Use ↑ ↓ to navigate'}</span>
            <span>Michail Farmakis // Portfolio</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
