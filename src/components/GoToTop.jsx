import { useLenis } from 'lenis/react';
import { useEffect, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { GoHome } from 'react-icons/go';
import { Link, useLocation } from 'react-router-dom';

const GoBackTop = () => {
  const lenis = useLenis();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-4 h-10 w-10 flex items-center justify-center bg-gray-200 dark:bg-primaryDarkBlack text-gray-800 dark:text-primaryLightWhite rounded-md shadow-md border border-gray-300 dark:border-secondary-text focus:outline-none transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {isHomePage ? (
        <button onClick={() => lenis.scrollTo(0)}>
          <IoIosArrowUp size={24} />
        </button>
      ) : (
        <Link to="/">
          <GoHome size={24} />
        </Link>
      )}
    </div>
  );
};

export default GoBackTop;
