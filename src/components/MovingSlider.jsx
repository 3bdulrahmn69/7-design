import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const MovingSlider = ({
  children,
  speed,
  orientation,
  direction,
  arrayNumber,
  enableHover,
  className,
}) => {
  const [hovered, setHovered] = useState(false);

  const scrollDirection = (() => {
    if (orientation === 'row') {
      return direction === 'normal' ? ['0%', '-50%'] : ['-50%', '0%'];
    } else {
      return direction === 'normal' ? ['0%', '-50%'] : ['-50%', '0%'];
    }
  })();

  const isVertical = orientation === 'col';
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
        className={`bg-primaryLightWhite dark:bg-primaryDarkBlack w-full flex items-center relative overflow-hidden ${
          isVertical ? 'h-full' : ''
        }`}
        dir="ltr"
      >
        <div
          className={`absolute ${
            isVertical
              ? 'top-0 left-0 w-full h-12'
              : '-left-4 bottom-0 h-full w-12'
          } bg-gradient-to-r from-primaryLightWhite to-primaryLightWhite dark:from-primaryDarkBlack dark:to-primaryDarkBlack blur-[20px] pointer-events-none z-10 opacity-80`}
        />

        <motion.div
          key={hovered}
          className="flex items-center"
          style={{ flexDirection: isVertical ? 'column' : 'row' }}
          animate={isVertical ? { y: scrollDirection } : { x: scrollDirection }}
          transition={{
            duration: animationDuration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          {[...Array(arrayNumber)].map((_, i) => (
            <React.Fragment key={i}>{children}</React.Fragment>
          ))}
        </motion.div>

        <div
          className={`absolute ${
            isVertical
              ? 'bottom-0 left-0 w-full h-12'
              : '-right-4 top-0 h-full w-12'
          } bg-gradient-to-l from-primaryLightWhite to-primaryLightWhite dark:from-primaryDarkBlack dark:to-primaryDarkBlack blur-[20px] pointer-events-none z-10 opacity-80`}
        />
      </div>
    </div>
  );
};

MovingSlider.propTypes = {
  children: PropTypes.node,
  speed: PropTypes.number,
  orientation: PropTypes.oneOf(['row', 'col']),
  direction: PropTypes.oneOf(['normal', 'reverse']),
  arrayNumber: PropTypes.number,
  enableHover: PropTypes.bool,
  className: PropTypes.string,
};

MovingSlider.defaultProps = {
  speed: 50,
  orientation: 'row',
  direction: 'normal',
  arrayNumber: 5,
  enableHover: false,
};

export default MovingSlider;
