import confetti from 'canvas-confetti';
import {
  AlertCircle,
  Check,
  Clock,
  Copy,
  ExternalLink,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  Zap
} from 'lucide-react';
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getProfileInfo } from '../data/portfolioData';
import { sound } from '../utils/soundEngine';
import { Github, Linkedin } from './BrandIcons';

export default function ContactSection() {
  const { language, t } = useLanguage();
  const profile = getProfileInfo(language);

  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleCopyEmail = () => {
    sound.playClick(1000, 0.03);
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !senderEmail.trim()) return;

    setIsSubmitting(true);
    setErrorMessage(null);
    sound.playClick();

    try {
      const response = await fetch('https://formspree.io/f/xqkrwepq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: senderName,
          email: senderEmail,
          message: message
        })
      });

      if (response.ok) {
        sound.playWindowChime();
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.7 } });
        setSent(true);
        setSenderName('');
        setSenderEmail('');
        setMessage('');
      } else {
        const data = await response.json().catch(() => null);
        if (data && data.errors && data.errors.length > 0) {
          setErrorMessage(data.errors.map((err: any) => err.message).join(', '));
        } else {
          setErrorMessage(
            language === 'el'
              ? 'Η αποστολή απέτυχε. Παρακαλώ προσπαθήστε ξανά ή στείλτε απευθείας email.'
              : 'Message transmission failed. Please try again or reach out directly.'
          );
        }
      }
    } catch {
      setErrorMessage(
        language === 'el'
          ? 'Σφάλμα σύνδεσης δικτύου. Παρακαλώ στείλτε απευθείας email στο michail.frm@gmail.com.'
          : 'Network connection error. Please email directly at michail.frm@gmail.com.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
            <Mail className="w-4 h-4" />
            <span>{t.contact.sectionBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            {t.contact.heading}
          </h2>
          <p className="text-slate-400 text-sm font-sans leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Transmission Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Primary Email Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-sky-400 font-bold">
                  {language === 'el' ? 'ΑΜΕΣΗ ΜΕΤΑΔΟΣΗ' : 'DIRECT TRANSMISSION'}
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              <div>
                <div className="text-xs text-slate-400">{t.contact.primaryEmail}:</div>
                <div className="text-lg font-bold text-white font-mono mt-0.5 break-all">
                  {profile.email}
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={handleCopyEmail}
                  className="cursor-pointer px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-750 text-white font-mono text-xs font-semibold flex items-center gap-2 transition-colors shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">{language === 'el' ? 'Αντιγράφηκε!' : 'Copied to Clipboard!'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>{t.contact.copyEmail}</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${profile.email}`}
                  className="cursor-pointer px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-mono text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                >
                  <span>{language === 'el' ? 'Σύνταξη Email' : 'Compose Mail'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* LinkedIn & GitHub Direct Tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-sky-500/50 transition-all flex flex-col justify-between group shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <div>
                  <Linkedin className="w-6 h-6 text-sky-400 mb-2 group-hover:scale-110 transition-transform" />
                  <div className="font-bold text-white text-sm">LinkedIn</div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">/in/michail-farmakis</div>
                </div>
                <div className="text-sky-400 font-mono text-xs mt-4 flex items-center gap-1 font-semibold">
                  <span>{language === 'el' ? 'Σύνδεση' : 'Connect'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 transition-all flex flex-col justify-between group shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                <div>
                  <Github className="w-6 h-6 text-purple-400 mb-2 group-hover:scale-110 transition-transform" />
                  <div className="font-bold text-white text-sm">GitHub</div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">@m3rcena</div>
                </div>
                <div className="text-purple-400 font-mono text-xs mt-4 flex items-center gap-1 font-semibold">
                  <span>{language === 'el' ? 'Αποθετήρια' : 'Follow Repos'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>
            </div>

            {/* Quick Location Badge */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-850 font-mono text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-orange-400" />
                <span>{t.contact.locationTitle}: {profile.location}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-3.5 h-3.5 text-sky-400" />
                <span>{language === 'el' ? 'Ζώνη Ώρας:' : 'Timezone:'} {profile.timezone}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Connected Formspree Dispatch Message Form */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-900 border border-slate-750 shadow-2xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-sky-400" />
              {language === 'el' ? 'Αποστολή Άμεσου Μηνύματος' : 'Direct Message Dispatcher'}
            </h3>
            <p className="text-xs text-slate-400 font-sans mb-6">
              {language === 'el'
                ? 'Συμπληρώστε το μήνυμά σας παρακάτω. Τα μηνύματα αποστέλλονται απευθείας στο inbox μου μέσω του ασφαλούς API του Formspree.'
                : 'Fill in your message below. Dispatches are sent directly to my inbox via secure Formspree API.'}
            </p>

            <form onSubmit={handleSendMessage} className="space-y-4 font-mono text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="text-slate-300 font-bold block">
                    {t.contact.nameLabel}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder={t.contact.namePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white outline-none focus:border-sky-500 transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="text-slate-300 font-bold block">
                    {t.contact.emailLabel}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white outline-none focus:border-sky-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="text-slate-300 font-bold block">
                  {t.contact.messageLabel}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white outline-none focus:border-sky-500 transition-colors resize-none font-sans"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="text-[11px] text-slate-500 hidden sm:block">
                  {language === 'el' ? 'Κρυπτογραφημένο μέσω Formspree' : 'Protected with Formspree encryption'}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cursor-pointer px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 disabled:opacity-60 text-white font-bold flex items-center gap-2 shadow-lg shadow-sky-500/20 transition-all self-end focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                >
                  {isSubmitting ? (
                    <>
                      <Zap className="w-4 h-4 animate-spin text-white" />
                      <span>{t.contact.sendingBtn}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t.contact.sendBtn}</span>
                    </>
                  )}
                </button>
              </div>

              {sent && (
                <div className="p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-emerald-300 text-xs font-semibold flex items-center gap-2.5 animate-fadeIn">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{t.contact.successMsg}</span>
                </div>
              )}

              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-red-950/60 border border-red-500/50 text-red-300 text-xs font-semibold flex items-center gap-2.5 animate-fadeIn">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
