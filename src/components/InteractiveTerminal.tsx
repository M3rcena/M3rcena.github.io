import confetti from 'canvas-confetti';
import {
  CornerDownLeft,
  Terminal as TerminalIcon,
  Trash2
} from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import {
  getArchitectureLayers,
  getProfileInfo,
  getProjects
} from '../data/portfolioData';
import { sound } from '../utils/soundEngine';

const renderNeofetchOutput = (lang: 'en' | 'el') => {
  const isEl = lang === 'el';
  return (
    <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-6 font-mono text-xs my-1 select-text">
      {/* Monogram ASCII Block */}
      <pre className="text-sky-400 font-mono font-bold leading-tight text-[11px] sm:text-xs select-none shrink-0 tracking-widest whitespace-pre overflow-x-hidden">
        {` ███╗   ███╗███████╗
 ████╗ ████║██╔════╝
 ██╔████╔██║█████╗  
 ██║╚██╔╝██║██╔══╝  
 ██║ ╚═╝ ██║██║     
 ╚═╝     ╚═╝╚═╝     `}
      </pre>

      {/* Info Specs Block */}
      <div className="space-y-1 text-slate-300 text-[11px] sm:text-xs min-w-0">
        <div className="text-sky-300 font-bold tracking-wide break-all">michail.frm@gmail.com</div>
        <div className="text-slate-600 select-none hidden sm:block">------------------------------------</div>
        <div className="text-slate-600 select-none sm:hidden">------------------------</div>
        <div>
          <span className="text-emerald-400 font-semibold">{isEl ? 'Χρήστης:' : 'User:'}</span>{' '}
          <span className="text-slate-200">{isEl ? 'Μιχαήλ Φαρμάκης (Αθήνα)' : 'Michail Farmakis (Athens, Greece)'}</span>
        </div>
        <div>
          <span className="text-emerald-400 font-semibold">{isEl ? 'Ρόλος:' : 'Role:'}</span>{' '}
          <span className="text-slate-200">{isEl ? 'Full-Stack Μηχανικός & Φοιτητής Πληροφορικής @ ΕΚΠΑ' : 'Full-Stack Engineer & CS Student @ NKUA'}</span>
        </div>
        <div>
          <span className="text-emerald-400 font-semibold">{isEl ? 'Σπουδές:' : 'Education:'}</span>{' '}
          <span className="text-slate-200">{isEl ? 'Τμήμα Πληροφορικής & Τηλεπικοινωνιών (ΕΚΠΑ)' : 'NKUA Dept. Informatics & Telecom'}</span>
        </div>
        <div>
          <span className="text-emerald-400 font-semibold">{isEl ? 'Συστήματα:' : 'Systems:'}</span>{' '}
          <span className="text-slate-200">C, C++, Assembly, POSIX, Xilinx Vivado</span>
        </div>
        <div>
          <span className="text-emerald-400 font-semibold">{isEl ? 'Web & Desktop:' : 'Web & Desktop:'}</span>{' '}
          <span className="text-slate-200">React 18, TypeScript, Electron, Node</span>
        </div>
      </div>
    </div>
  );
};

