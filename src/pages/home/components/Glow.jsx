import { useEffect, useState } from 'react';

const Glow = () => {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const offset = -window.scrollY;
      setScrollOffset(Math.min(offset, 400)); // Adjust max scroll offset for effect
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="z-0 mt-28">
      <div className="gradientGlow"></div>
    </div>
  );
};

export default Glow;
