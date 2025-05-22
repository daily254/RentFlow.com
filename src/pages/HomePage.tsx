import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Pricing from '../components/home/Pricing';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';
import StayUpdated from '../components/home/StayUpdated';
import PopupSignup from '../components/common/PopupSignup';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <StayUpdated />
        <FAQ />
      </main>
      <Footer />
      <PopupSignup />
    </div>
  );
};

export default HomePage;