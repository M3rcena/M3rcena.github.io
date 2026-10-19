import {
  Check,
  Copy,
  Cpu,
  Layers,
  Terminal
} from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getArchitectureLayers } from '../data/portfolioData';
import { sound } from '../utils/soundEngine';

export default function ArchitectureMatrix() {
  const { language, t } = useLanguage();
  const layers = getArchitectureLayers(language);
  const [activeLayerId, setActiveLayerId] = useState<string>(layers[0].id);
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const activeLayer = layers.find((l) => l.id === activeLayerId) || layers[0];

  const handleCopyCode = () => {
    sound.playClick(1000, 0.03);
    navigator.clipboard.writeText(activeLayer.codeSnippet);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section id="architecture" className="py-20 sm:py-24 relative overflow-hidden bg-slate-950/60 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 font-bold uppercase tracking-wider">
            <Layers className="w-4 h-4" />
            <span>{t.architecture.sectionBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
            {t.architecture.heading}
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm font-sans leading-relaxed">
            {t.architecture.subtitle}
          </p>
        </div>

        {/* 6-Layer Interactive Ladder & Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Left Column: 6-Tier Interactive Navigation */}
          <div className="lg:col-span-5 space-y-2 sm:space-y-2.5">
            {layers.map((layer) => {
              const isActive = layer.id === activeLayer.id;
              return (
                <button
                  key={layer.id}
                  onClick={() => {
                    sound.playClick();
                    setActiveLayerId(layer.id);
                  }}
                  className={`cursor-pointer w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all flex items-center justify-between gap-3 ${isActive
                      ? 'bg-slate-900 border-slate-700 shadow-xl'
                      : 'bg-slate-950/60 border-slate-850 hover:bg-slate-900/60 hover:border-slate-800'
                    }`}
                  style={{
                    borderLeftWidth: '4px',
                    borderLeftColor: layer.color
                  }}
                >
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-[11px] font-bold shrink-0" style={{ color: layer.color }}>
                        {layer.layerNumber}
                      </span>
                      <span className="text-slate-500">•</span>
                      <span className="font-mono text-xs text-slate-400 truncate">{layer.domain}</span>
                    </div>
                    <div className="text-sm font-bold text-white break-words">{layer.name}</div>
                  </div>

                  <div
                    className="w-2.5 h-2.5 rounded-full transition-transform shrink-0"
                    style={{
                      backgroundColor: layer.color,
                      transform: isActive ? 'scale(1.2)' : 'scale(0.8)',
                      opacity: isActive ? 1 : 0.4
                    }}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Inspector & Code View */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-900 border border-slate-750 shadow-2xl p-5 sm:p-8 space-y-6">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-800">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold" style={{ color: activeLayer.color }}>
                    {activeLayer.layerNumber} // {activeLayer.domain}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 break-words">{activeLayer.name}</h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5 break-words">{activeLayer.role}</p>
              </div>

              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-lg"
                style={{ backgroundColor: `${activeLayer.color}20`, border: `1px solid ${activeLayer.color}50` }}
              >
                <Cpu className="w-5 h-5" style={{ color: activeLayer.color }} />
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
              {activeLayer.description}
            </p>

            {/* Technical Specifications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 p-3.5 sm:p-4 rounded-xl bg-slate-950 border border-slate-850 font-mono text-xs">
              {activeLayer.specs.map((spec, i) => (
                <div key={i} className="space-y-0.5 min-w-0">
                  <div className="text-[10px] text-slate-500 truncate">{spec.label}:</div>
                  <div className="text-slate-200 font-semibold text-[11px] break-words">{spec.value}</div>
                </div>
              ))}
            </div>

            {/* Code Snippet Box */}
            <div className="space-y-2">
              <div className="flex items-center justify-between font-mono text-xs text-slate-400">
                <span className="flex items-center gap-1.5 font-bold text-slate-300 truncate">
                  <Terminal className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>{t.architecture.codeImplementation}</span>
                </span>
                <button
                  onClick={handleCopyCode}
                  className="cursor-pointer text-[11px] text-slate-400 hover:text-white flex items-center gap-1 transition-colors shrink-0"
                >
                  {copiedSnippet ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">{t.architecture.codeCopied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t.architecture.copyCode}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="rounded-xl bg-slate-950 border border-slate-800 p-3 sm:p-4 font-mono text-xs text-slate-300 overflow-x-auto max-w-full">
                <pre className="text-[11px] sm:text-[12px] leading-relaxed text-sky-200">
                  {activeLayer.codeSnippet}
                </pre>
              </div>
            </div>

            {/* Skills Pills */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                {t.architecture.coreCompetencies}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {activeLayer.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-850 font-mono text-[10px] sm:text-xs text-slate-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
