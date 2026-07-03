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
        <div className="footer-content global-container">
          <div className="footer-brand">
            <img src={footerMainLogo} alt="Copper Studio Logo" className="footer-main-logo" />
            <div className="footer-services">
              <span>&#8226; LOGO & BRAND DESIGN</span>
              <span>&#8226; CUSTOM WEBSITE DESIGN & DEVELOPMENT</span>
              <span>&#8226; CUSTOM CLIENT PORTAL</span>
            </div>
          </div>

          <div className="footer-divider"></div>

          <div className="footer-links">
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a href="#portal">Client Portal</a>
          </div>

          <div className="footer-socials">
            <div className="footer-socials-wrap">
              {/* Invisible clickable overlays — one per icon */}
              <a href="mailto:sales@thecopperstudio.com" className="footer-social-overlay" style={{left:0}} aria-label="Email" />
              <a href="https://wa.me/919820933877" className="footer-social-overlay" style={{left:95}} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" />
              <a href="https://www.instagram.com/the_copperstudio/" className="footer-social-overlay" style={{left:190}} target="_blank" rel="noopener noreferrer" aria-label="Instagram" />
              <a href="https://www.linkedin.com/company/thecopperstudio" className="footer-social-overlay" style={{left:285}} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" />
            <svg width="335" height="50" viewBox="0 0 335 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="50" height="50" rx="10" fill="#070815"/>
              <rect x="95" width="50" height="50" rx="10" fill="#070815"/>
              <rect x="190" width="50" height="50" rx="10" fill="#070815"/>
              <rect x="285" width="50" height="50" rx="10" fill="#070815"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M110.646 24.5C110.646 19.61 114.61 15.6458 119.5 15.6458C124.39 15.6458 128.354 19.61 128.354 24.5C128.354 29.39 124.39 33.3542 119.5 33.3542C117.758 33.3542 116.137 32.8523 114.769 31.9855C114.514 31.8243 114.202 31.7811 113.913 31.8673L110.914 32.7624L112.043 30.1201C112.177 29.8078 112.15 29.4501 111.971 29.1616C111.131 27.8083 110.646 26.2124 110.646 24.5ZM119.5 13.5625C113.459 13.5625 108.563 18.4594 108.563 24.5C108.563 26.4147 109.055 28.217 109.922 29.7841L108.126 33.9865C107.967 34.358 108.037 34.7878 108.306 35.0893C108.575 35.3908 108.994 35.5096 109.381 35.394L114.068 33.9953C115.669 34.913 117.525 35.4375 119.5 35.4375C125.541 35.4375 130.438 30.5406 130.438 24.5C130.438 18.4594 125.541 13.5625 119.5 13.5625ZM121.888 26.7733L120.519 27.7376C119.878 27.3724 119.169 26.8626 118.458 26.1516C117.719 25.4124 117.171 24.6493 116.767 23.9493L117.637 23.2108C118.01 22.894 118.112 22.3597 117.882 21.9274L116.774 19.844C116.625 19.5635 116.355 19.3665 116.043 19.3089C115.73 19.2513 115.409 19.3396 115.169 19.5485L114.841 19.8354C114.05 20.5251 113.583 21.6586 113.97 22.8064C114.372 23.9961 115.229 25.8687 116.985 27.6247C118.874 29.5139 120.793 30.2578 121.915 30.5468C122.819 30.7795 123.675 30.4675 124.278 29.9762L124.894 29.4742C125.158 29.2595 125.3 28.9296 125.275 28.5905C125.25 28.2515 125.061 27.9458 124.769 27.7718L123.021 26.7301C122.668 26.5198 122.224 26.5367 121.888 26.7733Z" fill="white"/>
              <path d="M34.9166 19.292L25.551 25.2576C25.2332 25.4422 24.8722 25.5394 24.5047 25.5394C24.1371 25.5394 23.7761 25.4422 23.4583 25.2576L14.0833 19.292" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M32.8333 16.167H16.1666C15.0161 16.167 14.0833 17.0997 14.0833 18.2503V30.7503C14.0833 31.9009 15.0161 32.8337 16.1666 32.8337H32.8333C33.9839 32.8337 34.9166 31.9009 34.9166 30.7503V18.2503C34.9166 17.0997 33.9839 16.167 32.8333 16.167Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M310.031 20.1625V21.9302C310.401 21.3662 310.911 20.908 311.512 20.6005C312.112 20.293 312.782 20.1467 313.456 20.176C317.055 20.176 317.833 22.426 317.833 25.3531V31.3125H314.5V26.0292C314.5 24.7688 314.246 23.1479 312.283 23.1479C310.38 23.1479 310.055 24.5198 310.055 25.9354V31.3125H306.732V20.1625H310.031ZM304.5 17.3604C304.5 17.6906 304.402 18.0134 304.219 18.2882C304.036 18.563 303.775 18.7776 303.471 18.9052C303.166 19.0318 302.831 19.0649 302.508 19.0003C302.185 18.9357 301.888 18.7765 301.655 18.5427C301.422 18.3088 301.264 18.0113 301.199 17.6875C301.135 17.3637 301.168 17.0281 301.294 16.7229C301.42 16.4178 301.633 16.1567 301.907 15.9724C302.181 15.7882 302.503 15.6891 302.833 15.6875C303.053 15.6876 303.27 15.731 303.472 15.8152C303.675 15.8994 303.859 16.0228 304.014 16.1782C304.169 16.3336 304.291 16.518 304.375 16.7209C304.458 16.9237 304.501 17.1411 304.5 17.3604Z" fill="white"/>
              <path d="M304.5 20.1758H301.167V31.3122H304.5V20.1758Z" fill="white"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M205.125 20.3333C205.125 18.952 205.674 17.6272 206.65 16.6505C207.627 15.6737 208.952 15.125 210.333 15.125H218.667C220.048 15.125 221.373 15.6737 222.35 16.6505C223.326 17.6272 223.875 18.952 223.875 20.3333V28.6667C223.875 30.048 223.326 31.3728 222.35 32.3495C221.373 33.3263 220.048 33.875 218.667 33.875H210.333C208.952 33.875 207.627 33.3263 206.65 32.3495C205.674 31.3728 205.125 30.048 205.125 28.6667V20.3333ZM210.333 17.2083C209.505 17.2083 208.71 17.5376 208.124 18.1236C207.538 18.7097 207.208 19.5045 207.208 20.3333V28.6667C207.208 29.4955 207.538 30.2903 208.124 30.8764C208.71 31.4624 209.505 31.7917 210.333 31.7917H218.667C219.495 31.7917 220.29 31.4624 220.876 30.8764C221.462 30.2903 221.792 29.4955 221.792 28.6667V20.3333C221.792 19.5045 221.462 18.7097 220.876 18.1236C220.29 17.5376 219.495 17.2083 218.667 17.2083H210.333ZM218.247 19.5146C218.247 19.2383 218.357 18.9734 218.552 18.778C218.747 18.5827 219.012 18.4729 219.289 18.4729H219.299C219.575 18.4729 219.84 18.5827 220.036 18.778C220.231 18.9734 220.341 19.2383 220.341 19.5146C220.341 19.7909 220.231 20.0558 220.036 20.2512C219.84 20.4465 219.575 20.5562 219.299 20.5562H219.289C219.012 20.5562 218.747 20.4465 218.552 20.2512C218.357 20.0558 218.247 19.7909 218.247 19.5146ZM214.5 21.375C213.671 21.375 212.876 21.7042 212.29 22.2903C211.704 22.8763 211.375 23.6712 211.375 24.5C211.375 25.3288 211.704 26.1237 212.29 26.7097C212.876 27.2958 213.671 27.625 214.5 27.625C215.329 27.625 216.124 27.2958 216.71 26.7097C217.296 26.1237 217.625 25.3288 217.625 24.5C217.625 23.6712 217.296 22.8763 216.71 22.2903C216.124 21.7042 215.329 21.375 214.5 21.375ZM209.292 24.5C209.292 23.1187 209.84 21.7939 210.817 20.8172C211.794 19.8404 213.119 19.2917 214.5 19.2917C215.881 19.2917 217.206 19.8404 218.183 20.8172C219.16 21.7939 219.708 23.1187 219.708 24.5C219.708 25.8813 219.16 27.2061 218.183 28.1828C217.206 29.1596 215.881 29.7083 214.5 29.7083C213.119 29.7083 211.794 29.1596 210.817 28.1828C209.84 27.2061 209.292 25.8813 209.292 24.5Z" fill="white"/>
            </svg>
            </div>
          </div>

          <div className="footer-legal">
            <div className="legal-links">
              <a href="#terms">Terms & Conditions</a>
              <span className="separator"></span>
              <a href="#privacy">Privacy Policy</a>
              <span className="separator"></span>
              <a href="#disclosures">Disclosures</a>
            </div>
            <p>2026 The Copper Studio. All Rights Reserved</p>
          </div>
        </div>

        {/* The scrolling marquee container for the Copper Studio text */}
        <div className="marquee-container">
          <div className="marquee-content">
            <img src={footerText} alt="Copper Studio" className="footer-large-text" />
            <img src={footerText} alt="Copper Studio" className="footer-large-text" />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
