import './Footer.scss';
import gitHub from '../../../assets/img/github-icon.svg';
import linkedin from '../../../assets/img/linkedin-icon.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-para">
        <a
          className="footer-para-link"
          href="https://julien-dussaut.com/"
          target="_blank"
          rel="noreferrer"
        >
          Created by Julien Dussaut
        </a>
      </p>
      <p className="footer-para">
        <a
          className="footer-para-link"
          href="https://github.com/Julien-Dussaut"
          target="_blank"
          rel="noreferrer"
        >
          <img src={gitHub} alt="GitHub Logo" />
        </a>
      </p>
      <p className="footer-para">
        <a
          className="footer-para-link"
          href="https://www.linkedin.com/in/julien-dussaut/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin Logo" />
        </a>
      </p>
    </footer>
  );
}
