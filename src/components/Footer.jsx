import { Link } from 'react-router-dom';
import Logo from './Logo';
import Container from './container';

import { FaBehance } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';
import { FaInstagram } from 'react-icons/fa6';
import { MdFacebook } from 'react-icons/md';

const quickLinks = [
  { name: 'Our Projects', href: 'our-projects' },
  { name: 'Process', href: 'process' },
  { name: 'Benefits', href: 'benefits' },
  { name: 'Services', href: 'services' },
  { name: 'Pricing', href: 'pricing' },
  { name: 'FAQs', href: 'FAQs' },
];

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer>
      <Container className="rounded-t-site p-4 z-30 backdrop-blur">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-4">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo size="footer" />
          </div>

          {/* Features & Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  to={`/?scrollTo=${link.href}`}
                  className="hover:bg-gradient-to-t hover:from-[#FF7B00] hover:via-[#FFDA00] hover:to-[#FFE48B] hover:bg-clip-text hover:text-transparent"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect with Us</h3>
            <ul className="flex space-x-4 text-3xl">
              <li>
                <a
                  href="https://www.behance.net/drme99"
                  aria-label="Instagram"
                  rel="noopener noreferrer"
                >
                  <FaBehance
                    style={{ fill: 'url(#icon-gradient)' }}
                    className="hover:scale-110 duration-300"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/7.d.stud/"
                  aria-label="Instagram"
                  rel="noopener noreferrer"
                >
                  <FaInstagram
                    style={{ fill: 'url(#icon-gradient)' }}
                    className="hover:scale-110 duration-300"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/sevendesign99"
                  aria-label="Twitter"
                  rel="noopener noreferrer"
                >
                  <RiTwitterXLine
                    style={{ fill: 'url(#icon-gradient)' }}
                    className="hover:scale-110 duration-300"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/sevendesign99"
                  aria-label="Facebook"
                  rel="noopener noreferrer"
                >
                  <MdFacebook
                    style={{ fill: 'url(#icon-gradient)' }}
                    className="hover:scale-110 duration-300"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-t border-gray-600 my-6" />

        <div className="flex flex-col lg:flex-row justify-between items-center text-sm px-4">
          <p>
            &copy; {date}{' '}
            <span className="font-bold bg-gradient-to-t from-[#FF7B00] via-[#FFDA00] to-[#FFE48B] bg-clip-text text-transparent">
              Seven Design Studio
            </span>
            . All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <Link
              to="/terms-conditions"
              className="hover:bg-gradient-to-t hover:from-[#FF7B00] hover:via-[#FFDA00] hover:to-[#FFE48B] hover:bg-clip-text hover:text-transparent"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
