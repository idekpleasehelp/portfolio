import React from 'react'

import Navigation from '../components/Navigation';

import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import AboutContent from '../components/AboutContent';

const About = () => {
  return (
    <div>
      <Navigation />
      <HeroImg2 heading="about(snehal)" text="A FrontEnd Developer..."/>
      <AboutContent />
        <Footer />
    </div>
  )
}

export default About