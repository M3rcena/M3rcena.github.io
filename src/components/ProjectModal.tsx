import { AnimatePresence, motion } from 'framer-motion';
import {
  Activity,
  ArrowRight,
  Check,
  ExternalLink,
  Play,
  X,
  Zap
} from 'lucide-react';
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ProjectData } from '../types';
import { sound } from '../utils/soundEngine';
import { Github } from './BrandIcons';

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { language, t } = useLanguage();
  if (!project) return null;

  // Stream simulator state (Udeler)
  const [streamProgress, setStreamProgress] = useState(0);
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamLogs, setStreamLogs] = useState<string[]>([]);

  // Webhook simulator state (ChronoGit)
  const [commitMessage, setCommitMessage] = useState('feat: add optimized ast tree generator');
  const [webhookStatus, setWebhookStatus] = useState<'IDLE' | 'VERIFYING' | 'SYNCED'>('IDLE');

  // FSM simulator state (Weky)
  const [fsmState, setFsmState] = useState<'IDLE' | 'ROUND_1' | 'COLLECTING' | 'VICTORY'>('IDLE');

  // Start stream simulation
  const handleStartStream = () => {
    sound.playClick(900, 0.03);
    setIsStreaming(true);
    setStreamProgress(0);
    setStreamLogs([
      language === 'el'
        ? '[IPC] Αίτημα stream token από το ContextBridge...'
        : '[IPC] Requesting stream token from ContextBridge...'
    ]);

    let current = 0;
    const interval = setInterval(() => {
      current += 20;
      setStreamProgress(current);
      if (current === 20) {
        setStreamLogs((p) => [
          ...p,
          language === 'el'
            ? '[WORKER_01] Εκκίνηση worker pool (4 νήματα παρασκηνίου)'
            : '[WORKER_01] Spawned thread pool (4 workers)'
        ]);
      }
      if (current === 60) {
        setStreamLogs((p) => [
          ...p,
          language === 'el'
            ? '[CHUNK_02] Λήψη τμήματος 18.4MB με ταχύτητα 14.2 MB/s'
            : '[CHUNK_02] Downloaded 18.4MB at 14.2 MB/s'
        ]);
      }
      if (current === 100) {
        clearInterval(interval);
        setIsStreaming(false);
        sound.playWindowChime();
        setStreamLogs((p) => [
          ...p,
          language === 'el'
            ? '[SHA-256] Επαλήθευση ακεραιότητας: 9b8f2c... [ΕΠΙΤΥΧΙΑ]'
            : '[SHA-256] Digest verified: 9b8f2c... [PASS]',
          language === 'el'
            ? '[FS] Εγγραφή αρχείου στον τοπικό δίσκο ολοκληρώθηκε.'
            : '[FS] Committed file to local filesystem.'
        ]);
      }
    }, 400);
  };

  // Trigger webhook simulation
  const handleTriggerWebhook = () => {
    sound.playClick(1100, 0.03);
    setWebhookStatus('VERIFYING');

    setTimeout(() => {
      sound.playWindowChime();
      setWebhookStatus('SYNCED');
    }, 1200);
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      <div
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl rounded-2xl bg-slate-900 border border-slate-750 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="p-6 bg-slate-850 border-b border-slate-800 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div
                className="w-3.5 h-3.5 rounded-full"
                style={{ backgroundColor: project.accent }}
              />
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  {project.name}
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-950 text-orange-400 border border-slate-800 font-mono">
                    {project.badge}
                  </span>
                </h3>
                <p className="text-xs text-sky-400 font-mono">{project.categoryLabel}</p>
              </div>
            </div>

            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="p-2 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              title={t.modal.close}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-sm">
            {/* Summary */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                {language === 'el' ? 'Επισκόπηση Έργου' : 'Project Overview'}
              </h4>
              <p className="text-slate-200 leading-relaxed font-sans text-base">
                {project.summary}
              </p>
            </div>

            {/* INTERACTIVE LIVE SIMULATOR / DEMO */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-sky-400" />
                  {language === 'el' ? 'Διαδραστικό Sandbox Αρχιτεκτονικής' : 'Interactive Architecture Sandbox'}
                </h4>
                <span className="text-[11px] font-mono text-slate-500">
                  {language === 'el' ? 'Ζωντανός Προσομοιωτής Client' : 'Live Client Simulator'}
                </span>
              </div>

              {/* 1. Udeler Stream Simulator */}
              {project.demoType === 'stream' && (
                <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-4 font-mono text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="text-white font-bold">Electron ContextBridge Stream Worker</div>
                      <div className="text-slate-400 text-[11px]">
                        {language === 'el' ? 'Πολυνηματική ουρά stream με επαλήθευση SHA-256' : 'Multi-threaded stream queue with SHA-256 verification'}
                      </div>
                    </div>
                    <button
                      onClick={handleStartStream}
                      disabled={isStreaming}
                      className="cursor-pointer px-4 py-2 rounded-lg bg-orange-600 hover:bg-orange-500 disabled:opacity-50 text-white font-bold flex items-center gap-2 shadow-md transition-all self-start sm:self-auto"
                    >
                      <Play className="w-3.5 h-3.5" />
                      <span>
                        {isStreaming
                          ? (language === 'el' ? 'Λήψη chunks σε εξέλιξη...' : 'Streaming Chunks...')
                          : (language === 'el' ? 'Εκκίνηση Stream Λήψης' : 'Run Download Stream')}
                      </span>
                    </button>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] text-slate-400">
                      <span>{language === 'el' ? 'Πρόοδος Buffer Ροής:' : 'Stream Buffer Progress:'}</span>
                      <span className="text-sky-400 font-bold">{streamProgress}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-850 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-orange-500 to-sky-400 transition-all duration-300"
                        style={{ width: `${streamProgress}%` }}
                      />
                    </div>
                  </div>

                  {/* Stream Logs */}
                  {streamLogs.length > 0 && (
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-850 space-y-1 text-[11px] text-slate-300">
                      {streamLogs.map((log, idx) => (
                        <div key={idx} className="text-emerald-400">{log}</div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* 2. ChronoGit Webhook Simulator */}
              {project.demoType === 'webhook' && (
                <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-4 font-mono text-xs">
                  <div className="space-y-2">
                    <label className="text-slate-300 font-bold block">
                      {language === 'el' ? 'Προσομοίωση Git Push Payload' : 'Simulate Git Push Payload'}
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={commitMessage}
                        onChange={(e) => setCommitMessage(e.target.value)}
                        className="flex-1 px-3 py-2 rounded-lg bg-slate-900 border border-slate-800 text-white outline-none focus:border-sky-500 text-xs"
                      />
                      <button
                        onClick={handleTriggerWebhook}
                        disabled={webhookStatus === 'VERIFYING'}
                        className="cursor-pointer px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-bold flex items-center gap-2 transition-colors shrink-0"
                      >
                        <Zap className="w-3.5 h-3.5" />
                        <span>{language === 'el' ? 'Αποστολή Hook' : 'Dispatch Hook'}</span>
                      </button>
                    </div>
                  </div>

                  {webhookStatus === 'VERIFYING' && (
                    <div className="p-3 rounded-lg bg-sky-950/40 border border-sky-800 text-sky-300 text-xs flex items-center gap-2">
                      <Activity className="w-4 h-4 animate-spin text-sky-400" />
                      <span>
                        {language === 'el'
                          ? 'Υπολογισμός constant-time HMAC-SHA256 υπογραφής έναντι του webhook secret...'
                          : 'Computing constant-time HMAC-SHA256 signature against webhook secret...'}
                      </span>
                    </div>
                  )}

                  {webhookStatus === 'SYNCED' && (
                    <div className="p-3.5 rounded-lg bg-emerald-950/40 border border-emerald-500/50 text-emerald-300 text-xs space-y-1">
                      <div className="font-bold flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-400" />
                        {language === 'el' ? 'HMAC Υπογραφή Επαληθεύτηκε [0.2ms]' : 'HMAC Signature Verified [0.2ms]'}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {language === 'el'
                          ? 'Το δέντρο αρχιτεκτονικής του README ενημερώθηκε & καταγράφηκε από το ChronoGit[bot]'
                          : 'README Architecture tree updated & committed by ChronoGit[bot]'}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* 3. Weky FSM Simulator */}
              {project.demoType === 'fsm' && (
                <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-4 font-mono text-xs">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white font-bold">
                        {language === 'el' ? 'Ντετερμινιστική Μηχανή Κατάστασης' : 'Deterministic Game State Machine'}
                      </div>
                      <div className="text-slate-400 text-[11px]">
                        {language === 'el' ? 'Τρέχουσα Κατάσταση:' : 'Current State:'}{' '}
                        <span className="text-emerald-400 font-bold">{fsmState}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => {
                          sound.playClick();
                          setFsmState('ROUND_1');
                        }}
                        className="cursor-pointer px-3 py-1.5 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold"
                      >
                        {language === 'el' ? 'Συμβάν' : 'Trigger Event'}
                      </button>
                      <button
                        onClick={() => {
                          sound.playClick();
                          setFsmState('VICTORY');
                        }}
                        className="cursor-pointer px-3 py-1.5 rounded bg-sky-600 hover:bg-sky-500 text-white font-bold"
                      >
                        {language === 'el' ? 'Επίλυση' : 'Resolve'}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* 4. Burger Builder Live Embed */}
              {project.demoType === 'iframe' && (
                <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 h-80">
                  <iframe
                    src="/projects/burgers.html"
                    title="Burger Builder Demo"
                    className="w-full h-full border-0"
                  />
                </div>
              )}
            </div>

            {/* Architecture Highlights */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                {t.modal.keyHighlights}
              </h4>
              <div className="space-y-2">
                {project.keyHighlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-slate-300 font-sans">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Data Flow */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                {t.modal.architectureFlow}
              </h4>
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                {project.architectureFlow.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <span className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-sky-300 font-semibold">
                      {step}
                    </span>
                    {idx < project.architectureFlow.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                {t.modal.stack}
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-300 font-mono text-xs"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-4 bg-slate-850 border-t border-slate-800 flex items-center justify-between shrink-0 font-mono text-xs">
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>{t.projects.githubRepo}</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-semibold flex items-center gap-1.5 transition-colors shadow-md"
                >
                  <span>{t.projects.liveDemo}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-750 text-slate-300 transition-colors cursor-pointer"
            >
              {t.modal.close}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
