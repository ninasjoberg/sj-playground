import React from 'react';
import './Route.css';

const Route = (props) => (
  <div className="route-container">
    <div className="route-box">
      <h2 className="route">{props.section.to} - {props.section.from}</h2>
    </div>
  </div>
);

export default Route;
