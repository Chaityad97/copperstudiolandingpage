import React, { useEffect } from 'react';
import './Booking.css';

const Booking = () => {
  useEffect(() => {
    // 1. Dynamically append the Calendly widget script if not present
    const scriptId = 'calendly-script';
    let script = document.getElementById(scriptId);

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }

    // 2. Initialize widget when script loads or if it's already cached
    const initCalendly = () => {
      if (window.Calendly) {
        // Clear container first to avoid duplicate iframe injections on re-renders
        const container = document.getElementById('calendly-inline-container');
        if (container) {
          container.innerHTML = '';
        }
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/thecopperstudio/30min?hide_gdpr_banner=1&hide_event_type_details=1&hide_landing_page_details=1&primary_color=ee7a1d',
          parentElement: container,
          prefill: {},
          pageSettings: {
            hideEventTypeDetails: true,
            hideLandingPageDetails: true,
            primaryColor: 'ee7a1d'
          }
        });
      }
    };

    if (window.Calendly) {
      initCalendly();
    } else {
      script.addEventListener('load', initCalendly);
    }

    return () => {
      if (script) {
        script.removeEventListener('load', initCalendly);
      }
    };
  }, []);

  const points = [
    'A tailored brand & website roadmap built around your business',
    'A look at how we work - strategy, design development and launch.',
    'Straight answers on timeline, scope and pricing'
  ];

  return (
    <section className="booking-section global-section" id="contact">
      <div className="booking-container global-container">
        <div className="booking-card">
          <div className="booking-info">
            <h2 className="booking-title">Excited? Let's Talk Today</h2>
            <p className="booking-lead">
              Book a discovery call with us. We'd love to hear about your business, understand your goals, and explore how Copper Studio can create the right solution for you.
            </p>

            <ul className="booking-points">
              {points.map((text) => (
                <li key={text} className="booking-point">
                  <span className="booking-check" aria-hidden="true">
                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 5L4 7L8 3" stroke="#070815" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <div className="booking-meta">
              <div className="booking-meta-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                30 minutes
              </div>
              <div className="booking-meta-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="23 7 16 12 23 17 23 7"></polygon>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </svg>
                Video Call
              </div>
            </div>

            <p className="booking-signoff">Talk to you soon.</p>
          </div>

          <div className="booking-widget">
            <div
              id="calendly-inline-container"
              className="calendly-inline-widget-wrapper"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
