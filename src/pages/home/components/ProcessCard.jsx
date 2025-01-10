import PropTypes from 'prop-types';
import test from '../../../assets/test.svg';

const ProcessCard = ({ title, description }) => {
  return (
    <div className="w-56 flex flex-col items-center gap-4">
      <figure>
        <img src={test} alt="test" className="w-16" />
      </figure>
      <div>
        <h4 className="text-center">{title}</h4>
        <p className="text-center font-medium text-primary-text">
          {description}
        </p>
      </div>
    </div>
  );
};

ProcessCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default ProcessCard;
