import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const [circlePosition, setCirclePosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const updatePosition = (event) => {
      setCirclePosition({
        top: event.clientY - 180,
        left: event.clientX - 510,
      });
    };

    window.addEventListener('mousemove', updatePosition);

    // Clean up the event listener
    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
    <div className="grid-bg min-h-screen bg-primaryLightWhite text-primaryDarkBlack dark:bg-primaryDarkBlack dark:text-primaryLightWhite flex items-center justify-center overflow-hidden">
      <div className="text-center space-y-10 px-6">
        <div className="relative">
          <h1 className="text-9xl font-extrabold animate-pulse drop-shadow-lg">
            404
          </h1>
          <div
            className="absolute w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-50 animate-ping-slow"
            style={{
              top: `${circlePosition.top - 32}px`, // Adjust for the circle size (centered)
              left: `${circlePosition.left - 32}px`, // Adjust for the circle size (centered)
            }}
          ></div>
        </div>
        <h2 className="text-4xl font-semibold tracking-wide">Page Not Found</h2>
        <p className="text-lg max-w-lg mx-auto">
          Oops! The page you are looking for doesn&apos;t exist or has been
          moved. Let&apos;s get you back on track.
        </p>
        <Link
          to="/"
          className="relative inline-block px-10 py-4 mt-4 bg-black text-white font-medium text-lg rounded-lg border border-gray-500 shadow-lg transition-transform transform focus:outline-none focus:ring-4 focus:ring-yellow-300 overflow-hidden group"
        >
          <span className="absolute -top-4 -right-2 h-12 w-12 bg-gradient-to-br from-yellow-400 to-transparent rounded-full transition-transform transform duration-300 group-hover:scale-150"></span>
          <div className="relative overflow-hidden">
            <span className="block transition-transform duration-300 group-hover:-translate-y-full">
              Go Back Home
            </span>
            <span className="absolute inset-0 block transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-yellow-500">
              Go Back Home
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
