import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Logo = () => {
  return (
    <Link to="/" className="text-white text-2xl font-bold">
      <img src={logo} alt="Logo" className="w-10 h-10" />
    </Link>
  );
};

export default Logo;
