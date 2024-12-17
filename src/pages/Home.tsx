import React from 'react';
import { Hero } from '../components/home/Hero';
import { Services } from '../components/home/Services';
import { Features } from '../components/home/Features';
import { FeatureShowcase } from '../components/home/FeatureShowcase';
import { TrustIndicators } from '../components/home/TrustIndicators';
import { Testimonials } from '../components/home/Testimonials';
import { AboutUs } from '../components/home/AboutUs';
import { Contact } from '../components/home/Contact';
import { Header } from '../components/layout/Header';
<<<<<<< HEAD

export default function Home() {
=======
import { AIAssistantWidget } from '../components/ai/AIAssistantWidget';

function Home() {
>>>>>>> b597b98 (Update project files and sync with GitHub)
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Features />
        <FeatureShowcase />
        <TrustIndicators />
        <Testimonials />
        <AboutUs />
        <Contact />
      </main>
<<<<<<< HEAD
    </>
  );
}
=======
      <AIAssistantWidget />
    </>
  );
}

export default Home;
>>>>>>> b597b98 (Update project files and sync with GitHub)
