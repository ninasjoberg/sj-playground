import React from 'react';
import './TripHeader.css';

const TripHeader = (props) => (
  <div className="trip-header-container" onClick={() => props.onClick()} role="button">
    <div className="trip-header-box">
      <h2 className="trip-header">{props.from} - {props.to}</h2>
    </div>
  </div>
);

export default TripHeader;
