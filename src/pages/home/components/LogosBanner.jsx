import React from 'react';
import { motion } from 'motion/react';
import BannerImg from './BannerImg';
import { myLogos } from '../../../services/myLogos';

const LogosBanner = () => {
  return (
    <div className="relative flex items-center justify-center">
      <div className="bg-white dark:bg-black w-full md:h-36 h-24 flex items-center relative overflow-x-hidden">
        {/* Left shadow */}
        <div className="absolute -left-4 bottom-0 h-full w-12 bg-gradient-to-r from-white to-white dark:from-black dark:to-black blur-[20px] pointer-events-none z-10 opacity-80" />

        {/* Logos scrollable container */}
        <motion.div
          className="flex items-center"
          animate={{
            x: ['-50%', '0%'], // Animate horizontally to create the loop
          }}
          transition={{
            duration: 50, // The total duration for the loop, adjust as needed
            ease: 'linear', // Continuous smooth scrolling
            repeat: Infinity, // Loop infinitely
            repeatType: 'loop', // Looping behavior without a gap
          }}
        >
          {[...Array(3)].map((_, i) => (
            <React.Fragment key={i}>
              {myLogos.map((myLogo, idx) => (
                <BannerImg key={idx} img={myLogo.logo} link={myLogo.link} />
              ))}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Right shadow */}
        <div className="absolute -right-4 top-0 h-full w-12 bg-gradient-to-l from-white to-white dark:from-black dark:to-black blur-[20px] pointer-events-none z-10 opacity-80" />
      </div>
    </div>
  );
};

export default LogosBanner;
