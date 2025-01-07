import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ReactLenis } from 'lenis/react';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import HomePage from './pages/home/HomePage';
import NotFound from './pages/notFound/NotFound';

const App = () => {
  return (
    <ReactLenis root>
      <BrowserRouter>
        <InnerApp />
      </BrowserRouter>
    </ReactLenis>
  );
};

const InnerApp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'ar'],
    fallbackLng: 'en',
    detection: {
      order: ['cookie', 'localStorage', 'htmlTag', 'subdomain'],
      lookupFromPathIndex: 0,
      caches: ['cookie'],
      checkWhitelist: true,
    },
    backend: {
      loadPath: '/languages/{{lng}}/translation.json',
    },
    whitelist: ['en', 'ar'],
    nonExplicitWhitelist: true,
  });

export default App;
