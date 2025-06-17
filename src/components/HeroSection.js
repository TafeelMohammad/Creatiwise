import React from 'react';
import './HeroSection.css';
import logo1 from '../assets/1.svg';
import logo2 from '../assets/2.svg';
import wavefun from '../assets/wavefun.svg';
import Frame from '../assets/Frame.svg';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-text">
          I AM A <img src={logo1} alt="1" className="inline-img" /> FREELANCE <br />
          DESIGNER <img src={logo2} alt="2" className="inline-img" /> FROM <br />
          San Francisco
        </h1>
      </div>

      <div className="hero-footer">
        <img src={require('../assets/doradesign.png')} alt="doradesign" className="footer-logo" />
        <img src={wavefun} alt="wavefun" className="footer-logo" />
        <img src={Frame} alt="Frame" className="footer-logo" />
        <p className="footer-text">Welcome to my portfolio. Here, artistry meets functionality. Dive into a curated showcase of distinctive branding and web designs, each crafted to captivate and inspire.</p>
      </div>
    </section>
  );
}

export default HeroSection;
