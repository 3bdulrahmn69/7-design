import { useState, useEffect } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const ToggleDark = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Set default theme to dark mode if no value is found in localStorage
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'light' ? false : true; // Default to dark mode
    }
    return true; // Default to dark mode if no localStorage value
  });

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply the theme to the body element and store it in localStorage
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
      className="p-2 bg-gray-200 dark:bg-black text-gray-800 dark:text-white rounded-md shadow-md border border-gray-300 dark:border-gray-800 focus:outline-none"
    >
      {isDarkMode ? <MdDarkMode size={24} /> : <MdLightMode size={24} />}
    </button>
  );
};

export default ToggleDark;
