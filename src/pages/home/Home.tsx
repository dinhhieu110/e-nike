import React from 'react';
import './home.scss';
import Slogan from '../../components/slogan/Slogan';
import Advertisement from '../../components/advertisement/Advertisement';
import Store from '../../components/store/Store';
import Footer from '../../components/footer/Footer';
function Home() {
  return (
    <div className="home-container">
      <Slogan />
      <Advertisement />
      <Store />
    </div>
  );
}

export default Home;
