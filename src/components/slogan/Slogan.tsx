import './slogan.scss';
import React from 'react';

function Slogan() {
  return (
    <div className="slogan-container">
      <div className="left"></div>
      <div className="slogan">
        <h1 className="slogan-title">WIN ON AIR</h1>
        <p className="slogan-content">
          Designed by athletes, for athletes—those who know what it takes to
          win. Nike Air cushioning is a lightweight, durable and
          industry-leading innovation that absorbs impact and shifts energy back
          into performance, all in flawless comfort. Fly to first, dominate the
          court or take the winning shot—whatever your dream, Air is designed to
          help get you there. Nike Blueprint Pack: available this summer.
        </p>
        <p className="more">Scroll to Explore Air</p>
      </div>
      <div className="right"></div>
    </div>
  );
}

export default Slogan;
