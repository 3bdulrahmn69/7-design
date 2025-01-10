import PropTypes from 'prop-types';
import { motion, useAnimation, useInView } from 'motion/react';
import { useEffect, useState, useRef } from 'react';

const CounterCard = ({ num, symbol, title, description }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start({
        count: num,
        transition: {
          duration: 1.5,
          ease: 'easeOut',
        },
      });
      setHasAnimated(true);
    }
  }, [inView, num, hasAnimated, controls]);

  return (
    <div
      ref={ref}
      className="rounded-site border-[1px] border-secondary-text p-4"
      aria-label={`${title} statistics`}
    >
      <div className="flex items-center">
        <span className="text-lg md:text-2xl font-semibold">
          {symbol}
        </span>
        <motion.span
          className="text-2xl md:text-4xl font-bold text-primary mr-2 ml-1"
          initial={{ count: 0 }}
          animate={controls}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          onUpdate={(latest) => {
            document.querySelector(`[data-counter="${title}"]`).innerText =
              Math.floor(latest.count);
          }}
          data-counter={title}
        >
          {Math.floor(num)}
        </motion.span>
        <span className="text-lg md:text-2xl font-semibold 0">{title}</span>
      </div>
      <p className="text-primary-text mt-2">{description}</p>
    </div>
  );
};

CounterCard.propTypes = {
  num: PropTypes.number.isRequired,
  symbol: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CounterCard;
