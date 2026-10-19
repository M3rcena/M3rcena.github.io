import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Check,
  Copy,
  Download,
  GraduationCap,
  MapPin,
  Terminal
} from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getProfileInfo } from '../data/portfolioData';
import { sound } from '../utils/soundEngine';

interface HeroProps {
  onExploreProjects: () => void;
  onOpenTerminal: () => void;
}

export default function Hero({ onExploreProjects, onOpenTerminal }: HeroProps) {
  const { language, t } = useLanguage();
  const profile = getProfileInfo(language);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    sound.playClick(1000, 0.03);
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadCV = () => {
    sound.playWindowChime();
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Radial Glow Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[380px] bg-sky-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[420px] h-[320px] bg-orange-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[420px] h-[320px] bg-purple-500/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 space-y-6 sm:space-y-8">
        {/* Top Bento Row: 8 Cols Main Hero + 4 Cols Profile & Credentials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Main Hero Tile (Col Span 8) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-8 rounded-3xl bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-950/90 border border-slate-800 p-5 sm:p-8 md:p-10 shadow-2xl backdrop-blur-xl flex flex-col justify-between space-y-6 relative overflow-hidden group"
          >
            {/* Ambient Corner Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 blur-3xl pointer-events-none" />

            <div className="space-y-4 sm:space-y-5">
              {/* Status Beacon */}
              <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 border border-slate-800 backdrop-blur-md shadow-inner text-xs font-mono max-w-full">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-slate-300">{t.hero.location}</span>
                <span className="text-slate-600">•</span>
                <span className="text-sky-400 font-bold">{t.hero.uniBadge}</span>
              </div>

              {/* Headline */}
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
                {t.hero.headlineStart}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400">
                  {t.hero.headlineSystems}
                </span>{' '}
                {t.hero.headlineMiddle}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-cyan-300">
                  {t.hero.headlineReactive}
                </span>
              </h1>

              {/* Narrative Summary */}
              <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl font-sans">
                {t.hero.bioIntro} <span className="text-white font-bold">{profile.name}</span> (
                <span className="text-sky-400 font-mono font-semibold">{profile.handle}</span>)
                {t.hero.bioStudent}
                {t.hero.bioRest}
              </p>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2">
              <a
                href="#projects"
                onClick={onExploreProjects}
                className="cursor-pointer px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-sky-500 via-sky-600 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-mono text-xs sm:text-sm font-bold flex items-center gap-2 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <span>{t.hero.exploreProjects}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
              </a>

              <a
                href="/assets/Michail_Farmakis.pdf"
                download="Michail_Farmakis_Resume.pdf"
                onClick={handleDownloadCV}
                className="cursor-pointer px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 hover:text-white border border-slate-700 font-mono text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <Download className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{t.hero.downloadCV}</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="cursor-pointer px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-slate-950/80 hover:bg-slate-850 text-slate-300 hover:text-white border border-slate-800 font-mono text-xs flex items-center gap-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                title={t.hero.copyEmail}
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="text-emerald-400 font-semibold">{t.hero.emailCopied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="hidden sm:inline">{profile.email}</span>
                    <span className="sm:hidden">{t.hero.copyEmail}</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Profile & Credentials Bento Tile (Col Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-4 rounded-3xl bg-slate-900/90 border border-slate-800 p-5 sm:p-6 flex flex-col justify-between shadow-2xl backdrop-blur-xl space-y-6"
          >
            {/* Identity Card */}
            <div className="flex items-center gap-3.5">
              <div className="relative shrink-0">
                <img
                  src="/assets/profile.jpg"
                  alt="Michail Farmakis"
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover border-2 border-slate-700 shadow-xl"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-slate-900 flex items-center justify-center">
                  <Check className="w-2.5 h-2.5 text-white" />
                </span>
              </div>

              <div className="min-w-0">
                <div className="font-bold text-sm sm:text-base text-white truncate">{profile.name}</div>
                <div className="text-xs text-sky-400 font-mono font-semibold truncate">
                  {language === 'el' ? 'Φοιτητής CS @ ΕΚΠΑ' : 'CS Student @ NKUA'}
                </div>
                <div className="text-[11px] text-slate-400 font-sans mt-0.5 flex items-center gap-1 truncate">
                  <MapPin className="w-3 h-3 text-orange-400 shrink-0" />
                  <span className="truncate">{profile.location}</span>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bento Grid */}
            <div className="grid grid-cols-2 gap-2 sm:gap-2.5 font-mono">
              <div className="p-2.5 sm:p-3 rounded-xl bg-slate-950/80 border border-slate-855 min-w-0">
                <div className="text-lg sm:text-xl font-black text-orange-400">62+</div>
                <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 truncate">{t.hero.statStarsLabel}</div>
              </div>

              <div className="p-2.5 sm:p-3 rounded-xl bg-slate-950/80 border border-slate-855 min-w-0">
                <div className="text-lg sm:text-xl font-black text-sky-400">NKUA DIT</div>
                <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 truncate">{t.hero.statUniSub}</div>
              </div>

              <div className="p-2.5 sm:p-3 rounded-xl bg-slate-950/80 border border-slate-855 min-w-0">
                <div className="text-lg sm:text-xl font-black text-emerald-400">100%</div>
                <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 truncate">TypeScript Types</div>
              </div>

              <div className="p-2.5 sm:p-3 rounded-xl bg-slate-950/80 border border-slate-855 min-w-0">
                <div className="text-lg sm:text-xl font-black text-purple-400">6 Tiers</div>
                <div className="text-[10px] sm:text-[11px] text-slate-400 mt-0.5 truncate">{t.hero.statStackSub}</div>
              </div>
            </div>

            {/* Academic Credential Pill */}
            <div className="p-2.5 sm:p-3 rounded-xl bg-purple-950/30 border border-purple-500/30 flex items-center gap-2.5 sm:gap-3">
              <GraduationCap className="w-5 h-5 text-purple-400 shrink-0" />
              <div className="font-mono text-[10px] sm:text-[11px] text-purple-200 leading-tight">
                {profile.department} ({language === 'el' ? 'ΕΚΠΑ' : 'NKUA'})
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bento Row: Interactive Mini Console (Spans Full Width) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
          className="rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl overflow-hidden backdrop-blur-xl"
        >
          {/* Console Header */}
          <div className="px-3 sm:px-4 py-2.5 bg-slate-850 border-b border-slate-800 flex items-center justify-between font-mono text-xs gap-2">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 shrink-0" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 shrink-0" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 shrink-0" />
              <span className="ml-1 sm:ml-2 text-slate-300 font-bold flex items-center gap-1.5 truncate">
                <Terminal className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span className="truncate">{t.hero.consoleTitle}</span>
              </span>
            </div>

            <button
              onClick={onOpenTerminal}
              className="cursor-pointer text-sky-400 hover:text-sky-300 text-[11px] flex items-center gap-1 font-semibold transition-colors shrink-0"
            >
              <span className="hidden sm:inline">{t.hero.expandConsole}</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Console Body */}
          <div className="p-3.5 sm:p-5 font-mono text-xs bg-slate-950/80 space-y-2 text-slate-300">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold shrink-0">m3rcena@workstation:~$</span>
              <span className="text-white">neofetch --short</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1 text-[11px]">
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-850 min-w-0">
                <span className="text-slate-500 block">{t.hero.systemsEngine}</span>
                <span className="text-orange-400 font-bold break-words">C, C++, Assembly, POSIX, Vivado</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-850 min-w-0">
                <span className="text-slate-500 block">{t.hero.clientRuntime}</span>
                <span className="text-sky-400 font-bold break-words">React 18, TypeScript, Electron, Node</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-850 min-w-0">
                <span className="text-slate-500 block">{t.hero.persistenceOps}</span>
                <span className="text-emerald-400 font-bold break-words">PostgreSQL, Redis, Docker, CI/CD</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
