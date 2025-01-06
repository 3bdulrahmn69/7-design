import { motion } from 'framer-motion';

const TextAnimation = () => {
  const textVariants = {
    hidden: { opacity: 0, filter: 'blur(10px)' }, // Initial state: hidden with blur
    visible: {
      opacity: 1,
      filter: 'blur(0px)', // Final state: visible with no blur
      transition: { duration: 1, ease: 'easeOut' }, // Smooth transition
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, // Adds a delay between words
      },
    },
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <motion.h1
        className="lg:text-7xl text-5xl font-normal text-center font-Satoshi"
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
                index === 2 ? 'font-Instrument font-normal italic' : ''
              }
              variants={textVariants}
            >
              {word}{' '}
            </motion.span>
          )
        )}
      </motion.h1>
      <motion.p
        className="text-center lg:text-lg text-sm py-4 text-secondary-text lg:max-w-2xl max-w-xs"
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
          '"a',
          'logo',
          'and',
          'brand',
          'identity',
          'are',
          'not',
          'just',
          'shapes;',
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
          <motion.span
            key={index}
            variants={textVariants}
            className={word.includes('"') ? 'italic' : ''}
          >
            {word}{' '}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
};

export default TextAnimation;
