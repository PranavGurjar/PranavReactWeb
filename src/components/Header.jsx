import { useState } from 'react';

const Header = ({ toggleTheme, theme }) => {
  const [isNavActive, setIsNavActive] = useState(false);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <header>
      <nav>
        <div className="logo">Pranav Mahajan</div>
        <ul className={`nav-links ${isNavActive ? 'active' : ''}`}>
          <li><a href="#about" onClick={() => setIsNavActive(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setIsNavActive(false)}>Skills</a></li>
          <li><a href="#experience" onClick={() => setIsNavActive(false)}>Experience</a></li>
          <li><a href="#projects" onClick={() => setIsNavActive(false)}>Projects</a></li>
          <li><a href="#certificates" onClick={() => setIsNavActive(false)}>Certificates</a></li>
          <li><a href="#contact" onClick={() => setIsNavActive(false)}>Contact</a></li>
        </ul>
        <button id="theme-toggle" className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          <i className={`fas fa-${theme === 'dark' ? 'sun' : 'moon'}`}></i>
        </button>
        <button className="hamburger" onClick={toggleNav} aria-label="Toggle navigation menu">
          <i className="fas fa-bars"></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;