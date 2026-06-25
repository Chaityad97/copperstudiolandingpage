import React, { useEffect, useRef, useState, useMemo } from 'react';
import './App.css';
import ProcessRoadmap from './ProcessRoadmap';
import Pricing from './Pricing';
import WallOfLove from './WallOfLove';
import FAQ from './FAQ';
import Booking from './Booking';
import Footer from './Footer';

import logoImg from './assets/logo.svg';
import brand1 from './assets/logos/Group 79.svg';
import brand2 from './assets/logos/Group 80.svg';
import brand3 from './assets/logos/Group 81.svg';
import brand4 from './assets/logos/CC LOGO 500X500 FAVICON BLUE BG WHITE FONT BIG SIZE Background Removed 2.svg';
import brand5 from './assets/logos/Group 82.svg';
import brand7 from './assets/logos/DataCircles White Logo 2 (1).svg';

import service1 from './assets/servicessvg/Service 1.svg';
import service2 from './assets/servicessvg/Service 2.svg';
import service3 from './assets/servicessvg/Service 3.svg';
import service4 from './assets/servicessvg/Service 4.svg';
import service5 from './assets/servicessvg/Service 7.svg';
import service6 from './assets/servicessvg/Service 8.svg';

const servicesList = [service1, service2, service3, service4, service5, service6];

