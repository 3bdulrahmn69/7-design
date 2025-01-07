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
    <div className="flex flex-col items-center gap-10 xl:mt-4">
      <motion.h1
        className="text-[34px] md:text-[55px] font-medium text-center font-Satoshi leading-none"
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
        className="text-center text-[17px] md:text-[20px] text-primary-text lg:max-w-2xl px-2 lg:px-0 leading-relaxed"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Wrap each word in a motion.span for animation */}
        {[
          'At',
          'Seven',
          'Design',
          'Studio,',
          'we',
          'transform',
          'simple',
          'ideas',
          'into',
          'exceptional',
          'visual',
          'identities',
          'that',
          'elevate',
          'your',
          'brand.',
          'We',
          'believe',
          'that',
        ].map((word, index) => (
          <motion.span key={index} variants={textVariants}>
            {word}{' '}
          </motion.span>
        ))}
        {[
          '"a',
          'logo',
          'and',
          'brand',
          'identity',
          'are',
          'not',
          'just',
          'shapes',
          'they',
          'are',
          'unique',
          'imprints',
          'that',
          'last',
          'forever—no',
          'limits,',
          'no',
          'hassle."',
        ].map((word, index) => (
          <motion.span key={index} variants={textVariants} className="italic">
            {word}{' '}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
};

export default TextAnimation;
