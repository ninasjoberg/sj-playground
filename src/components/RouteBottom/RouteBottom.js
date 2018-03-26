import React from 'react';
import greySeatIcon from '../../assets/greySeatIcon.svg';
import './RouteBottom.css';

const RouteBottom = () => (
  <div className="route-bottom-container">
    <div className="route-bottom-box">
      <img src={greySeatIcon} alt="seatIcon"></img>
      <p>Ingen plats vald</p>
    </div>
    <div className="route-bottom-arrow"></div>
  </div>
);

export default RouteBottom;
