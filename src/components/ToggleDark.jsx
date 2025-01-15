import { useState, useEffect } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const ToggleDark = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme === 'light') {
        return false;
      }
      localStorage.setItem('theme', 'dark');
      return true;
    }
    return true;
  });

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={toggleTheme}
      className="h-10 w-10 flex items-center justify-center bg-gray-200 dark:bg-primaryDarkBlack text-gray-800 dark:text-primaryLightWhite rounded-md shadow-md border border-gray-300 dark:border-secondary-text focus:outline-none"
    >
      {isDarkMode ? <MdDarkMode size={24} /> : <MdLightMode size={24} />}
    </button>
  );
};

export default ToggleDark;
