import React from 'react';
import './SeatSelectorWagon.css';
import bistroIcon from '../../assets/bistro.svg';
import train from '../../assets/train.png';
import trainTwo from '../../assets/train-2.png';
import interiorImg from '../../assets/train-img.svg';
import interiorBistroImg from '../../assets/train-bistro-img.svg';
import interiorLocomotive from '../../assets/locomotive.png';

const wagons = [
  { type: 'locomotive', name: null, icon: false, selected: false, class: null, interior: interiorLocomotive, width: "1000px" },
  { name: 'Vagn 1', icon: false, selected: false, class: '1 kl', interior: interiorImg },
  { name: 'Vagn 2', icon: false, selected: false, class: '1 kl', interior: interiorImg },
  { name: 'Vagn 3', icon: false, selected: false, class: false, interior: interiorImg },
  { name: 'Vagn 4', icon: bistroIcon, selected: false, class: false, interior: interiorBistroImg, width: "1578px" },
  { name: 'Vagn 5', icon: false, selected: false, class: false, interior: interiorImg },
  { name: 'Vagn 6', icon: false, selected: false, class: false, interior: interiorImg , width: "1630px"},
];

const OverviewWagon = (wagon) => (
  <div className="wagon">
    <h3 className="wagon-heading">{wagon.name}</h3>
    { wagon.class && <span className="wagon-icon"><h3 className="wagon-class">{wagon.class}</h3></span> }
    { wagon.icon && <span className="wagon-icon"><img src={wagon.icon} alt="seatIcon"></img></span> }
  </div>
);

const SeatMapWagon = (wagon) => {
  const cl = wagon.type ? `seatmap-wagon ${wagon.type}` : 'seatmap-wagon';
  const w = wagon.width || '1366px';
  return (
    <div className={cl} style={{width: w}}>
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
          <img className="train-png"src={train} alt="seatIcon"></img>
          <img className="train-png train-two"src={trainTwo} alt="seatIcon"></img>
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
