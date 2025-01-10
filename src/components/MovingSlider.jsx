import PropTypes from 'prop-types';
import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const MovingSlider = ({
  children,
  speed = 50,
  orientation = 'row',
  direction = 'normal',
  arrayNumber = 5,
  className,
}) => {
  const scrollDirection = (() => {
    if (orientation === 'row') {
      return direction === 'normal' ? ['-50%', '0%'] : ['0%', '-50%'];
    } else {
      return direction === 'normal' ? ['-50%', '0%'] : ['0%', '-50%'];
    }
  })();

  const isVertical = orientation === 'col';

  return (
    <div className={cn('relative flex items-center justify-center', className)}>
      <div
        className={`w-full flex items-center relative overflow-hidden ${
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
          className="flex items-center"
          style={{ flexDirection: isVertical ? 'column' : 'row' }}
          animate={isVertical ? { y: scrollDirection } : { x: scrollDirection }}
          transition={{
            duration: speed,
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
  className: PropTypes.string,
};

export default MovingSlider;
