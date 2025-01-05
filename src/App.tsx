import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Teams from './components/teams/Teams';
import FoundersColumn from './components/founder/FoundersColumn';
import Gallery from './components/gallery/Gallery';
import Contact from './components/contact/Contact';
import Footer from './components/Footer';
import DynamicBackground from './components/DynamicBackground';

export default function App() {
  return (
    <div className="min-h-screen">
      <DynamicBackground />
      <Navbar />
      <Hero />
      <About />
      <Teams />
      <FoundersColumn />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}