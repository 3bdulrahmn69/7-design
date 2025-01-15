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
    transition: { duration: 0.8, ease: 'easeOut' }, // Increased duration for smoother transition
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.6, ease: 'easeOut' }, // Staggered animations for items
  }),
};

const menuVariants = {
  open: {
    opacity: 1,
    scaleY: 1,
    transition: { duration: 0.6, ease: 'easeInOut' }, // Smoother opening animation
  },
  closed: {
    opacity: 0,
    scaleY: 0,
    transition: { duration: 0.4, ease: 'easeInOut' }, // Smoother closing animation
  },
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.header
      style={{ willChange: 'transform, opacity' }}
      className="fixed xl:top-5 top-0 bg-transparent inset-x-0 xl:border-[1px] border-b-[1px] border-secondary-text xl:rounded-xl xl:mx-auto py-3 xl:px-6 px-4 backdrop-blur w-full xl:w-fit z-50"
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
            {navItems.map((item, index) => (
              <motion.li key={item.name} variants={itemVariants} custom={index}>
                <ScrollLink
                  to={item.href}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="text-primaryDarkBlack dark:text-primaryLightWhite text-sm hover:bg-gray-200 dark:hover:bg-dark-gray duration-300 py-1 px-3 rounded-lg cursor-pointer"
                >
                  {item.name}
                </ScrollLink>
              </motion.li>
            ))}
            <motion.li variants={itemVariants} custom={navItems.length}>
              <Button type="link" to="/meeting-booking">
                Book a call
              </Button>
            </motion.li>
            <motion.li variants={itemVariants} custom={navItems.length + 1}>
              <ToggleDark />
            </motion.li>
            <motion.li variants={itemVariants} custom={navItems.length + 2}>
              <ToggleLang />
            </motion.li>
          </div>
          <HumMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        </ul>
      </nav>

      <motion.div
        className={`xl:hidden ${
          isMenuOpen ? 'static' : 'absolute'
        } mt-2 py-4 px-6 rounded-b-site origin-top`}
        style={{
          WebkitBackdropFilter: 'blur(8px)',
          backdropFilter: 'blur(8px)',
        }}
        initial="closed"
        animate={isMenuOpen ? 'open' : 'closed'}
        variants={menuVariants}
      >
        <ul className="space-y-4">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              variants={itemVariants}
              custom={index}
              className="py-1 px-3 rounded-lg font-medium"
            >
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
            </motion.li>
          ))}
          <motion.li variants={itemVariants} custom={navItems.length}>
            <Button type="link" className="w-full" to={'/meeting-booking'}>
              Book a call
            </Button>
          </motion.li>
          <div className="flex gap-4 items-center w-full">
            <motion.li variants={itemVariants} custom={navItems.length + 1}>
              <ToggleDark />
            </motion.li>
            <motion.li variants={itemVariants} custom={navItems.length + 2}>
              <ToggleLang />
            </motion.li>
          </div>
        </ul>
      </motion.div>
    </motion.header>
  );
};

export default Header;
