import React from 'react'

import Navigation from '../components/Navigation';

import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import Form from '../components/Form';

const Contact = () => {
  return (
    <div>
      <Navigation />
      <HeroImg2 heading="contact(snehal)" text="Let's have a chat..."/>
      <Form />
        <Footer />
    </div>
  )
}

export default Contact