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
      className={`fixed bottom-20 right-10 h-10 w-10 z-50 flex items-center justify-center bg-primaryLightWhite dark:bg-primaryDarkBlack border border-secondary-text rounded-site ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      tabIndex={isVisible ? 0 : -1}
    >
      {isHomePage ? (
        <button
          onClick={() => lenis.scrollTo(0)}
          aria-label="Scroll to top"
          className="focus:outline-none w-full h-full flex items-center justify-center"
          title="Scroll to top"
        >
          <IoIosArrowUp size={26} className="fill-[url(#icon-gradient)]" />
        </button>
      ) : (
        <Link
          to="/"
          aria-label="Go to homepage"
          prefetch="intent"
          className="focus:outline-none w-full h-full flex items-center justify-center"
          title="Go to homepage"
        >
          <TbHomeMove size={26} className="fill-[url(#icon-gradient)]" />
        </Link>
      )}
    </div>
  );
};

export default GoBackTop;
