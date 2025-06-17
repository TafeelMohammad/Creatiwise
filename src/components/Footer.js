import React, { useEffect, useRef } from 'react';
import './Footer.css';
import brandingIcon from '../assets/brandingIcon.svg';
import Designer from '../assets/DESIGNER.svg';
import Figma from '../assets/FIGMA.svg';
import Arrow from '../assets/arrow.svg';


const Footer = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContent = scrollRef.current;
    let animationFrameId;

    const scroll = () => {
      scrollContent.scrollLeft += 1;
      if (scrollContent.scrollLeft >= scrollContent.scrollWidth / 2) {
        scrollContent.scrollLeft = 0;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="footer-container">
      <div className="scrolling-text" ref={scrollRef}>
        <div className="scrolling-track">
          {Array(5).fill(null).map((_, i) => (
            <span key={i}>
                <img src={brandingIcon} alt="icon" className="expertise-star" />&nbsp;
                <img src={Designer} alt="icon" />&nbsp;
                <img src={brandingIcon} alt="icon" className="expertise-star" />&nbsp;
                <img src={Figma} alt="icon" />&nbsp;
                <img src={brandingIcon} alt="icon" className="expertise-star" />&nbsp;
                <img src={Designer} alt="icon" />&nbsp;
                <img src={brandingIcon} alt="icon" className="expertise-star" />&nbsp;
                <img src={Figma} alt="icon" />&nbsp;
                                
            </span>
          ))}
        </div>
      </div>
      <div className="footer-contact">
        <h2>LET’S TALK!</h2>
        <p>rehanurraihan@gmail.com &nbsp;<img src={Arrow} alt="icon" /></p>
      </div>
      <div className="footer-bottom">
        <span>© Rehan Raihan - 2023</span>
        <div className="footer-links">
          <a href="#">Dribbble</a>
          <a href="#">Behance</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
