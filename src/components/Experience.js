import React from 'react';
import './Experience.css';
import brandingIcon from '../assets/brandingIcon.svg';

const experiences = [
  {
    title: 'Lead Product Designer',
    company: 'Fortknox',
    period: 'Mar 2022 – Oct 2023'
  },
  {
    title: 'Intern Designer',
    company: 'OmniSafe',
    period: 'Mar 2022 – Oct 2023'
  },
  {
    title: 'UI Designer',
    company: 'Doradesign',
    period: 'Mar 2022 – Oct 2023'
  },
  {
    title: 'Frontend Developer',
    company: 'OpacityAuthor',
    period: 'Mar 2022 – Oct 2023'
  }
];

const Experience = () => {
  return (
    <section className="experience-section">
      <div className="experience-header">
        <img src={brandingIcon} alt="star icon" className="star-icon" />
        <h2>Experience</h2>
      </div>
      <div className="experience-list">
        {experiences.map((item, index) => (
          <div className="experience-item" key={index}>
            <div className="experience-title">{item.title}</div>
            <div className="experience-meta">
              <div className="experience-company">{item.company}</div>
              <div className="experience-period">{item.period}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
