import React, { useState } from 'react';
import './ComparisonStrip.css';
import { pricingServices, buildComparisonRows } from './pricingData';

const Check = () => (
  <svg className="cmp-check" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11" fill="#EE7A1D" />
    <path d="M7 12.5l3 3 6.5-6.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Dash = () => (
  <svg className="cmp-cross" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11" fill="#E5E2D9" />
    <path d="M8 12h8" stroke="#9a938a" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ComparisonStrip = ({ activeService = 'brand' }) => {
  const [open, setOpen] = useState(false);

  const service = pricingServices.find((s) => s.key === activeService) ?? pricingServices[0];
  const rows = buildComparisonRows(service.plans);

  return (
    <section className="comparison-section">
      <div className="comparison-inner">
        <div className="comparison-head">
          <h2 className="comparison-title">Compare Plans</h2>
          <p className="comparison-sub">
            See exactly what's included in each {service.label} package — Essential, Advance & Ultimate.
          </p>
        </div>

        <div className={`comparison-strip ${open ? 'open' : ''}`}>
          {/* Clickable bar with arrow */}
          <button
            className="comparison-strip-bar"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
          >
            <span className="cmp-strip-label">
              Compare <strong>{service.label}</strong> plans
            </span>
            <div className="cmp-strip-right">
              <div className="cmp-strip-pills">
                <span className="cmp-pill">Essential</span>
                <span className="cmp-pill cmp-pill-popular">Advance</span>
                <span className="cmp-pill">Ultimate</span>
              </div>
              <span className={`cmp-strip-arrow ${open ? 'open' : ''}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </button>

          {/* Expanding table (in-flow — pushes content below) */}
          <div className={`comparison-table ${open ? 'open' : ''}`}>
            <div className="cmp-row cmp-row-head">
              <div className="cmp-cell cmp-cell-feature"></div>
              <div className="cmp-cell cmp-col-head">Essential</div>
              <div className="cmp-cell cmp-col-copper cmp-col-copper-head">Advance</div>
              <div className="cmp-cell cmp-col-head">Ultimate</div>
            </div>

            {rows.map((row, i) => (
              <div className="cmp-row" key={i}>
                <div className="cmp-cell cmp-cell-feature">{row.label}</div>
                <div className="cmp-cell">{row.values[0] ? <Check /> : <Dash />}</div>
                <div className="cmp-cell cmp-col-copper">{row.values[1] ? <Check /> : <Dash />}</div>
                <div className="cmp-cell">{row.values[2] ? <Check /> : <Dash />}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonStrip;
