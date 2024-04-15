import React from 'react';
import './about.scss';
import Slogan from '../../components/slogan/Slogan';
import Advertisement from '../../components/advertisement/Advertisement';
import Footer from '../../components/footer/Footer';
function About() {
  return (
    <div className="about-container">
      <Slogan />
      <Advertisement />
    </div>
  );
}

export default About;
