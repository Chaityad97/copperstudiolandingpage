import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';
import FAQ from './FAQ';
import Booking from './Booking';
import Footer from './Footer';
import { services } from './servicesData';
import './ContactPage.css';
import './ServiceDetail.css';

function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <>
        <Navbar activeSection="services" />
        <div className="svc-detail-notfound">
          <h1>Service not found</h1>
          <Link to="/services" className="svc-detail-back">← Back to all services</Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar activeSection="services" />

      <div className="svc-detail-page">
        {/* Hero header — same style as contact/services */}
        <div className="contact-hero-wrap">
          <div className="contact-hero-card">
            <div className="contact-hero-bg" />
            <div className="contact-hero-content">
              <span className="svc-detail-number">{service.number} — {service.category}</span>
              <h1 className="contact-hero-title">{service.name} {service.suffix}</h1>
              <p className="contact-hero-sub">
                <span className="svc-detail-highlight">{service.highlight}</span> {service.desc}
              </p>
            </div>
          </div>
        </div>

        {/* Placeholder body — content to be added later */}
        <div className="svc-detail-body">
          <div className="svc-detail-placeholder">
            <span>{service.name}{service.suffix} — CONTENT COMING SOON</span>
          </div>
          <Link to="/services" className="svc-detail-back">← Back to all services</Link>
        </div>

        {/* End section — same as contact */}
        <FAQ />
        <Booking />
        <Footer />
      </div>
    </>
  );
}

export default ServiceDetail;
