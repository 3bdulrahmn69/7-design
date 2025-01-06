import { useEffect, useState } from 'react';

const Glow = () => {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrollOffset(Math.min(offset, 400));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {' '}
      <div className="overflow-hidden h-36 -z-0">
        {/* Glowing Background */}
        <div className="absolute -bottom-10 flex items-center justify-center bg-black -z-0 ">
          {/* Outer Glowing Background */}
          <div
            className="absolute w-[600px] h-[300px] blur-[150px] bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 opacity-60 rounded-full"
            style={{
              transform: `translateY(${scrollOffset / 4}px)`,
            }}
          ></div>

          {/* Inner Glowing Background */}
          <div
            className="absolute w-[400px] h-[200px] blur-[100px] bg-gradient-to-r from-white via-orange-200 to-yellow-600 opacity-70 rounded-full"
            style={{
              transform: `translateY(${scrollOffset / 6}px)`,
            }}
          ></div>
        </div>

        {/* Glowing Background */}
        <div className="absolute -bottom-10 flex items-center justify-center bg-black -z-0">
          {/* Outer Glowing Background */}
          <div
            className="absolute w-[600px] h-[300px] blur-[150px] bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 opacity-60 rounded-full"
            style={{
              transform: `translateY(${scrollOffset / 4}px)`,
            }}
          ></div>
          {/* Inner Glowing Background */}
          <div
            className="absolute w-[400px] h-[200px] blur-[100px] bg-gradient-to-r from-white via-orange-200 to-yellow-600 opacity-70 rounded-full"
            style={{
              transform: `translateY(${scrollOffset / 6}px)`,
            }}
          ></div>
        </div>

        <div className="absolute -bottom-10 flex items-center justify-center bg-black">
          <div className="absolute w-[300px] h-[100px] blur-[100px] bg-white"></div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-[30px] blur-[50px] bg-black"></div>
    </div>
  );
};

export default Glow;
