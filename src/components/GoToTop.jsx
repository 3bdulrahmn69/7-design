import { useEffect, useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLenis } from 'lenis/react';
import { IoIosArrowUp } from 'react-icons/io';
import { TbHomeMove } from 'react-icons/tb';

const GoBackTop = () => {
  const lenis = useLenis();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const isHomePage = location.pathname === '/';

  const handleScroll = useCallback(() => {
    setIsVisible(window.scrollY > 200);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      className={`fixed bottom-4 right-4 h-10 w-10 z-10 flex items-center justify-center bg-gray-200 dark:bg-primaryDarkBlack text-gray-800 dark:text-primaryLightWhite rounded-md shadow-md border border-gray-300 dark:border-secondary-text focus:outline-none transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      tabIndex={isVisible ? 0 : -1}
    >
      {isHomePage ? (
        <button
          onClick={() => lenis.scrollTo(0)}
          aria-label="Scroll to top"
          className="focus:outline-none"
          title="Scroll to top"
        >
          <IoIosArrowUp size={24} />
        </button>
      ) : (
        <Link
          to="/"
          aria-label="Go to homepage"
          prefetch="intent"
          title="Go to homepage"
        >
          <TbHomeMove size={24} />
        </Link>
      )}
    </div>
  );
};

export default GoBackTop;
