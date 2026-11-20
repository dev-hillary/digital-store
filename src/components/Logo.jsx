
import logoHeader from '../assets/logo-header.svg';
import './Logo.css';

function Logo() {
  return (
    <img
      src={logoHeader}
      alt="Digital Store"
      className="logo"
    />
  );
}

export default Logo;
