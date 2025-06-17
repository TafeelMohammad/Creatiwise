import React from 'react';
import './ExpertiseIn.css';
import brandingIcon from '../assets/brandingIcon.svg';
import Icon from '../assets/Icon.svg';

function ExpertiseIn() {
  const data = [
    {
      icon: brandingIcon,
      title: 'Branding',
      desc: 'I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.',
    },
    {
      icon: Icon,
      title: 'UI Design',
      desc: 'I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.',
    },
    {
      icon: Icon,
      title: 'UX Design',
      desc: 'I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.',
    },
    {
      icon: Icon,
      title: 'Development',
      desc: 'I create efficient, adaptable, and engaging websites. No predefined patterns. No sluggish, complex code. Webflow forms the foundation of my web development approach. I employ it to provide safe, top-notch bespoke websites.',
    },
  ];

  return (
    <section className="expertise-section">
      <h2 className="expertise-heading">
        <img src={brandingIcon} alt="icon" className="expertise-star" />
        Expertise
      </h2>

      <div className="expertise-grid">
        {data.map((item, index) => (
          <div className="expertise-box" key={index}>
            <h3 className="expertise-title">
              <span className="bullet">▪</span> {item.title}
            </h3>
            <p className="expertise-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExpertiseIn;
