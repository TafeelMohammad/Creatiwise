import React, { useState } from "react";
import "./FAQ.css";
import brandingIcon from '../assets/brandingIcon.svg';

function FAQ() {
  // First item open by default (index 0)
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    // Close if already open, otherwise open the clicked one
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is your design process?",
      answer:
        "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design."
    },
    {
      question: "What tools and software do you use for UX design?",
      answer: "I use tools like Figma, Adobe XD, Sketch, InVision, and user testing tools like Maze or Hotjar depending on the project needs."
    },
    {
      question: "How do you measure the success of your UX designs?",
      answer: "I measure success through usability testing, user satisfaction, goal conversions, and metrics like bounce rate, task completion rate, and Net Promoter Score (NPS)."
    }
  ];

  return (
    <section className="faq-section">
      <h2 className="faq-heading"><img src={brandingIcon} alt="icon" className="expertise-star" /> Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div
          key={index}
          className={`faq-item ${openIndex === index ? "open" : ""}`}
        >
          <h3 onClick={() => toggleFAQ(index)} className="faq-question">
            {item.question}
            <span className="faq-toggle">{openIndex === index ? "−" : "+"}</span>
          </h3>
          <div
            className="faq-answer"
            style={{
              maxHeight: openIndex === index ? "500px" : "0px",
              transition: "max-height 0.4s ease-in-out"
            }}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default FAQ;
