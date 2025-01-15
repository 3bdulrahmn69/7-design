import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'motion/react';
import Button from './Button';
import ToggleLang from './ToggleLang';
import Logo from './Logo';
import ToggleDark from './ToggleDark';
import HumMenu from './HumMenu';

const navItems = [
  { name: 'Our Projects', href: 'our-projects' },
  { name: 'Process', href: 'process' },
  { name: 'Benefits', href: 'benefits' },
  { name: 'Services', href: 'services' },
  { name: 'Pricing', href: 'pricing' },
];

const slideVariants = {
  hidden: { y: '-100%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuVariants = {
    open: {
      opacity: 1,
      scaleY: 1,
      transition: { duration: 0.4, ease: 'easeInOut' },
    },
    closed: {
      opacity: 0,
      scaleY: 0,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  return (
    <motion.header
      style={{ willChange: 'transform, opacity' }}
      className="fixed xl:top-8 top-0 bg-transparent inset-x-0 xl:border-[1px] border-b-[1px] border-secondary-text xl:rounded-xl xl:mx-auto py-3 xl:px-6 px-4 backdrop-blur w-full xl:w-fit z-50"
      initial="hidden"
      animate="visible"
      variants={slideVariants}
      dir="ltr"
    >
      <nav className="flex justify-between items-center w-full h-full">
        <ul className="flex justify-between xl:justify-center w-full items-center xl:space-x-6">
          <li>
            <Logo />
          </li>
          <div className="hidden justify-center items-center xl:flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <ScrollLink
                  to={item.href}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-primaryDarkBlack dark:text-primaryLightWhite text-sm hover:bg-gray-200 dark:hover:bg-dark-gray duration-300 py-1 px-3 rounded-lg cursor-pointer"
                >
                  {item.name}
                </ScrollLink>
              </li>
            ))}
            <li>
              <Button type="link" to="/meeting-booking">
                Book a call
              </Button>
            </li>
            <li>
              <ToggleDark />
            </li>
            <li>
              <ToggleLang />
            </li>
          </div>
          <HumMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        </ul>
      </nav>

      <motion.div
        className="xl:hidden absolute inset-x-0 top-3/4 mt-2 py-4 px-6 backdrop-blur-md bg-primaryLightWhite/70 dark:bg-primaryDarkBlack/70 rounded-b-site origin-top z-50"
        style={{
          WebkitBackdropFilter: 'blur(8px)',
          backdropFilter: 'blur(8px)',
        }}
        initial="closed"
        animate={isMenuOpen ? 'open' : 'closed'}
        variants={menuVariants}
      >
        <ul className="space-y-4">
          {navItems.map((item) => (
            <li key={item.name} className="py-1 px-3 rounded-lg font-medium">
              <ScrollLink
                to={item.href}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer"
                onClick={toggleMenu}
              >
                {item.name}
              </ScrollLink>
            </li>
          ))}
          <li>
            <Button type="link" className="w-full" to={'/meeting-booking'}>
              Book a call
            </Button>
          </li>
          <div className="flex gap-4 items-center w-full">
            <li>
              <ToggleDark />
            </li>
            <li>
              <ToggleLang />
            </li>
          </div>
        </ul>
      </motion.div>
    </motion.header>
  );
};

export default Header;
