import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import CoordinateSection from './CoordinateSection';
import ProjectsSection from './ProjectsSection';
import Pricing from './Pricing';
import WallOfLove from './WallOfLove';
import FAQ from './FAQ';
import Booking from './Booking';
import Footer from './Footer';
import ServicesSection from './ServicesSection';
import Navbar from './Navbar';
import ContactPage from './ContactPage';

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
  // Prevent downloading images/videos via right-click
  useEffect(() => {
    const handleContextMenu = (e) => {
      if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO') {
        e.preventDefault();
      }
    };
    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

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

  const [activeSection, setActiveSection] = useState('home');

  const HomePage = () => (
    <>
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      <div className="landing-container" id="home">
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
      <div className="bottom-bar global-section" style={{ paddingTop: 0, paddingBottom: '30px' }}>
        <div className="global-container bottom-bar-inner">
          <div className="scroll-text">scroll to explore</div>
        
        <div className="bottom-center-pill">
          <a href="#projects" className="view-projects-btn">
            View Projects
          </a>
          <a href="/contact" className="lets-talk-dark-btn">
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
    </div>

      {/* New Services and Trusted Brands Section */}
      <ServicesSection />

      {/* Coordinate Section */}
      <CoordinateSection />

      {/* Projects Section */}
      <ProjectsSection />

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

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
