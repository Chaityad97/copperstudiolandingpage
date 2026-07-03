import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoImg from './assets/logo.svg';

function Navbar({ activeSection, setActiveSection }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleHomeLink = (section) => {
    setActiveSection && setActiveSection(section);
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-links">
          <a href="/#home" onClick={() => { toggleMobileMenu(); setActiveSection && setActiveSection('home'); }}>Home</a>
          <a href="/#about" onClick={() => { toggleMobileMenu(); setActiveSection && setActiveSection('about'); }}>Studio</a>
          <Link to="/services" onClick={() => { toggleMobileMenu(); setActiveSection && setActiveSection('services'); }}>Services</Link>
          <a href="/#projects" onClick={() => { toggleMobileMenu(); setActiveSection && setActiveSection('projects'); }}>Projects</a>
          <Link to="/contact" onClick={toggleMobileMenu}>Contact</Link>
          <a href="/#portal" className="client-portal-btn mobile-client-portal" onClick={toggleMobileMenu}>Client Portal</a>
          <button className="lets-talk-btn mobile-lets-talk">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 20h9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Let's Talk &rsaquo;
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-logo">
          <Link to="/">
            <img src={logoImg} alt="Copper Studio Logo" className="nav-logo-icon" />
          </Link>
        </div>

        <div className="nav-divider desktop-only"></div>

        <div className="nav-links desktop-only">
          <a href="/#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => setActiveSection && setActiveSection('home')}>Home</a>
          <a href="/#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => setActiveSection && setActiveSection('about')}>Studio</a>
          <Link to="/services" className={activeSection === 'services' ? 'active' : ''} onClick={() => setActiveSection && setActiveSection('services')}>Services</Link>
          <a href="/#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={() => setActiveSection && setActiveSection('projects')}>Projects</a>
          <Link to="/contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => setActiveSection && setActiveSection('contact')}>Contact</Link>
        </div>

        <div className="nav-divider desktop-only"></div>

        <div className="nav-action desktop-only">
          <a href="/#portal" className="client-portal-link">Client Portal</a>
          <Link to="/contact" className="lets-talk-link">
            <span className="lets-talk-icon-wrap">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="5" width="16" height="15" rx="3.5" ry="3.5"></rect>
                <line x1="16" y1="3" x2="16" y2="7"></line>
                <line x1="8" y1="3" x2="8" y2="7"></line>
                <line x1="4" y1="11" x2="20" y2="11"></line>
                <circle cx="9" cy="15.5" r="1.5" fill="currentColor" stroke="none"></circle>
              </svg>
            </span>
            Let's Talk
          </Link>
        </div>

        {/* Hamburger Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
          {isMobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </nav>
    </>
  );
}

export default Navbar;
