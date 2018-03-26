import React from 'react';
import './Route.css';

const Route = (props) => (
  <div className="route-container">
    <div className="route-box">
      <h2 className="route">{props.section.from} - {props.section.to}</h2>
    </div>
  </div>
);

export default Route;
