import { useState } from 'react';
import { FiGlobe } from 'react-icons/fi'; // Globe icon from react-icons

const Lang = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon for language selection */}
      <button className="flex items-center justify-center w-10 h-10 rounded-full bg-primary hover:bg-primaryDark text-white focus:outline-none">
        <FiGlobe size={24} />
      </button>

      {/* Dropdown for language options */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 mt-2 w-24 bg-white text-black border border-gray-300 rounded-md shadow-lg text-center transition-all duration-300 ease-in-out ${
          isHovered
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <ul className="py-1">
          <li className="p-2 hover:bg-gray-100 cursor-pointer">EN</li>
          <li className="p-2 hover:bg-gray-100 cursor-pointer">AR</li>
        </ul>
      </div>
    </div>
  );
};

export default Lang;
