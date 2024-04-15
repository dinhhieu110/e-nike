import './advetisement.scss';
import React from 'react';

function Advertisement() {
  return (
    <div className="ad-container">
      <div className="ad-images">
        <img src="./imgs/ad1.png" alt="shoe_image" />
        <img src="./imgs/ad2.png" alt="shoe_image" />
        <img src="./imgs/ad3.png" alt="shoe_image" />
      </div>
      <div className="ad-content">
        <div className="left"></div>
        <div className="content">
          <p className="content-title">Air for Running</p>
          <p className="content-text">
            Run farther. Do it for longer. Built to last with each step, Nike
            Air Zoom absorbs impact so that you can take the world in strides.
            Time to outpace your fiercest competition: yourself.
          </p>
          <p className="content-foot">
            Pictured: AlphaFly 3, Pegasus 41, Air Zoom Maxfly 2 in the Nike.
          </p>
          <button className="content-more">Following running</button>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}

export default Advertisement;
