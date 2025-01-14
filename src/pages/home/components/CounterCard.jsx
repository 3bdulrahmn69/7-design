import PropTypes from 'prop-types';
import { useEffect, useState, useRef } from 'react';
import { motion, useAnimation, useInView } from 'motion/react';

const CounterCard = ({ num, symbol, title, icon }) => {
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
      className="rounded-site border-[1px] border-secondary-text bg-secondaryLightWhite dark:bg-secondaryDarkBlack p-4 flex justify-between"
      aria-label={`${title} statistics`}
    >
      <figure className="w-[70px] xl:w-[80px] flex items-center justify-center">
        <img src={icon} alt={title} className="no-drag-img" />
      </figure>
      <div className="flex flex-col items-center justify-center w-2/3">
        <p className="flex items-center bg-gradient-to-t from-[#FF7B00] via-[#FFDA00] to-[#FFE48B] bg-clip-text text-transparent">
          <motion.span
            className="text-xl md:text-3xl font-bold mr-1"
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
          <span className="text-lg md:text-xl font-semibold">{symbol}</span>
        </p>
        <p className="text-lg md:text-xl font-semibold w-full text-center">
          {title}
        </p>
      </div>
    </div>
  );
};

CounterCard.propTypes = {
  num: PropTypes.number.isRequired,
  symbol: PropTypes.string,
  title: PropTypes.string.isRequired,
  icon: PropTypes.node,
};

export default CounterCard;
