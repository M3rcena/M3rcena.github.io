import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language, TRANSLATIONS, Translations } from '../data/translations';
import { sound } from '../utils/soundEngine';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio_lang');
    if (saved === 'el' || saved === 'en') return saved;
    // Autodetect browser Greek
    if (typeof navigator !== 'undefined' && navigator.language?.startsWith('el')) {
      return 'el';
    }
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('portfolio_lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    sound.playClick(1000, 0.03);
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    sound.playClick(1000, 0.03);
    setLanguageState((prev) => (prev === 'en' ? 'el' : 'en'));
  };

  const t = TRANSLATIONS[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
