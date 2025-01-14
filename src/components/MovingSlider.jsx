import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

const MovingSlider = ({
  children,
  speed = 50,
  orientation = 'row',
  direction = 'normal',
  arrayNumber = 5,
  className,
  innerClassName,
}) => {
  const isVertical = orientation === 'col';

  const scrollDirection = useMemo(() => {
    const normal = ['-50%', '0%'];
    const reverse = ['0%', '-50%'];
    return isVertical
      ? direction === 'normal'
        ? normal
        : reverse
      : direction === 'normal'
      ? normal
      : reverse;
  }, [direction, isVertical]);

  const repeatedChildren = useMemo(
    () =>
      Array.from({ length: arrayNumber }, (_, i) => (
        <React.Fragment key={i}>{children}</React.Fragment>
      )),
    [children, arrayNumber]
  );

  return (
    <div className={cn('relative flex items-center justify-center', className)}>
      <div
        className={cn(
          'w-full flex items-center relative overflow-hidden',
          isVertical && 'h-full'
        )}
        dir="ltr"
      >
        <div
          className={cn(
            'absolute z-10 opacity-80 blur-[20px] pointer-events-none',
            isVertical
              ? 'top-0 left-0 w-full h-12'
              : '-left-4 bottom-0 h-full w-14',
            'bg-gradient-to-r from-primaryLightWhite to-primaryLightWhite dark:from-primaryDarkBlack dark:to-primaryDarkBlack'
          )}
        />

        <motion.div
          className={cn('flex items-center', innerClassName)}
          style={{ flexDirection: isVertical ? 'column' : 'row' }}
          animate={isVertical ? { y: scrollDirection } : { x: scrollDirection }}
          transition={{
            duration: speed,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          {repeatedChildren}
        </motion.div>

        <div
          className={cn(
            'absolute z-10 opacity-80 blur-[20px] pointer-events-none',
            isVertical
              ? 'bottom-0 left-0 w-full h-12'
              : '-right-4 top-0 h-full w-14',
            'bg-gradient-to-l from-primaryLightWhite to-primaryLightWhite dark:from-primaryDarkBlack dark:to-primaryDarkBlack'
          )}
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
  innerClassName: PropTypes.string,
};

export default MovingSlider;
