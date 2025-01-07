import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const MovingSlider = ({ children, speed, direction, enableHover }) => {
  const [hovered, setHovered] = useState(false);

  const scrollDirection =
    direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'];
  const animationDuration = hovered ? speed * 2 : speed;

  const handleMouseEnter = () => {
    if (enableHover) setHovered(true);
  };

  const handleMouseLeave = () => {
    if (enableHover) setHovered(false);
  };

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="bg-white dark:bg-black w-full flex items-center relative overflow-x-hidden">
        <div className="absolute -left-4 bottom-0 h-full w-12 bg-gradient-to-r from-white to-white dark:from-black dark:to-black blur-[20px] pointer-events-none z-10 opacity-80" />

        <motion.div
          key={hovered}
          className="flex items-center"
          animate={{ x: scrollDirection }}
          transition={{
            duration: animationDuration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          {[...Array(5)].map((_, i) => (
            <React.Fragment key={i}>{children}</React.Fragment>
          ))}
        </motion.div>

        <div className="absolute -right-4 top-0 h-full w-12 bg-gradient-to-l from-white to-white dark:from-black dark:to-black blur-[20px] pointer-events-none z-10 opacity-80" />
      </div>
    </div>
  );
};

MovingSlider.propTypes = {
  children: PropTypes.node,
  speed: PropTypes.number,
  direction: PropTypes.oneOf(['left', 'right']),
  enableHover: PropTypes.bool,
};

MovingSlider.defaultProps = {
  speed: 50,
  direction: 'left',
  enableHover: false,
};

export default MovingSlider;
