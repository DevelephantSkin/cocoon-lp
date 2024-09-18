import React, { createContext, useState, useContext, useEffect } from 'react';
import pt from '../locales/pt-br.json';
import en from '../locales/en.json';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const browserLanguage = navigator.language.startsWith('pt') ? 'pt' : 'en';
    setLanguage(browserLanguage);
  }, []);

  const translations = language === 'pt' ? pt : en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
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
