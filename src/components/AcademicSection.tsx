import { motion } from 'framer-motion';
import {
  Award,
  GraduationCap
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getCourseworkItems, getProfileInfo } from '../data/portfolioData';

export default function AcademicSection() {
  const { language, t } = useLanguage();
  const profile = getProfileInfo(language);
  const coursework = getCourseworkItems(language);

  return (
    <section id="academic" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 font-bold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" />
            <span>{t.academic.sectionBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            {t.academic.heading}
          </h2>
          <p className="text-slate-400 text-sm font-sans leading-relaxed">
            {t.academic.subtitle}. {language === 'el'
              ? 'Ένα απαιτητικό πρόγραμμα σπουδών που εκτείνεται από τη σύνθεση κυκλωμάτων ψηφιακής λογικής σε FPGA, έως τη διαχείριση μνήμης σε πυρήνες λειτουργικών συστημάτων και την ασυμπτωτική αλγοριθμική πολυπλοκότητα.'
              : 'A rigorous curriculum spanning digital logic silicon synthesis, OS kernel memory management, and asymptotic algorithmic complexity.'}
          </p>
        </div>

        {/* University Highlight Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-purple-950/40 via-slate-900 to-indigo-950/40 border border-purple-500/30 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/40 flex items-center justify-center shrink-0 shadow-inner">
              <Award className="w-7 h-7 text-purple-400" />
            </div>
            <div>
              <div className="font-mono text-xs text-purple-400 font-bold uppercase tracking-wider">
                {language === 'el' ? 'Προπτυχιακό Πρόγραμμα Σπουδών' : 'Undergraduate Degree Program'}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                {t.academic.degreeName}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl font-sans">
                {profile.university} • {profile.department} ({profile.location})
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/80 border border-purple-500/20 font-mono text-xs space-y-1.5 shrink-0 self-stretch md:self-auto">
            <div className="flex items-center justify-between gap-4 text-slate-400">
              <span>{language === 'el' ? 'Κατάσταση:' : 'Status:'}</span>
              <span className="text-emerald-400 font-bold">{language === 'el' ? 'Ενεργή Φοίτηση' : 'Active / Ongoing'}</span>
            </div>
            <div className="flex items-center justify-between gap-4 text-slate-400">
              <span>{language === 'el' ? 'Κατεύθυνση:' : 'Discipline:'}</span>
              <span className="text-white font-bold">{language === 'el' ? 'Συστήματα & Λογισμικό' : 'Systems & Software'}</span>
            </div>
          </div>
        </div>

        {/* Verified Coursework Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {coursework.map((course, idx) => (
            <motion.div
              key={course.code}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 flex flex-col justify-between shadow-lg transition-all hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2 font-mono text-xs">
                  <span className="text-purple-400 font-bold">{course.code}</span>
                  <span className="px-2 py-0.5 rounded-full bg-slate-950 text-slate-400 text-[10px] border border-slate-850">
                    {course.category}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">{course.title}</h4>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  {course.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-850 flex flex-wrap gap-1.5">
                {course.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-slate-950 border border-slate-850 font-mono text-[10px] text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
