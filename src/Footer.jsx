import React from 'react';
import './Footer.css';
import footerText from './assets/footer/Group 70.svg';
import navLogo from './assets/logo.svg';
import footerMainLogo from './assets/Group 18.svg';

const Footer = () => {
  // 14 pleats based on the Figma structure
  const pleats = Array.from({ length: 14 });

  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="rect-145"></div>
        <div className="ellipse-37"></div>
        <div className="ellipse-39"></div>
        <div className="ellipse-38"></div>
        <div className="ellipse-40"></div>
        
        {/* Top fade overlay to transition smoothly from the white page */}
        <div className="footer-top-fade"></div>
        
        <div className="group-106">
          {pleats.map((_, index) => (
            <div 
              key={index} 
              className={`pleat pleat-${index + 1}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            ></div>
          ))}
        </div>

        {/* Footer Top Content */}
        <div className="footer-content">
          <div className="footer-brand">
            <img src={footerMainLogo} alt="Copper Studio Logo" className="footer-main-logo" />
            <div className="footer-services">
              <span>&#8226; ANIMATIONS & ILLUSTRATION</span>
              <span>&#8226; SHORT FORM & ENTERTAINMENT</span>
              <span>&#8226; GRAPHIC CREATIVES</span>
            </div>
          </div>

          <div className="footer-divider"></div>

          <div className="footer-links">
            <a href="#works">Works</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact us</a>
          </div>

          <div className="footer-socials">
            <a href="#" className="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="#" className="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" className="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="#" className="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm8.016 8.445c.421 1.111.666 2.308.691 3.551-1.644-.22-3.375-.246-5.116-.073-.396-1.077-.833-2.148-1.311-3.203 2.502-1.006 4.417-2.316 5.736-3.865a9.559 9.559 0 011.025 1.597h-.025zm-2.102-2.901a9.531 9.531 0 00-4.053-2.844c.484.819.923 1.668 1.31 2.541 1.637-.233 3.32-.236 5.03.014-1.282.905-2.585 1.758-2.287 3.385zm-6.223-2.883a9.54 9.54 0 00-5.748 1.942c.866 1.488 1.921 2.87 3.125 4.106a23.945 23.945 0 012.359-5.918l.264-.13zm-6.073 3.332a9.56 9.56 0 00-2.31 6.559c1.64-.81 3.421-1.378 5.289-1.664a27.14 27.14 0 00-1.897 4.966 9.555 9.555 0 00-1.082-9.861zm1.266 11.23a9.55 9.55 0 005.109 2.569c-.439-1.954-1.018-3.856-1.724-5.69-1.895.946-3.649 2.146-5.187 3.56l1.802-.439zm6.666 2.228c-.287 0-.57-.015-.851-.044.821-2.42 1.486-4.912 1.979-7.464 1.764.125 3.525.421 5.253.868-1.156 3.093-3.387 5.513-6.381 6.64zm6.06-7.854c-1.889-.481-3.819-.79-5.768-.916.486-1.077.933-2.172 1.339-3.284 1.503.491 2.949 1.155 4.316 1.98a9.539 9.539 0 01.113 4.218z"/></svg>
            </a>
          </div>

          <div className="footer-legal">
            <div className="legal-links">
              <a href="#terms">Terms & Conditions</a>
              <span className="separator">|</span>
              <a href="#privacy">Privacy Policy</a>
              <span className="separator">|</span>
              <a href="#disclosures">Disclosures</a>
            </div>
            <p>&copy; 2024 Copper Studio. All Rights Reserved.</p>
          </div>
        </div>

        {/* The scrolling marquee container for the Copper Studio text */}
        <div className="marquee-container">
          <div className="marquee-content">
            <img src={footerText} alt="Copper Studio" className="footer-large-text" />
            <img src={footerText} alt="Copper Studio" className="footer-large-text" />
            <img src={footerText} alt="Copper Studio" className="footer-large-text" />
            <img src={footerText} alt="Copper Studio" className="footer-large-text" />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
