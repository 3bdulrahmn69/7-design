import { useState, useEffect } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const ToggleDark = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const localTheme = localStorage.getItem('theme');
    // Default to dark mode if no theme is set
    return localTheme ? localTheme === 'dark' : true;
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
      {isDarkMode ? <MdLightMode size={24} /> : <MdDarkMode size={24} />}
    </button>
  );
};

export default ToggleDark;
