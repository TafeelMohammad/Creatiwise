import React from 'react';
import './WorkCard.css';

function WorkCard({ image, title, description, tags, link }) {
  return (
    <div className="works-card">
  <div className="works-image">
    <img src={image} alt={title} />
  </div>
  <div className="works-content">
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="tags">
      {tags.map((tag, idx) => (
        <span key={idx}>{tag}</span>
      ))}
    </div>
    <a href={link} className="case-study-btn mt-auto">View Case Study</a>
  </div>

  {/* Ellipse goes behind everything */}
  <div className="ellipse-bg"></div>
</div>

  );
}

export default WorkCard;