const ServiceCard = ({ svgSrc, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`service-card-wrapper ${isVisible ? 'is-visible' : ''}`} 
      style={{ '--card-index': index + 1 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const img = e.currentTarget.querySelector('.service-card-img');
        if (img) {
          img.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px) scale(1.02)`;
        }
      }}
      onMouseLeave={(e) => {
        const img = e.currentTarget.querySelector('.service-card-img');
        if (img) {
          img.style.transform = `translate(0px, 0px) scale(1)`;
        }
      }}
    >
      <img src={svgSrc} alt={`Service ${index + 1}`} className="service-card-img" />
    </div>
  );
};

function App() {
  // 14 stripes based on the Figma spec (Rectangle 89 through 102)
  const stripes = Array.from({ length: 14 });
  console.log("Logo path loaded as:", logoImg);

  // Generate the complex 3-stage wave animation for the hero stripes
  const stripeAnimationCSS = useMemo(() => {
    const TOTAL_TIME = 9; // seconds loop
    const FPS = 15;
    const frames = TOTAL_TIME * FPS;
    let css = '';
    
    for (let i = 0; i < 14; i++) {
      const d = Math.min(i, 13 - i);
      // Define the peak hit times for this specific stripe
      const peaks = [
        0.5 + i * 0.15,               // Phase 1: Left to right
        3.5 + (13 - i) * 0.15,        // Phase 2: Right to left
        6.5 + d * 0.15                // Phase 3a: Outside to inside
      ];
      if (d < 6) {
        peaks.push(7.4 + (6 - d) * 0.15); // Phase 3b: Repel back
      }

      let keyframes = `@keyframes complexPulse${i} {\n`;
      
      // Calculate brightness smoothly over time for a perfect collision blend
      for (let frame = 0; frame <= frames; frame++) {
        const t = frame / FPS;
        let maxBright = 0.2;
        
        peaks.forEach(peak => {
          let bright = 0.2;
          if (t >= peak - 0.2 && t <= peak) {
            const progress = (t - (peak - 0.2)) / 0.2;
            bright = 0.2 + progress * 1.0;
          } else if (t > peak && t <= peak + 0.6) {
            const progress = (t - peak) / 0.6;
            bright = 1.2 - progress * 1.0;
          }
          if (bright > maxBright) maxBright = bright;
        });
        
        const percent = ((t / TOTAL_TIME) * 100).toFixed(1);
        const progress = (maxBright - 0.2) / 1.0;
        const saturate = (0.5 + progress * 0.6).toFixed(2);
        
        keyframes += `  ${percent}% { filter: brightness(${maxBright.toFixed(2)}) saturate(${saturate}); }\n`;
      }
      keyframes += `}\n`;
      css += keyframes;
    }
    return css;
  }, []);

  // Intersection Observer for Trusted Brands Reveal
  const [isTrustedVisible, setIsTrustedVisible] = useState(false);
  const trustedRef = useRef(null);

  // Intersection Observer for Services Reveal
  const [isServicesVisible, setIsServicesVisible] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
    // Trusted Brands Observer
    const trustedObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTrustedVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    if (trustedRef.current) {
      trustedObserver.observe(trustedRef.current);
    }

    // Services Observer
    const servicesObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsServicesVisible(true);
        }
      },
      { threshold: 0.1 } // Lower threshold so it triggers as soon as the grid starts coming up
    );
    if (servicesRef.current) {
      servicesObserver.observe(servicesRef.current);
    }

    return () => {
      trustedObserver.disconnect();
      servicesObserver.disconnect();
    };
  }, []);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-logo">
          <img src={logoImg} alt="Copper Studio Logo" className="nav-logo-icon" />
        </div>
        
        <div className="nav-links desktop-only">
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>
        
        <div className="nav-action desktop-only">
          <button className="lets-talk-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 20h9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Let's Talk &rsaquo;
          </button>
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

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-links">
          <a href="#home" onClick={toggleMobileMenu}>Home</a>
          <a href="#about" onClick={toggleMobileMenu}>About</a>
          <a href="#services" onClick={toggleMobileMenu}>Services</a>
          <a href="#projects" onClick={toggleMobileMenu}>Projects</a>
          <a href="#testimonials" onClick={toggleMobileMenu}>Testimonials</a>
          <a href="#contact" onClick={toggleMobileMenu}>Contact</a>
          <button className="lets-talk-btn mobile-lets-talk">
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 20h9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Let's Talk &rsaquo;
          </button>
        </div>
      </div>

      <div className="landing-container">
        {/* Background blobs / ellipses */}
      <div className="blobs-container">
        <div className="ellipse ellipse-2"></div>
        <div className="ellipse ellipse-3"></div>
        <div className="ellipse ellipse-4"></div>
        <div className="ellipse ellipse-5"></div>
        <div className="ellipse ellipse-9"></div>
        <div className="ellipse ellipse-1"></div>
        <div className="ellipse ellipse-8"></div>
        <div className="ellipse ellipse-6"></div>
        <div className="ellipse ellipse-7"></div>
      </div>



      {/* Stripes overlay (Group 12 -> Group 105) */}
      <style>{stripeAnimationCSS}</style>
      <div className="stripes-wrapper">
        {stripes.map((_, index) => (
          <div key={index} className="stripe-container">
            <div 
              className="stripe-auto"
              style={{ animation: `complexPulse${index} 9s infinite linear` }}
            ></div>
            <div className="stripe-hover"></div>
          </div>
        ))}
      </div>
      
      {/* Logo */}
      <div className="logo-container">
        <img src={logoImg} alt="Copper Studio Logo" className="main-center-logo" />
        <h2 className="hero-subtitle">From logo to website. Everything your brand needs</h2>
      </div>

      {/* Bottom Bar */}
      <div className="bottom-bar">
        <div className="scroll-text">scroll to explore</div>
        
        <div className="bottom-center-pill">
          <a href="#projects" className="view-projects-btn">
            View Projects
          </a>
          <a href="#contact" className="lets-talk-dark-btn">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 20h9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Let's Talk &rsaquo;
          </a>
        </div>

        <div className="copyright">&copy;2026</div>
      </div>
    </div>

      {/* Trusted Brands Section */}
      <section className="trusted-section" ref={trustedRef}>
        <h3 className="trusted-title">Trusted by Brands Across India</h3>
        <div className={`trusted-logos-wrapper ${isTrustedVisible ? 'is-visible' : ''}`}>
          <div className="trusted-logos-track">
            {/* Render 8 sets of logos to ensure the track is wide enough for 5K monitors without looping gaps */}
            {Array.from({ length: 8 }).map((_, setIndex) => (
              <React.Fragment key={setIndex}>
                <div className="trusted-logo-item" style={{ '--logo-index': 1 }}>
                  <img src={brand1} alt="Trusted Brand 1" className="brand-placeholder" />
                </div>
                <div className="trusted-logo-item" style={{ '--logo-index': 2 }}>
                  <img src={brand2} alt="Trusted Brand 2" className="brand-placeholder" />
                </div>
                <div className="trusted-logo-item" style={{ '--logo-index': 3 }}>
                  <img src={brand3} alt="Trusted Brand 3" className="brand-placeholder" />
                </div>
                <div className="trusted-logo-item" style={{ '--logo-index': 4 }}>
                  <img src={brand4} alt="Trusted Brand 4" className="brand-placeholder brand-large" />
                </div>
                <div className="trusted-logo-item" style={{ '--logo-index': 5 }}>
                  <img src={brand5} alt="Trusted Brand 5" className="brand-placeholder brand-large" />
                </div>
                <div className="trusted-logo-item" style={{ '--logo-index': 6 }}>
                  <img src={brand7} alt="DataCircles Logo" className="brand-placeholder brand-large" />
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section" ref={servicesRef}>
        <h2 className="services-title">What Services do we provide?</h2>
        
        <div className="services-toggle">
          <button className="toggle-btn active">CopperBrand!</button>
          <button className="toggle-btn">CopperWeb!</button>
        </div>

        <div className={`services-grid ${isServicesVisible ? 'is-visible' : ''}`}>
          {servicesList.map((svgSrc, index) => (
            <ServiceCard key={index} svgSrc={svgSrc} index={index} />
          ))}
        </div>
      </section>

      {/* Process Roadmap Section */}
      <ProcessRoadmap />

      {/* Pricing Section */}
      <Pricing />

      {/* Testimonials / Wall Of Love Section */}
      <WallOfLove />

      {/* FAQ Section */}
      <FAQ />

      {/* Booking Section */}
      <Booking />

      <Footer />
    </>
  );
}

export default App;
