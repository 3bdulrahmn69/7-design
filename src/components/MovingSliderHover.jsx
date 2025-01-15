import PropTypes from 'prop-types';
import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { cn } from '../lib/utils';

const MovingSliderHover = ({
  children,
  speed = 50,
  arrayNumber = 5,
  enableHover = false,
  className,
}) => {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const scrollAxis = 'x';

  const scrollValues = useMemo(() => ['0%', '-100%'], []);

  const lastTimestampRef = useRef(performance.now());

  const startAnimation = useCallback(
    (duration) => {
      const elapsedTime = (performance.now() - lastTimestampRef.current) / 1000;
      const progress = (elapsedTime % duration) / duration;

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
      lastTimestampRef.current = performance.now();
    },
    [controls, scrollAxis, scrollValues]
  );

  const initializeAnimation = useCallback(() => {
    requestAnimationFrame(() => startAnimation(speed));
  }, [startAnimation, speed]);

  useEffect(() => {
    initializeAnimation();

    return () => {
      controls.stop();
    };
  }, [initializeAnimation, controls]);

  const handleTouchStart = useCallback(() => {
    initializeAnimation();
  }, [initializeAnimation]);

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('touchstart', handleTouchStart);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
    };
  }, [handleTouchStart]);

  const handleMouseEnter = useCallback(() => {
    if (enableHover) {
      controls.stop();
    }
  }, [enableHover, controls]);

  const handleMouseLeave = useCallback(() => {
    if (enableHover) {
      initializeAnimation();
    }
  }, [enableHover, initializeAnimation]);

  return (
    <div
      className={cn('relative flex items-center justify-center', className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      <div
        className="w-full flex items-center relative overflow-hidden scrollbar-hide"
        dir="ltr"
      >
        <div className="absolute -left-4 bottom-0 h-full w-12 bg-gradient-to-r from-primaryLightWhite to-primaryLightWhite dark:from-primaryDarkBlack dark:to-primaryDarkBlack blur-[20px] pointer-events-none z-10 opacity-80" />
        <motion.div
          className="flex items-center"
          animate={controls}
          drag="x"
          dragConstraints={containerRef}
        >
          {[...Array(arrayNumber)].map((_, i) => (
            <React.Fragment key={i}>{children}</React.Fragment>
          ))}
        </motion.div>
        <div className="absolute -right-4 top-0 h-full w-12 bg-gradient-to-l from-primaryLightWhite to-primaryLightWhite dark:from-primaryDarkBlack dark:to-primaryDarkBlack blur-[20px] pointer-events-none z-10 opacity-80" />
      </div>
    </div>
  );
};

MovingSliderHover.propTypes = {
  children: PropTypes.node,
  speed: PropTypes.number,
  arrayNumber: PropTypes.number,
  enableHover: PropTypes.bool,
  className: PropTypes.string,
};

export default React.memo(MovingSliderHover);
