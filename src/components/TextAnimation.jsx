import { motion } from 'framer-motion';

const TextAnimation = () => {
  const textVariants = {
    hidden: { opacity: 0, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="flex flex-col items-center gap-[19.5px] text-gap xl:mt-4">
      <motion.h1
        className="text-site md:text-site-md font-medium text-center tracking-site leading-site text-primaryDarkBlack dark:text-primaryLightWhite"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Wrap each word in a motion.span for animation */}
        {['From', 'Simple', 'Concept', 'to', 'Iconic', 'Brand'].map(
          (word, index) => (
            <motion.span
              key={index}
              className={
                index === 4
                  ? 'font-Instrument font-normal italic text-[36px] md:text-[58px]'
                  : ''
              }
              variants={textVariants}
            >
              {word}{' '}
            </motion.span>
          )
        )}
      </motion.h1>
      <motion.p
        className="text-center text-[17px] md:text-[20px] text-primary-text lg:max-w-2xl px-6 text md:px-20 lg:px-0 leading-[1.5em] font-medium"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Wrap each word in a motion.span for animation */}
        {[
          'At',
          'Seven',
          'Design',
          'Studio',
          'we',
          'transform',
          'ideas',
          'into',
          'powerful',
          'visual',
          'identities',
          'that',
          'elevate',
          'your',
          'brand.',
          'A',
          'logo',
          'and',
          'brand',
          'identity',
          'aren’t',
          'just',
          'shapes—they’re',
          'lasting',
          'imprints',
          'with',
          'no',
          'limits.',
        ].map((word, index) => (
          <motion.span key={index} variants={textVariants}>
            {word}{' '}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
};

export default TextAnimation;
