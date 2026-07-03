import React from 'react';
import { useParams, Link } from 'react-router-dom';
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

        {/* Pricing — locked to this service only (no toggle) */}
        <Pricing activeService={service.pricingKey} showToggle={false} />

        {/* Comparison strip — this service's plans only */}
        <ComparisonStrip activeService={service.pricingKey} />

        {/* Process — reused */}
        <ProcessRoadmap />

        {/* Bento boxes / testimonials — reused */}
        <WallOfLove />

        {/* End section — same as contact/services */}
        <FAQ />
        <Booking />
        <Footer />
      </div>
    </>
  );
}

export default ServiceDetail;
