import { useState } from 'react';
import { motion } from 'motion/react';
import Button from './Button';
import Lang from './Lang';
import Logo from './Logo';

const navItems = [
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Services', href: '/services' },
  { name: 'Process', href: '/process' },
  { name: 'Contact', href: '/contact' },
];

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
    <header className="fixed top-8 right-1/2 translate-x-1/2 border-[1px] border-gray-500 rounded-xl py-3 px-6 backdrop-blur w-11/12 xl:w-fit z-50">
      <nav className="flex justify-between items-center w-full h-full">
        <ul className="flex justify-between xl:justify-center w-full items-center xl:space-x-6">
          <li>
            <Logo />
          </li>
          {/* Desktop navigation links */}
          <div className="hidden justify-center items-center xl:flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  className="text-white text-sm hover:bg-dark-gray duration-300 py-1 px-3 rounded-lg"
                  href={item.href}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <Button className="bg-primary/90 hover:bg-primary duration-300 text-sm">
                Book a call
              </Button>
            </li>
            <li>
              <Lang />
            </li>
          </div>

          {/* Hamburger menu button */}
          <button
            onClick={toggleMenu}
            className="xl:hidden text-white p-2 focus:outline-none"
          >
            <span
              className={`block w-6 h-0.5 bg-white mb-1 transition-transform duration-300 ease-in-out ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : 'rotate-0'
              }`}
              style={{ transformOrigin: 'center' }}
            />
            <span
              className={`block w-6 h-0.5 bg-white mb-1 transition-opacity duration-300 ease-in-out ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ease-in-out ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'rotate-0'
              }`}
              style={{ transformOrigin: 'center' }}
            />
          </button>
        </ul>
      </nav>

      {/* Mobile menu with Framer Motion */}
      <motion.div
        className="xl:hidden absolute inset-x-0 top-full mt-2 py-4 px-6 bg-black text-white shadow-sm shadow-gray-500  rounded-lg origin-top overflow-hidden"
        initial="closed"
        animate={isMenuOpen ? 'open' : 'closed'}
        variants={menuVariants}
      >
        <ul className="space-y-4">
          {navItems.map((item) => (
            <li key={item.name} className="text-white py-1 px-3 rounded-lg">
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
          <li>
            <Button className="bg-primary/90 hover:bg-primary duration-300 w-full">
              Book a call
            </Button>
          </li>
          <li>
            <Lang />
          </li>
        </ul>
      </motion.div>
    </header>
  );
};

export default Header;
