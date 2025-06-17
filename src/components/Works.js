import React from 'react';
// import './Works.css';
import WorkCard from './WorkCard';
import Analysis from '../assets/Analysis.svg';
import Fortknox from '../assets/Fortknox.svg';
import Zenocide from '../assets/Zenocide.svg';
import brandingIcon from '../assets/brandingIcon.svg';

function Works() {
  const workItems = [
    {
      image: Analysis,
      title: "Analysis Application",
      description: "With a user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.",
      tags: ["FIGMA", "UX"],
      link: "#"
    },
    {
      image: Fortknox,
      title: "Marketing Dashboard",
      description: "Designed a marketing dashboard to visualize real-time campaign data and performance insights.",
      tags: ["React", "UI"],
      link: "#"
    },
    {
      image: Zenocide,
      title: "E-commerce Platform",
      description: "Created a responsive e-commerce interface to streamline product discovery and checkout flow.",
      tags: ["Webflow", "Shopify"],
      link: "#"
    }
  ];

  return (
    <section className="works-section">
      <div className="works-header">
        <h2><img src={brandingIcon} alt="star" className="star-icon" /> Works</h2>
        <a href="#" className="view-all">View All</a>
      </div>

      {workItems.map((work, idx) => (
        <WorkCard
          key={idx}
          image={work.image}
          title={work.title}
          description={work.description}
          tags={work.tags}
          link={work.link}
        />
      ))}
    </section>
  );
}

export default Works;
