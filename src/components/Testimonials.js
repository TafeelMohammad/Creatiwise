// File: Testimonials.js

import React from 'react';
import './Testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import brandingIcon from '../assets/brandingIcon.svg';
import testimonialImg from '../assets/floyd.svg';
import quoteImg from '../assets/quote.svg';

const testimonials = [
  {
    name: 'Floyd Miles',
    company: 'eBay',
    image: testimonialImg,
    message: `Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.`
  },
  {
    name: 'Floyd Miles',
    company: 'eBay',
    image: testimonialImg,
    message: `Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.`
  },
  {
    name: 'Floyd Miles',
    company: 'eBay',
    image: testimonialImg,
    message: `Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.`
  },
  {
    name: 'Floyd Miles',
    company: 'eBay',
    image: testimonialImg,
    message: `Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.`
  },
  // Add up to 4 testimonial objects here as needed
];

function Testimonials() {
  return (
    <section className="testimonials">
      <h2 className="testimonials-heading"><img src={brandingIcon} alt="icon" className="expertise-star" /> What they say</h2>
      <Swiper
        modules={[Navigation]}
        navigation={{ nextEl: '.next-button', prevEl: '.prev-button' }}
        spaceBetween={50}
        slidesPerView={1}
        className="swiper-container"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-slide">
              <div className="testimonial-profile">
                <img src={testimonial.image} alt={testimonial.name} className="profile-img" />
                <div>
                  <h3>{testimonial.name}</h3>
                  <p>{testimonial.company}</p>
                </div>
              </div>
              <div className="testimonial-message">
                <img src={quoteImg} alt="quote" className="quote-img" />
                <p>{testimonial.message}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="testimonial-controls">
        <button className="prev-button">←</button>
        <button className="next-button">→</button>
      </div>
    </section>
  );
}

export default Testimonials;
