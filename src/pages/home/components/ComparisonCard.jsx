import PropTypes from 'prop-types';

const ComparisonCard = ({ type = 'normal', children }) => {
  const cardClassName =
    type === 'glow'
      ? 'bg-black text-white p-6 rounded-lg shadow-md relative overflow-hidden'
      : 'bg-gray-800 text-white p-6 rounded-lg shadow-md';

  const glowClassName =
    type === 'glow'
      ? 'absolute top-0 right-0 w-40 h-40 bg-gradient-to-tr from-red-500 to-orange-500 opacity-30 rounded-full blur-2xl pointer-events-none'
      : '';

  return (
    <div className={`${cardClassName} relative w-full`}>
      {type === 'glow' && <div className={glowClassName}></div>}
      {children}
    </div>
  );
};

ComparisonCard.propTypes = {
  type: PropTypes.oneOf(['normal', 'glow']),
  children: PropTypes.node.isRequired,
};

export default ComparisonCard;
