import React from 'react';
import CustomNavbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ExpertiseIn from './components/ExpertiseIn';
import Works from './components/Works';
import Experience from './components/Experience';
import Blogs from './components/Blogs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <CustomNavbar />
      <HeroSection />
      <ExpertiseIn/>
      <Works/>
      <Experience/>
      <Blogs/>
      <Testimonials/>
      <FAQ/>
      <Footer/>
      {/* Other sections */}
    </div>
  );
}

export default App;
