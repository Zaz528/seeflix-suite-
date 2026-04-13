import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">SeeFlix</span>
          <p className="footer__copyright">© 2025 Seeflix. All rights reserved.</p>
        </div>
        <nav className="footer__nav">
          <ul className="footer__links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/media">Media</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
