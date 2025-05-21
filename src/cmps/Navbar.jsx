import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../cssFiles/navbar.css';
import '../cssFiles/theme.css';
import { addGlowEffect } from '../JsFunction';
import '../../src/cssFiles/glowSha.css';
import { translations } from '../translations';



function Navbar({ onToggleLanguage, currentLang, onToggleTheme }) {

  const ObjectRef = useRef(null);

  useEffect(() => {
    const cleanup = addGlowEffect(ObjectRef.current);
    return cleanup; // מנקה מאזינים כשהקומפוננטה יוצאת
  }, []);


  return (
    <nav className="navbar">
      <div className="navbar-actions">

        <button className="login-button"
          onClick={() => window.location.href = 'https://panel.taskomatic.net/'}
        >
          Login
        </button>
        <button className="circle-button" onClick={onToggleTheme}>
            <img
            src="/ligthLogo.svg"
            alt="light Logo"
            className="icon-image"
          />
        </button>

        <button className="circle-button" onClick={onToggleLanguage}>
            <img
            src="/langIcon.svg"
            alt="lang Logo"
            className="icon-image"
          />
        </button>

      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/ai-agent">AI Agent</Link></li>
        <li><Link to="/postomatic">Postomatic</Link></li>
        <li><Link to="/webly">Webly</Link></li>
        <li><Link to="/contact-us">Contact us</Link></li>
      </ul>
        <Link to="/">
          <img
            src="https://taskomatic.net/logo.svg"
            alt="Taskomatic Logo"
            ref={ObjectRef}
            className="navbar-logo"
          />
        </Link>
    </nav >
  );
}

export default Navbar;
