import React from 'react';
import { wagonsOverview } from '../../constants/trainInfo';
import './OverviewWagon.css';

const OverviewWagon = (wagonInfo, index) => {
  const wagon = { ...wagonsOverview[wagonInfo.type], ...wagonInfo };
  const w = `${(wagon.overviewWidth || 192)}px`;

  return (
    <div className="overview-wagon" key={index} style={{ width: w }}>
      <div className="overview-wagon-inner">
        <div className="overview-wagon-heading">
          <h3>{wagon.number ? `Vagn ${wagon.number}` : ' '}</h3>
          { wagon.class && <span className="overview-wagon-icon"><h3 className="overview-wagon-class">{wagon.class}</h3></span> }
          { wagon.icon && <span className="overview-wagon-icon"><img src={wagon.icon} alt="seatIcon"></img></span> }
        </div>
        <img className="overview-wagon-image" src={wagon.overview} alt="train" />
        {/* <img className="overview-wagon-background-image" src={wagon.backgroundLayerImg} style={{ clip: 'rect(0px,100px,35px,50px)' }} alt="train" /> */}
      </div>
    </div>
  );
};

export default OverviewWagon;
