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
    <div className="overflow-hidden">
      <div className="h-16 -z-0">
        {/* Glowing Background */}
        <div className="absolute -bottom-16 flex items-center justify-center bg-black -z-0">
          {/* Outer Glowing Background */}
          <div
            className="absolute w-[600px] h-[300px] blur-[150px] bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 opacity-60 rounded-full"
            style={{
              transform: `translateY(${scrollOffset / 4}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          ></div>
          {/* Inner Glowing Background */}
          <div
            className="absolute w-[100px] h-[200px] blur-[100px] bg-gradient-to-r from-primaryOrange via-orange-200 to-yellow-600 opacity-70 rounded-full"
            style={{
              transform: `translateY(${scrollOffset / 6}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          ></div>
        </div>

        {/* Glowing Background again (duplicate) */}
        <div className="absolute -bottom-10 flex items-center justify-center bg-black -z-0">
          {/* Outer Glowing Background */}
          <div
            className="absolute w-[600px] h-[300px] blur-[150px] bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 opacity-60 rounded-full"
            style={{
              transform: `translateY(${scrollOffset / 4}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          ></div>
          {/* Inner Glowing Background */}
          <div
            className="absolute w-[100px] h-[200px] blur-[100px] bg-gradient-to-r from-primaryOrange via-orange-200 to-yellow-600 opacity-70 rounded-full"
            style={{
              transform: `translateY(${scrollOffset / 6}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          ></div>
        </div>

        <div className="absolute -bottom-10 flex items-center justify-center bg-black">
          <div className="absolute w-[500px] h-[100px] blur-[100px] bg-white"></div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-full h-[30px] blur-[50px] bg-white dark:bg-black"></div>
      <div className="absolute bottom-0 left-0 w-full h-[30px] blur-[50px] bg-white dark:bg-black"></div>
      <div className="absolute bottom-0 left-0 w-full h-[30px] blur-[50px] bg-white dark:bg-black"></div>
    </div>
  );
};

export default Glow;
