import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Logo from './Logo';
import Container from './container';

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
          <div className="flex flex-wrap justify-between lg:justify-around w-full space-y-4 lg:space-y-0">
            <div>
              <h3 className="text-lg font-semibold mb-2">Features</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Custom Logo Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Brand Identity
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Packaging Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Web Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Social Media Graphics
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Resources</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Connect and Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect with Us</h3>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="hover:text-gray-400"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={20} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="hover:text-gray-400"
                  rel="noopener noreferrer"
                >
                  <FaTwitter size={20} />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="hover:text-gray-400"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-t border-gray-600 my-6" />

        <div className="flex flex-col lg:flex-row justify-between items-center text-sm px-4">
          <p>
            &copy; {date} <span className="font-bold">Seven Design Studio</span>
            . All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <a href="#" className="hover:text-gray-400">
              Terms & Conditions
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
