import React from 'react';
import '../cssFiles/Footer.css';
import logo from '../../public/logo.svg'; 
import { FaFileContract, FaShieldAlt } from 'react-icons/fa';

function Footer({t}) {
  return (
    <div className="footer">
      <div className="footer-links">
        <a href="/terms">
          <FaFileContract className="footer-icon" />
          <p>{t.footerTerms}</p>
        </a>
        <a href="/privacy">
          <FaShieldAlt className="footer-icon" />
          <p>{t.footerPrivacy}</p>
        </a>
      </div>
            <div className="footer-logo">
        <img src={logo} alt="Taskomatic Logo" />
      </div>
    </div>
  );
}

export default Footer;