import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../../lib/utils';

const Glow = ({ isMoving = false, className, shrink = true }) => {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const offset = -window.scrollY;
      setScrollOffset(Math.min(offset, 400));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={cn(
        'relative py-16 w-full blur-[30px] md:blur-[40px] z-0',
        className
      )}
      style={{
        transform: isMoving
          ? `translateY(${scrollOffset / 16}px)`
          : 'translateY(0)',
        transition: 'transform 0.3s ease-out',
      }}
    >
      <div
        className={`${shrink ? 'gradientGlowParent' : 'gradientGlowParent-no'}`}
      ></div>
      <div
        className={`${shrink ? 'gradientGlowChild' : 'gradientGlowChild-no'}`}
      ></div>
    </div>
  );
};

Glow.propTypes = {
  isMoving: PropTypes.bool,
  className: PropTypes.string,
  shrink: PropTypes.bool,
};

export default Glow;
