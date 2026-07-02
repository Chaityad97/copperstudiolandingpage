import React from 'react';
import './ServicesSection.css';

import brand1 from './assets/logos/Group 79.svg';
import brand2 from './assets/logos/Group 80.svg';
import brand3 from './assets/logos/Group 81.svg';
import brand4 from './assets/logos/CC LOGO 500X500 FAVICON BLUE BG WHITE FONT BIG SIZE Background Removed 2.svg';
import brand5 from './assets/logos/Group 82.svg';
import brand7 from './assets/logos/DataCircles White Logo 2 (1).svg';

import brandBrochureImg from './assets/brand-identity-brochure.png';
import brandBrochureVid from './assets/brand-identity-brochure.mp4';
import commonGroundsImg from './assets/common-grounds.jpg';
import commonGroundsVid from './assets/Transform_this_static_café_sce.mp4';
import teaBoxesImg from './assets/Tea - Boxes 1.png';
import teaBoxesVid from './assets/Create_a_subtle_looping_animat.mp4';
import premiumGroupImg from './assets/image.png';
import premiumGroupVid from './assets/Create_a_premium_micro_animati (3).mp4';

export default function ServicesSection() {
  const logos = [brand1, brand2, brand3, brand4, brand5, brand7];

  return (
    <div className="services-wrapper">
      {/* Trusted Brands Banner */}
      <div className="trusted-banner">
        <h3 className="trusted-banner-title">Brands Who Trusted Us With Their Vision</h3>
        <div className="trusted-marquee">
          <div className="trusted-marquee-track">
            {[...Array(3)].map((_, i) => (
              <React.Fragment key={i}>
                {logos.map((logo, index) => (
                  <img src={logo} alt={`Brand ${index}`} key={`${i}-${index}`} className="trusted-logo" />
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Main Services Area */}
      <div className="services-main-container">
        <div className="services-header">
          <h2 className="services-title">Services To Design Your Brand</h2>
          <p className="services-subtitle">
            From strategy and visual identity to websites and ongoing support, we create thoughtful brand experience that helps your business stand out, connect and grow.
          </p>
        </div>

        <div className="services-list">
          <div className="service-divider"></div>

          {/* Service 01 */}
          <div className="service-block block-01">
            <div className="service-top-row">
              <div className="service-number text-orange">01 - BRAND IDENITY</div>
              <div className="service-logo-text">
                <span className="logo-copper">Copper</span><span className="logo-suffix">Brand</span>
              </div>
              <div className="service-desc-col">
                <p className="service-desc">
                  <span className="desc-highlight text-orange">From first impressions to lasting recognition.</span> We believe great brands are built through consistency at every touchpoint. By combining strategy, visual identity, print, packaging, and branded assets, we create unified brand experiences that people remember and businesses grow with.
                </p>
              </div>
            </div>
            <div className="service-cards-grid grid-4">
              <div 
                className="s-card interactive-media-card"
                onMouseEnter={(e) => {
                  const vid = e.currentTarget.querySelector('video');
                  if (vid) vid.play();
                }}
                onMouseLeave={(e) => {
                  const vid = e.currentTarget.querySelector('video');
                  if (vid) {
                    vid.pause();
                    vid.currentTime = 0;
                  }
                }}
              >
                <img src={premiumGroupImg} alt="Cottson Clothing" className="s-card-img" />
                <video 
                  src={premiumGroupVid} 
                  className="s-card-vid" 
                  muted 
                  loop 
                  playsInline 
                  disablePictureInPicture
                  controlsList="nodownload noplaybackrate"
                />
              </div>
              <div 
                className="s-card interactive-media-card"
                onMouseEnter={(e) => {
                  const vid = e.currentTarget.querySelector('video');
                  if (vid) vid.play();
                }}
                onMouseLeave={(e) => {
                  const vid = e.currentTarget.querySelector('video');
                  if (vid) {
                    vid.pause();
                    vid.currentTime = 0;
                  }
                }}
              >
                <img src={commonGroundsImg} alt="Common Grounds" className="s-card-img" />
                <video 
                  src={commonGroundsVid} 
                  className="s-card-vid" 
                  muted 
                  loop 
                  playsInline 
                  disablePictureInPicture
                  controlsList="nodownload noplaybackrate"
                />
              </div>
              <div 
                className="s-card interactive-media-card"
                onMouseEnter={(e) => {
                  const vid = e.currentTarget.querySelector('video');
                  if (vid) vid.play();
                }}
                onMouseLeave={(e) => {
                  const vid = e.currentTarget.querySelector('video');
                  if (vid) {
                    vid.pause();
                    vid.currentTime = 0;
                  }
                }}
              >
                <img src={teaBoxesImg} alt="Tea Boxes" className="s-card-img" />
                <video 
                  src={teaBoxesVid} 
                  className="s-card-vid" 
                  muted 
                  loop 
                  playsInline 
                  disablePictureInPicture
                  controlsList="nodownload noplaybackrate"
                />
              </div>
              <div 
                className="s-card interactive-media-card"
                onMouseEnter={(e) => {
                  const vid = e.currentTarget.querySelector('video');
                  if (vid) vid.play();
                }}
                onMouseLeave={(e) => {
                  const vid = e.currentTarget.querySelector('video');
                  if (vid) {
                    vid.pause();
                    vid.currentTime = 0;
                  }
                }}
              >
                <img src={brandBrochureImg} alt="ELEVE 45" className="s-card-img" />
                <video 
                  src={brandBrochureVid} 
                  className="s-card-vid" 
                  muted 
                  loop 
                  playsInline 
                  disablePictureInPicture
                  controlsList="nodownload noplaybackrate"
                />
              </div>
            </div>
            <div className="service-more">
              Want To <strong>Know More?</strong>
              <div className="more-arrow-btn">
                <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 4L1 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="service-divider"></div>

          {/* Service 02 */}
          <div className="service-block block-02">
            <div className="service-split-layout">
              <div className="service-left-col">
                <div className="service-number text-light-orange">02 - WEB DESIGN & DEVELOPMENT</div>
                <div className="service-logo-text">
                  <span className="logo-copper">Copper</span><span className="logo-suffix">Web</span>
                </div>
                <p className="service-desc max-w-400">
                  <span className="desc-highlight text-light-orange">We take care of everything your website needs,</span> from custom design and development to secure hosting, routine maintenance, and continuous optimization—so you can focus on growing your business while your website performs at its best.
                </p>
              </div>
              <div className="service-right-col grid-2">
                <div className="s-card"></div>
                <div className="s-card"></div>
              </div>
            </div>
            <div className="service-more">
              Want To <strong>Know More?</strong>
              <div className="more-arrow-btn">
                <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 4L1 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          <div className="service-divider"></div>

          {/* Service 03 */}
          <div className="service-block block-03">
            <div className="service-split-layout">
              <div className="service-left-col">
                <div className="service-number text-light-orange">03 - CLIENT PORTAL</div>
                <div className="service-logo-text">
                  <span className="logo-copper">Copper</span><span className="logo-suffix">Flow</span>
                </div>
                <p className="service-desc max-w-600">
                  <span className="desc-highlight text-light-orange">Custom Portals Built Around Your Business.</span> Every business works differently, and your portal should too. We design and develop custom client, employee, and business portals that simplify workflows, centralize information, and create secure, intuitive experiences tailored to the way your team and customers work.
                </p>
              </div>
              <div className="service-right-col grid-1">
                <div className="s-card"></div>
              </div>
            </div>
            <div className="service-more">
              Want To <strong>Know More?</strong>
              <div className="more-arrow-btn">
                <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 4L1 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="service-divider"></div>
        </div>
      </div>
    </div>
  );
}
