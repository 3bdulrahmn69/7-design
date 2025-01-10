import PropTypes from 'prop-types';
import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { cn } from '../lib/utils';

const MovingSliderHover = ({
  children,
  speed = 50,
  orientation = 'row',
  direction = 'normal',
  arrayNumber = 5,
  enableHover = false,
  hoverSpeed,
  className,
}) => {
  const controls = useAnimation();
  const isVertical = orientation === 'col';
  const scrollAxis = isVertical ? 'y' : 'x';

  // Dynamically compute scroll values based on orientation and direction
  const scrollValues = useMemo(() => {
    if (direction === 'normal') {
      return isVertical ? ['0%', '-50%'] : ['0%', '-50%'];
    } else {
      return isVertical ? ['-50%', '0%'] : ['-50%', '0%'];
    }
  }, [direction, isVertical]);

  const lastTimestampRef = useRef(Date.now());
  const hoverSpeedMultiplier = 3;

  // Memoized animation start function
  const startAnimation = useCallback(
    (duration) => {
      const elapsedTime = (Date.now() - lastTimestampRef.current) / 1000;
      let progress;

      // For reverse direction, ensure it starts from -50% or similar for the reverse flow
      if (direction === 'reverse') {
        progress = (elapsedTime % duration) / duration; // Set progress correctly for reverse
      } else {
        progress = (elapsedTime % duration) / duration;
      }

      controls.start({
        [scrollAxis]: scrollValues,
        transition: {
          duration,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
          from: progress,
        },
      });
      lastTimestampRef.current = Date.now(); // Update timestamp
    },
    [controls, scrollAxis, scrollValues, direction]
  );

  // Start animation when speed changes or component is mounted
  useEffect(() => {
    startAnimation(speed); // Start with normal speed

    // Make sure the animation is reset when the component mounts
    return () => {
      controls.stop(); // Stop animation on unmount to prevent unwanted side effects
    };
  }, [speed, startAnimation, controls]);

  // Handle mouse enter and leave events
  const handleMouseEnter = useCallback(() => {
    if (enableHover)
      startAnimation(hoverSpeed ? hoverSpeed : speed * hoverSpeedMultiplier);
  }, [enableHover, startAnimation, speed, hoverSpeed]);

  const handleMouseLeave = useCallback(() => {
    if (enableHover) startAnimation(speed);
  }, [enableHover, startAnimation, speed]);

  return (
    <div
      className={cn('relative flex items-center justify-center', className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
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
          animate={controls}
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

MovingSliderHover.propTypes = {
  children: PropTypes.node,
  speed: PropTypes.number,
  orientation: PropTypes.oneOf(['row', 'col']),
  direction: PropTypes.oneOf(['normal', 'reverse']),
  arrayNumber: PropTypes.number,
  enableHover: PropTypes.bool,
  hoverSpeed: PropTypes.number,
  className: PropTypes.string,
};

export default React.memo(MovingSliderHover);
