import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Glow = ({ isMoving }) => {
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
      className="relative py-16 w-full blur-[40px]"
      style={{
        transform: isMoving
          ? `translateY(${scrollOffset / 12}px)`
          : 'translateY(0)',
        transition: 'transform 0.3s ease-out',
      }}
    >
      <div className="gradientGlowParent"></div>
      <div className="gradientGlowChild"></div>
    </div>
  );
};

Glow.propTypes = {
  isMoving: PropTypes.bool,
};

export default Glow;
