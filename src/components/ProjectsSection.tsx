import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  ExternalLink,
  Zap
} from 'lucide-react';
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getProjects } from '../data/portfolioData';
import { ProjectCategory, ProjectData } from '../types';
import { sound } from '../utils/soundEngine';
import { Github } from './BrandIcons';

interface ProjectsSectionProps {
  onSelectProject: (p: ProjectData) => void;
}

export default function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const { language, t } = useLanguage();
  const projects = getProjects(language);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('ALL');

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'ALL', label: t.projects.filterAll },
    { id: 'DESKTOP', label: t.projects.filterDesktop },
    { id: 'DEVELOPER_TOOLS', label: t.projects.filterDevTools },
    { id: 'WEB_APPS', label: t.projects.filterWebApps }
  ];

  const filteredProjects =
    activeCategory === 'ALL'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-orange-400 font-bold uppercase tracking-wider mb-2">
              <Code2 className="w-4 h-4" />
              <span>{t.projects.sectionBadge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
              {t.projects.heading}
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-xl font-sans">
              {t.projects.subheading}
            </p>
          </div>

          {/* Filter Tabs (Flex-wrap to avoid ugly horizontal scrollbars) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  sound.playClick();
                  setActiveCategory(cat.id);
                }}
                className={`cursor-pointer px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${activeCategory === cat.id
                    ? 'bg-slate-800 text-white shadow-sm font-semibold'
                    : 'text-slate-400 hover:text-slate-200'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {filteredProjects.map((project, idx) => {
            const isFeatured = project.id === 'udeler-reborn' && activeCategory === 'ALL';
            const colSpanClass = isFeatured
              ? 'lg:col-span-12'
              : project.id === 'chronogit' && activeCategory === 'ALL'
                ? 'lg:col-span-7'
                : project.id === 'weky' && activeCategory === 'ALL'
                  ? 'lg:col-span-5'
                  : 'lg:col-span-6';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`${colSpanClass} group relative rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 p-5 sm:p-7 md:p-8 flex flex-col justify-between shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1`}
              >
                {/* Accent Top Border Indicator */}
                <div
                  className="absolute top-0 left-8 right-8 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: project.accent }}
                />

                <div className="space-y-4">
                  {/* Category & Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-xs text-sky-400 font-semibold flex items-center gap-1.5">
                      <span
                        className="w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: project.accent }}
                      />
                      <span>{project.categoryLabel}</span>
                    </span>
                    <span className="font-mono text-[10px] sm:text-[11px] px-2.5 py-0.5 rounded-full bg-slate-950 text-orange-400 border border-slate-800 font-medium">
                      {project.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors flex items-center gap-2">
                      <span>{project.name}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-sky-400 shrink-0" />
                    </h3>
                    <p className="text-xs text-slate-400 font-mono mt-1 font-semibold">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {project.summary}
                  </p>

                  {/* Architecture Flow (for Featured cards) */}
                  {isFeatured && (
                    <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-950/80 border border-slate-850 space-y-2 font-mono text-xs">
                      <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                        {t.modal.architectureFlow} (IPC &amp; Stream Pipeline)
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        {project.architectureFlow.map((step, sIdx) => (
                          <React.Fragment key={sIdx}>
                            <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-sky-300 font-semibold text-[11px]">
                              {step}
                            </span>
                            {sIdx < project.architectureFlow.length - 1 && (
                              <ArrowRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Metrics Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-3 rounded-xl bg-slate-950/60 border border-slate-850 font-mono text-xs">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="min-w-0">
                        <div className="text-[10px] text-slate-500 truncate">{m.label}</div>
                        <div className="text-slate-200 font-semibold text-[11px] mt-0.5 truncate">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Controls & Tech Stack */}
                <div className="mt-6 pt-4 border-t border-slate-855 space-y-4">
                  {/* Stack Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 rounded bg-slate-950 text-slate-400 font-mono text-[10px] sm:text-[11px] border border-slate-850"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* Interactive Trigger Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                    <button
                      onClick={() => {
                        sound.playClick();
                        onSelectProject(project);
                      }}
                      className="cursor-pointer font-mono text-xs text-sky-400 hover:text-sky-300 font-bold flex items-center gap-1.5 transition-colors group/btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-md"
                    >
                      <Zap className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                      <span>{t.projects.viewArchitecture}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform shrink-0" />
                    </button>

                    <div className="flex items-center gap-2 shrink-0">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="cursor-pointer p-2 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-850 transition-colors"
                          title="View Source on GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="cursor-pointer p-2 rounded-lg bg-slate-950 hover:bg-slate-800 text-slate-400 hover:text-sky-400 border border-slate-850 transition-colors"
                          title="Open Live Release or Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
