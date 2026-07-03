import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Pricing from './Pricing';
import ComparisonStrip from './ComparisonStrip';
import ProcessRoadmap from './ProcessRoadmap';
import WallOfLove from './WallOfLove';
import FAQ from './FAQ';
import Booking from './Booking';
import Footer from './Footer';
import { services } from './servicesData';
import './ContactPage.css';
import './ServicesPage.css';

function ServicesPage() {
  // Shared toggle so Pricing and the Comparison strip switch services together.
  const [pricingService, setPricingService] = useState('brand');

  return (
    <>
      <Navbar activeSection="services" />

      <div className="services-page">
        {/* Hero header — same style as the contact page */}
        <div className="contact-hero-wrap">
          <div className="contact-hero-card">
            <div className="contact-hero-bg" />
            <div className="contact-hero-content">
              <h1 className="contact-hero-title">Everything Your Brand Needs</h1>
              <p className="contact-hero-sub">From identity to website to client portal — explore the services we craft to help your brand stand out, connect, and grow.</p>
            </div>
          </div>
        </div>

        {/* Three clickable service cards */}
        <div className="svc-cards-section">
          <div className="svc-cards-grid">
            {services.map((s) => (
              <Link to={`/services/${s.slug}`} className="svc-card" key={s.slug}>
                <div className="svc-card-top">
                  <span className="svc-card-number">{s.number} — {s.category}</span>
                  <h2 className="svc-card-name">
                    <span className="svc-card-name-copper">{s.name}</span>
                    <span className="svc-card-name-suffix">{s.suffix}</span>
                  </h2>
                </div>
                <p className="svc-card-desc">
                  <span className="svc-card-highlight">{s.highlight}</span> {s.desc}
                </p>
                <div className="svc-card-more">
                  Want To <strong>Know More?</strong>
                  <span className="svc-card-arrow">
                    <svg width="7" height="10" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L5 4L1 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Pricing — reused from home page, toggle shared with comparison strip */}
        <Pricing activeService={pricingService} onServiceChange={setPricingService} />

        {/* Comparison strip — mirrors the pricing toggle */}
        <ComparisonStrip activeService={pricingService} />

        {/* Process — reused */}
        <ProcessRoadmap />

        {/* Bento boxes / testimonials — reused */}
        <WallOfLove />

        {/* End section — same as contact/home */}
        <FAQ />
        <Booking />
        <Footer />
      </div>
    </>
  );
}

export default ServicesPage;
