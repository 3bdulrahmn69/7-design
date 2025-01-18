import PropTypes from 'prop-types';
import { cn } from '../../../lib/utils';
import { FaStar } from 'react-icons/fa'; // Import star icon

const TestimonialCard = ({ name, desc, title, image, className }) => {
  return (
    <figure
      className={cn(
        'bg-secondaryLightWhite dark:bg-secondaryDarkBlack mx-2 rounded-site p-6 min-w-fit h-[255px] border-[1px] border-secondary-text flex flex-col gap-3',
        className
      )}
      aria-labelledby={`testimonial-${name}`}
    >
      <header className="flex items-center">
        <div className="flex items-center">
          <img
            src={image}
            alt={`${name}'s profile`}
            className="w-9 h-9 rounded-full mr-4 select-none"
            loading="lazy"
          />
        </div>
        <div>
          <h2 id={`testimonial-${name}`} className="font-medium text-base">
            {name}
          </h2>
          <div className="flex items-center text-">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className="mr-1"
                style={{ fill: 'url(#icon-gradient)' }}
              />
            ))}
          </div>
        </div>
      </header>
      <blockquote
        className="leading-relaxed font-normal text-primary-text max-w-xs"
        aria-label={`Testimonial description from ${name}`}
      >
        {desc}
      </blockquote>
      <figcaption
        className="text-end text-primary-text"
        aria-label={`Testimonial source: ${title}`}
      >
        — <span className="text-sm">{title}</span>
      </figcaption>
    </figure>
  );
};

TestimonialCard.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default TestimonialCard;
