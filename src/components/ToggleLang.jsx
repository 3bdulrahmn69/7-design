import i18n from 'i18next';
import { useState, useEffect } from 'react';

const ToggleLang = () => {
  const [lang, setLang] = useState(i18n.language);

  const setTextDirection = (language) => {
    document.body.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language; // Set language attribute for SEO
  };

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang); // Change language dynamically
    setLang(newLang); // Update local state
    setTextDirection(newLang); // Update direction and lang attribute
  };

  useEffect(() => {
    setTextDirection(lang); // Initial direction setting
  }, [lang]);

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleLanguage}
        className="h-10 w-10 bg-gray-200 dark:bg-primaryDarkBlack text-gray-800 dark:text-primaryLightWhite rounded-md shadow-md border border-gray-300 dark:border-secondary-text focus:outline-none"
        aria-label={`Switch to ${lang === 'en' ? 'Arabic' : 'English'}`}
      >
        {lang === 'en' ? 'EN' : 'AR'}
      </button>
    </div>
  );
};

export default ToggleLang;
