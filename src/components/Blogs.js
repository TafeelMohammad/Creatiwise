import React from "react";
import "./Blogs.css";
import Nov9 from "../assets/Nov9.svg";
import Aug18 from "../assets/Aug18.svg";
import Feb16 from "../assets/Feb16.svg";
import brandingIcon from '../assets/brandingIcon.svg';

const blogPosts = [
  {
    id: 1,
    date: "Nov 9, 2023",
    title: "How UX works in web",
    tags: ["UI", "UX"],
    image: Nov9,
  },
  {
    id: 2,
    date: "Aug 18, 2023",
    title: "Case study - Analysis Application.",
    tags: ["DESIGN", "PRINT"],
    image: Aug18,
  },
  {
    id: 3,
    date: "Feb 16, 2023",
    title: "3 ways to develop your skill",
    tags: ["FIGMA", "WEB"],
    image: Feb16,
  },
];

function Blogs() {
  return (
    <section className="blogs-section">
      <div className="blogs-header">
        <h2><img src={brandingIcon} alt="icon" className="expertise-star" /> Blog</h2>
        <a href="#" className="view-all">view all</a>
      </div>

      {blogPosts.map((post) => (
        <div className="blog-card" key={post.id}>
          <div className="blog-image">
            <img src={post.image} alt={post.title} />
          </div>
          <div className="blog-content">
            <p className="blog-date">{post.date}</p>
            <h3>{post.title}</h3>
            <div className="blog-tags">
              {post.tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>
          </div>
          <div className="blog-read-btn">
            <button>Read</button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Blogs;
