import React from 'react';
import { wagonsOverview } from '../../constants/trainInfo';
import './OverviewWagon.css';

const OverviewWagon = (wagonInfo, index) => {
  const wagon = { ...wagonsOverview[wagonInfo.type], ...wagonInfo };
  const w = `${(wagon.overviewWidth || 192)}px`;


  // const scrollToSeat = document.querySelectorAll('.overview-wagon-image');
  // const scrollSeat = [...scrollToSeat].find((s) => (
  //   Number(s.dataset.wagonId) === this.props.departure.preSelectedSeat.wagonId && Number(s.dataset.seatId) === this.props.departure.preSelectedSeat.seatId
  // ));
  // const leaderScrollTo = (scrollSeat.offsetParent.offsetLeft + scrollSeat.offsetLeft) - (screenWidth / 2);
  // targets.leaderScroll.scrollTo(leaderScrollTo, 0);  // to show the preselected seat from start

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
