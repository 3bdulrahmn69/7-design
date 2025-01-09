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
      className="fixed xl:top-8 top-0 dark:bg-primaryDarkBlack bg-primaryLightWhite xl:bg-transparent xl:dark:bg-transparent inset-x-0 mx-auto xl:border-[1px] xl:border-gray-500 rounded-xl py-3 xl:px-6 px-2 xl:backdrop-blur w-11/12 xl:w-fit z-50"
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
              <Button className="bg-primary hover:bg-primaryDark duration-300 text-sm">
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
        className="xl:hidden absolute inset-x-0 top-full mt-2 py-4 px-6 bg-primaryLightWhite dark:bg-primaryDarkBlack text-primaryDarkBlack dark:text-primaryLightWhite shadow-sm shadow-gray-500 rounded-lg origin-top"
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
            <Button className="w-full">Book a call</Button>
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
