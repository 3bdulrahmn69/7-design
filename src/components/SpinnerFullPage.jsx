import { useEffect, useState } from 'react';
import Spinner from './Spinner';

const SpinnerFullPage = () => {
  const [isDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') !== 'light';
    }
    return true; // default to dark mode if localStorage is not available
  });

  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';
    document.body.classList.toggle('dark', isDarkMode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [isDarkMode]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        isDarkMode ? 'bg-primaryDarkBlack' : 'bg-primaryLightWhite'
      }`}
      role="status"
      aria-live="polite"
      aria-label="Loading, please wait"
    >
      <Spinner />
    </div>
  );
};

export default SpinnerFullPage;
