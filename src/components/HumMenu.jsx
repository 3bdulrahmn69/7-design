import PropTypes from 'prop-types';

const HumMenu = ({ toggleMenu, isMenuOpen }) => {
  return (
    <button onClick={toggleMenu} className="xl:hidden p-2 focus:outline-none">
      <span
        className={`block w-8 h-0.5 bg-black dark:bg-white mb-1.5 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'rotate-45 translate-y-2' : 'rotate-0'
        }`}
        style={{ transformOrigin: 'center' }}
      />
      <span
        className={`block w-8 h-0.5 bg-black dark:bg-white mb-1.5 transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <span
        className={`block w-8 h-0.5 bg-black dark:bg-white transition-transform duration-300 ease-in-out ${
          isMenuOpen ? '-rotate-45 -translate-y-2' : 'rotate-0'
        }`}
        style={{ transformOrigin: 'center' }}
      />
    </button>
  );
};

HumMenu.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};

export default HumMenu;
