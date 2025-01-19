import React from 'react';
import Carousel from '../components/Carousel';
import Timeline from '../components/Timeline';
import CTA from '../components/CTA';
import Features from '../components/Features';


function Home() {
  return (
    <div>
      <Carousel />
      <Timeline />
      <Features/>
      <CTA/>
    </div>
  );
}

export default Home;
