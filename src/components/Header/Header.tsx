import './Headex.scss';
import backgroundHeader from '../../assets/img/hero-image-wr.jpg';
import logo from '../../assets/img/Logo.svg';

export default function Header() {
  return (
    <header className="header">
      <img
        className="header-background"
        src={backgroundHeader}
        alt="Earth view from space"
      />
      <img className="header-title" src={logo} alt="Website Logo" />
    </header>
  );
}
