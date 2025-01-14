import { useEffect, useMemo } from 'react';
import { Triangle } from 'react-loader-spinner';

const LoaderFullPage = () => {
  const isDarkMode = useMemo(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return true; // Default to dark mode
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }
  }, [isDarkMode]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-colors duration-300 ${
        isDarkMode ? 'bg-primaryDarkBlack' : 'bg-primaryLightWhite'
      }`}
      role="status"
      aria-live="polite"
      aria-label="Page is loading, please wait."
    >
      <Triangle
        visible={true}
        height={80}
        width={80}
        color="#FEDA00"
        ariaLabel="Loading spinner in triangle shape"
        wrapperStyle={{}}
      />
    </div>
  );
};

export default LoaderFullPage;
