import React from 'react';
import './TripHeader.css';

const TripHeader = (props) => (
  <div className="route-container" onClick={() => props.onClick()}>
    <div className="route-box">
      <h2 className="route">{props.from} - {props.to}</h2>
    </div>
  </div>
);

export default TripHeader;
