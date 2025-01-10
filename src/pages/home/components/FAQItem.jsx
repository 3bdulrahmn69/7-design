import PropTypes from 'prop-types';
import { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="border-[1px] border-secondary-text rounded-md shadow-sm mb-4 px-4">
      <button
        onClick={toggleAnswer}
        className="flex justify-between w-full py-4 text-left font-semibold focus:outline-none"
      >
        <span>{question}</span>
        <span
          className={`transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'rotate-45' : 'rotate-0'
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-40' : 'max-h-0'
        }`}
      >
        <div
          className={`pb-4 text-primary-text ${
            isOpen ? 'opacity-100' : 'opacity-0 transition-opacity duration-500'
          }`}
        >
          {answer}
        </div>
      </div>
    </div>
  );
};

FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default FAQItem;
