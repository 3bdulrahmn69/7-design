import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const MovingSlider = ({
  children,
  speed,
  direction,
  enableHover,
  className,
}) => {
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
      className={cn('relative flex items-center justify-center', className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="bg-primaryLightWhite dark:bg-primaryDarkBlack w-full flex items-center relative overflow-x-hidden"
        dir="ltr"
      >
        <div className="absolute -left-4 bottom-0 h-full w-12 bg-gradient-to-r from-primaryLightWhite to-primaryLightWhite dark:from-primaryDarkBlack dark:to-primaryDarkBlack blur-[20px] pointer-events-none z-10 opacity-80" />

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

        <div className="absolute -right-4 top-0 h-full w-12 bg-gradient-to-l from-primaryLightWhite to-primaryLightWhite dark:from-primaryDarkBlack dark:to-primaryDarkBlack blur-[20px] pointer-events-none z-10 opacity-80" />
      </div>
    </div>
  );
};

MovingSlider.propTypes = {
  children: PropTypes.node,
  speed: PropTypes.number,
  direction: PropTypes.oneOf(['left', 'right']),
  enableHover: PropTypes.bool,
  className: PropTypes.string,
};

MovingSlider.defaultProps = {
  speed: 50,
  direction: 'left',
  enableHover: false,
};

export default MovingSlider;
