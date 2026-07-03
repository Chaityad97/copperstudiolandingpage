import React from 'react';
import Navbar from './Navbar';
import FAQ from './FAQ';
import Booking from './Booking';
import Footer from './Footer';
import './ContactPage.css';

function ContactPage() {
  return (
    <>
      <Navbar activeSection="contact" />

      <div className="contact-page">
        {/* Hero header */}
        <div className="contact-hero-wrap">
          <div className="contact-hero-card">
            <div className="contact-hero-bg" />
            <div className="contact-hero-content">
              <h1 className="contact-hero-title">Contact our friendly team</h1>
              <p className="contact-hero-sub">Let us know how we can help. Our team is here to support your creative journey and brand evolution.</p>
            </div>
          </div>
        </div>

        {/* Contact methods section */}
        <div className="contact-methods-section">
          <div className="contact-methods-inner">
            <div className="contact-cards-grid">
              <div className="contact-card">
                <div className="contact-card-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
                </div>
                <h3 className="contact-card-title">Chat to sales</h3>
                <p className="contact-card-desc">Speak to our friendly team.</p>
                <a className="contact-card-link" href="mailto:sales@thecopperstudio.com">sales@thecopperstudio.com</a>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
                </div>
                <h3 className="contact-card-title">Chat to support</h3>
                <p className="contact-card-desc">We're here to help.</p>
                <a className="contact-card-link" href="mailto:support@thecopperstudio.com">support@thecopperstudio.com</a>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
                </div>
                <h3 className="contact-card-title">Visit us</h3>
                <p className="contact-card-desc">Visit our office HQ.</p>
                <a className="contact-card-link" href="https://share.google/Bqenkvy3nbX5VUJ7p" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
                </div>
                <h3 className="contact-card-title">Call us</h3>
                <p className="contact-card-desc">Mon-Fri from 8am to 5pm.</p>
                <a className="contact-card-link" href="tel:+919820933877">+91 98209 33877</a>
              </div>
            </div>
          </div>
        </div>

        {/* Get in Touch — map + contact details */}
        <div className="git-section">
          <div className="git-card">
            {/* Left: map */}
            <a
              className="git-map-wrap"
              href="https://www.google.com/maps/search/?api=1&query=Centura+Square+IT+Park,+Rd+Number+27,+Wagle+Industrial+Estate,+Thane+West,+Thane,+Maharashtra+400604"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open location in Google Maps"
            >
              <iframe
                className="git-map-iframe"
                title="Copper Studio Location"
                src="https://www.google.com/maps?q=Centura+Square+IT+Park,+Rd+Number+27,+Wagle+Industrial+Estate,+Thane+West,+Thane,+Maharashtra+400604&output=embed"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="git-map-overlay">
                <span className="git-map-cta">Open in Google Maps ↗</span>
              </div>
            </a>

            {/* Right: details */}
            <div className="git-details">
              <div className="git-heading-block">
                <h2 className="git-title">Get in Touch</h2>
                <p className="git-desc">Have a question or just want to say hello? We'd love to hear from you. Reach out and we'll get back to you as soon as possible.</p>
              </div>

              <div className="git-divider" />

              <div className="git-info-row">
                <div className="git-info-icon">
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="git-address">No. 721, Floor 7th, Centura Square IT Park, Rd Number 27, Wagle Industrial Estate, Thane West, Thane, Maharashtra 400604</p>
              </div>

              <div className="git-info-row">
                <div className="git-info-icon git-info-icon--lg">
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="git-contact-links">
                  <a className="git-phone" href="tel:+919820933877">+91 98209 33877</a>
                  <a className="git-email" href="mailto:sales@thecopperstudio.com">sales@thecopperstudio.com</a>
                  <a className="git-email" href="mailto:support@thecopperstudio.com">support@thecopperstudio.com</a>
                  <a className="git-email" href="mailto:help@thecopperstudio.com">help@thecopperstudio.com</a>
                </div>
              </div>

              <div className="git-divider" />

              <div className="git-info-row git-social-row">
                <a className="git-social-link" href="https://www.instagram.com/the_copperstudio/" target="_blank" rel="noopener noreferrer">
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="4" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                  </svg>
                  Instagram
                </a>
                <a className="git-social-link" href="https://www.linkedin.com/company/thecopperstudio" target="_blank" rel="noopener noreferrer">
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="2" y="9" width="4" height="12" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="4" cy="4" r="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Image section — content to be added later */}
        <div className="contact-img-section">
          <div className="contact-img-box">
            <span className="contact-img-label">IMAGES</span>
          </div>
        </div>

        {/* End section — same as home page */}
        <FAQ />
        <Booking />
        <Footer />
      </div>
    </>
  );
}

export default ContactPage;
