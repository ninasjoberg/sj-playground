import React from 'react';
import './SeatSelectorWagon.css';
import bistroIcon from '../../assets/bistro.svg';
import interiorImg from '../../assets/train-img.svg';
import interiorBistroImg from '../../assets/train-bistro-img.svg';
import interiorLocomotive from '../../assets/locomotive.png';
import overviewLocomotive from '../../assets/overview/loc.png';
import overviewWagon from '../../assets/overview/wagon.png';
import overviewEndWagon from '../../assets/overview/endwagon.png';

const wagons = [
  { type: 'locomotive', name: null, icon: false, selected: false, class: null, interior: interiorLocomotive, overview: overviewLocomotive, overviewWidth: '186px', width: '1000px' },
  { name: 'Vagn 1', icon: false, selected: false, class: '1 kl', interior: interiorImg, overview: overviewWagon },
  { name: 'Vagn 2', icon: false, selected: false, class: '1 kl', interior: interiorImg, overview: overviewWagon },
  { name: 'Vagn 3', icon: false, selected: false, class: false, interior: interiorImg, overview: overviewWagon },
  { name: 'Vagn 4', icon: bistroIcon, selected: false, class: false, interior: interiorBistroImg, overview: overviewWagon, width: '1578px' },
  { name: 'Vagn 5', icon: false, selected: false, class: false, interior: interiorImg, overview: overviewWagon },
  { name: 'Vagn 6', icon: false, selected: false, class: false, interior: interiorImg, overview: overviewEndWagon, overviewWidth: '206px', width: '1630px' },
];

const OverviewWagon = (wagon) => {
  const w = wagon.overviewWidth || '190px';
  return (
    <div className="wagon" style={{ width: w }}>
      <div className="wagon-heading">
        <h3>{wagon.name}</h3>
        { wagon.class && <span className="wagon-icon"><h3 className="wagon-class">{wagon.class}</h3></span> }
        { wagon.icon && <span className="wagon-icon"><img src={wagon.icon} alt="seatIcon"></img></span> }
      </div>
      <img className="overview-wagon-image" src={wagon.overview} alt="train" />
    </div>
  )
};

const SeatMapWagon = (wagon) => {
  const cl = wagon.type ? `seatmap-wagon ${wagon.type}` : 'seatmap-wagon';
  const w = wagon.width || '1366px';
  return (
    <div className={cl} style={{ width: w }}>
      <img className="train-img"src={wagon.interior} alt="seatIcon"></img>
    </div>
  );
};


class seatSelectorWagon extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const seatMapScroll = document.querySelector('.seatmap-scroll');
    const overviewScroll = document.querySelector('.overview-scroll');
    // add rezise listener
    const overviewWidth = document.querySelector('.overview-container').getBoundingClientRect().width;
    const seatMapWidth = document.querySelector('.seatmap-container').getBoundingClientRect().width;
    const screenWidth = seatMapScroll.getBoundingClientRect().width;
    const targets = {
      leaderWidth: seatMapWidth,
      leaderScroll: seatMapScroll,
      followerWidth: overviewWidth,
      followerScroll: overviewScroll,
      screenWidth,
    };
    seatMapScroll.addEventListener('scroll', (e) => this.handleScroll(e, targets));
  }

  handleScroll = (event, targets) => {
    const scrollPercent = targets.leaderScroll.scrollLeft / (targets.leaderWidth - targets.screenWidth);
    const scrollTarget = scrollPercent * (targets.followerWidth - targets.screenWidth);
    targets.followerScroll.scrollTo(scrollTarget, 0);
  }

  render() {
    return (
      <div>
        <div className="overview-scroll">
          <div className="overview-container">
            { wagons.map((w) => OverviewWagon(w)) }
          </div>
        </div>
        <div className="seatmap-scroll">
          <div className="seatmap-container">
            { wagons.map((w) => SeatMapWagon(w)) }
          </div>
        </div>
      </div>
    );
  }
}
export default seatSelectorWagon;
