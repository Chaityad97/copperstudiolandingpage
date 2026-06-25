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
          url: 'https://calendly.com/thecopperstudio/30min?hide_gdpr_banner=1&hide_event_type_details=1&hide_landing_page_details=1&background_color=ffffff&text_color=070815&primary_color=e47317',
          parentElement: container,
          prefill: {},
          pageSettings: {
            hideEventTypeDetails: true,
            hideLandingPageDetails: true,
            backgroundColor: 'ffffff',
            primaryColor: 'e47317',
            textColor: '070815'
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
    'A look at how we work — strategy, design, development & launch',
    'Straight answers on timeline, scope and pricing',
  ];

  return (
    <section className="booking-section" id="contact">
      <div className="booking-container">
        <div className="booking-card">
          {/* LEFT — branded info panel */}
          <div className="booking-info">
            <span className="booking-eyebrow">Book a call</span>
            <h2 className="booking-title">Excited? Let's Talk Today</h2>
            <p className="booking-lead">
              Get a live, personalized walkthrough of how Copper Studio takes a brand
              from logo to a finished website — and how we can do the same for you.
            </p>

            <ul className="booking-points">
              {points.map((text) => (
                <li key={text} className="booking-point">
                  <span className="booking-check" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <div className="booking-meta">
              <div className="booking-meta-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"></circle><polyline points="12 7 12 12 15 14"></polyline></svg>
                30 minutes
              </div>
              <div className="booking-meta-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 10l4.55-2.28A1 1 0 0 1 21 8.62v6.76a1 1 0 0 1-1.45.9L15 14"></path><rect x="3" y="6" width="12" height="12" rx="2"></rect></svg>
                Video call
              </div>
            </div>

            <p className="booking-signoff">Talk to you soon.</p>
          </div>

          {/* RIGHT — Calendly scheduler */}
          <div className="booking-widget">
            <div
              id="calendly-inline-container"
              className="calendly-inline-widget-wrapper"
              style={{ minWidth: '300px', height: '700px' }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