export default function InteractiveTerminal() {
  const { language, t } = useLanguage();
  const profile = getProfileInfo(language);
  const layers = getArchitectureLayers(language);
  const projects = getProjects(language);

  const [history, setHistory] = useState<Array<{ cmd: string; output: React.ReactNode }>>([
    {
      cmd: 'neofetch',
      output: renderNeofetchOutput(language)
    }
  ]);
  const [input, setInput] = useState('');
  const terminalBufferRef = useRef<HTMLDivElement>(null);

  // Update initial output when language toggles if history is at initial state
  useEffect(() => {
    setHistory((prev) => {
      if (prev.length === 1 && prev[0].cmd === 'neofetch') {
        return [{ cmd: 'neofetch', output: renderNeofetchOutput(language) }];
      }
      return prev;
    });
  }, [language]);

  const executeCommand = (rawCmd: string) => {
    const clean = rawCmd.trim().toLowerCase();
    if (!clean) return;
    sound.playKeypress();

    let output: React.ReactNode = null;

    switch (clean) {
      case 'help':
        output = (
          <div className="space-y-1 text-slate-300">
            <div>{t.terminal.availableCommands}</div>
            <div><span className="text-emerald-400 font-bold">about</span> - {t.terminal.helpAbout}</div>
            <div><span className="text-emerald-400 font-bold">skills</span> - {t.terminal.helpSkills}</div>
            <div><span className="text-emerald-400 font-bold">projects</span> - {t.terminal.helpProjects}</div>
            <div><span className="text-emerald-400 font-bold">neofetch</span> - {t.terminal.helpNeofetch}</div>
            <div><span className="text-emerald-400 font-bold">download-cv</span> - {t.terminal.helpDownloadCv}</div>
            <div><span className="text-emerald-400 font-bold">contact</span> - {t.terminal.helpContact}</div>
            <div><span className="text-emerald-400 font-bold">clear</span> - {t.terminal.helpClear}</div>
          </div>
        );
        break;

      case 'about':
        output = (
          <div className="space-y-2 text-slate-300 font-sans">
            <p className="text-sky-300 font-bold font-mono">{profile.headline}</p>
            <p className="text-slate-400 leading-relaxed text-xs">{profile.about}</p>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-2">
            {layers.map((l) => (
              <div key={l.id} className="p-2 rounded bg-slate-900 border border-slate-800">
                <span className="text-orange-400 font-bold">[{l.layerNumber}]</span>{' '}
                <span className="text-white font-bold">{l.name}:</span>{' '}
                <span className="text-slate-300">{l.skills.join(', ')}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2">
            {projects.map((p) => (
              <div key={p.id} className="p-2 rounded bg-slate-900 border border-slate-800">
                <div className="flex justify-between items-center">
                  <span className="text-sky-400 font-bold">{p.name}</span>
                  <span className="text-[10px] text-orange-400">{p.badge}</span>
                </div>
                <div className="text-slate-400 text-xs mt-1">{p.summary}</div>
                <div className="text-emerald-400 text-[11px] mt-1 font-mono">Stack: {p.stack.join(' • ')}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'download-cv':
        confetti({ particleCount: 50, spread: 60 });
        const a = document.createElement('a');
        a.href = '/assets/Michail_Farmakis.pdf';
        a.download = 'Michail_Farmakis_Resume.pdf';
        a.click();
        output = (
          <div className="text-emerald-400 font-bold">
            {language === 'el' ? 'Λήψη του Michail_Farmakis_Resume.pdf ξεκίνησε...' : 'Triggered download for Michail_Farmakis_Resume.pdf'}
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1 text-slate-300">
            <div>Email: <a href={`mailto:${profile.email}`} className="text-sky-400 underline">{profile.email}</a></div>
            <div>GitHub: <a href={profile.github} target="_blank" rel="noreferrer" className="text-sky-400 underline">{profile.github}</a></div>
            <div>LinkedIn: <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-sky-400 underline">{profile.linkedin}</a></div>
          </div>
        );
        break;

      case 'neofetch':
        output = renderNeofetchOutput(language);
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        output = (
          <div className="text-red-400">
            command not found: {clean}. {language === 'el' ? 'Πληκτρολογήστε' : 'Type'} <span className="text-emerald-400 font-bold">help</span> {language === 'el' ? 'για τη λίστα εντολών.' : 'for command list.'}
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { cmd: rawCmd, output }]);
    setInput('');
    setTimeout(() => {
      if (terminalBufferRef.current) {
        terminalBufferRef.current.scrollTo({
          top: terminalBufferRef.current.scrollHeight,
          behavior: 'smooth'
        });
      }
    }, 50);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(input);
  };

  return (
    <section id="terminal" className="py-24 relative overflow-hidden bg-slate-950/70 border-t border-slate-900">
      <div className="max-w-5xl mx-auto px-4 md:px-8 space-y-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider mb-1">
              <TerminalIcon className="w-4 h-4" />
              <span>{t.terminal.sectionBadge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {t.terminal.heading}
            </h2>
          </div>

          {/* Quick Action Badges */}
          <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
            {['help', 'skills', 'projects', 'download-cv', 'clear'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => executeCommand(cmd)}
                className="cursor-pointer px-2.5 py-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 border border-slate-800 transition-colors"
              >
                ${cmd}
              </button>
            ))}
          </div>
        </div>

        {/* Terminal Window */}
        <div className="rounded-2xl bg-slate-900/95 border border-slate-750 shadow-2xl overflow-hidden backdrop-blur-xl">
          {/* Title Bar */}
          <div className="px-4 py-3 bg-slate-850 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 font-mono text-xs text-slate-400 font-semibold truncate">
                m3rcena@workstation:~ (zsh)
              </span>
            </div>
            <button
              onClick={() => {
                sound.playClick();
                setHistory([]);
              }}
              className="text-slate-500 hover:text-slate-300 transition-colors cursor-pointer p-1"
              title={t.terminal.clear}
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>

          {/* Output Buffer */}
          <div
            ref={terminalBufferRef}
            className="p-4 sm:p-6 font-mono text-xs bg-slate-950/90 space-y-4 max-h-[420px] overflow-y-auto"
          >
            <div className="text-slate-500 text-[11px]">
              {t.terminal.shellNotice} <span className="text-emerald-400 font-bold">help</span> {t.terminal.shellNoticeEnd}
            </div>

            {history.map((h, i) => (
              <div key={i} className="space-y-1.5">
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="text-emerald-400 font-bold shrink-0">m3rcena@workstation:~$</span>
                  <span className="text-white break-all">{h.cmd}</span>
                </div>
                <div className="pl-2 sm:pl-3 border-l-2 border-slate-800 break-words min-w-0">{h.output}</div>
              </div>
            ))}
          </div>

          {/* Input Prompt */}
          <form
            onSubmit={handleSubmit}
            toolname="executeTerminalCommand"
            tooldescription="Execute an interactive CLI command on Michail Farmakis portfolio terminal (e.g. help, neofetch, projects, skills, contact, clear, theme, exit)."
            toolautosubmit="true"
            data-toolname="executeTerminalCommand"
            data-tooldescription="Execute an interactive CLI command on Michail Farmakis portfolio terminal (e.g. help, neofetch, projects, skills, contact, clear, theme, exit)."
            className="p-2 sm:p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2 sm:gap-3 font-mono text-xs"
          >
            <span className="text-emerald-400 font-bold pl-1 sm:pl-2 shrink-0">
              <span className="hidden sm:inline">m3rcena@workstation:</span>~$
            </span>
            <input
              name="command"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.terminal.placeholder}
              toolparamdescription="CLI command string to run (e.g., help, neofetch, projects, skills, contact, clear, theme, exit)"
              data-toolparamdescription="CLI command string to run (e.g., help, neofetch, projects, skills, contact, clear, theme, exit)"
              className="flex-1 bg-transparent text-white outline-none font-mono text-xs min-w-0"
            />
            <button
              type="submit"
              className="px-2.5 sm:px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer shrink-0"
            >
              <span className="hidden sm:inline">{t.terminal.execute}</span>
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
