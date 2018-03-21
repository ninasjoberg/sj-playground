import React from 'react';
import './SeatSelectorWagon.css';
import bistroIcon from '../../assets/bistro.svg';
import train from '../../assets/train.png';
import trainTwo from '../../assets/train-2.png';
import TrainImg from '../../assets/train-img.svg';
import TrainBistroImg from '../../assets/train-bistro-img.svg';


const wagons = [
  { name: 'Vagn 1', icon: false, selected: false, class: '1 kl' },
  { name: 'Vagn 2', icon: false, selected: false, class: '1 kl' },
  { name: 'Vagn 3', icon: false, selected: false, class: false },
  { name: 'Vagn 4', icon: bistroIcon, selected: false, class: false },
  { name: 'Vagn 5', icon: false, selected: false, class: false },
  { name: 'Vagn 6', icon: false, selected: false, class: false },
];

const Wagon = (wagon) => (
  <div className="wagon">
    <h3 className="wagon-heading">{wagon.name}</h3>
    { wagon.class && <span className="wagon-icon"><h3 className="wagon-class">{wagon.class}</h3></span> }
    { wagon.icon && <span className="wagon-icon"><img src={wagon.icon} alt="seatIcon"></img></span> }
  </div>
);


class seatSelectorWagon extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const scrollDiv = document.querySelector('.seat-map-scroll-container');
    scrollDiv.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {

    const seatMapWidth = event.target.scrollWidth; //total scroll width
    const seatMapCurrentScrollPosition = event.target.scrollLeft; //is this the right value to use? will never be 1
    console.log('left', event.target.scrollLeft);
    const scrollWith = seatMapCurrentScrollPosition / (seatMapWidth + event.target.clientWidth);

    console.log('scrollWith', scrollWith);
    console.log('scrollTo', scrollWith * 1366);

    const scrollDivOne = document.querySelector('.scroll-container');
    scrollDivOne.scrollTo(((scrollWith * 1366) - 365), 0);

  }

  render() {
    return (
      <div>
        <div className="scroll-container">
          <div className="wagon-container">
            { wagons.map((w) => Wagon(w)) }
          </div>
          <img className="train-png"src={train} alt="seatIcon"></img>
          <img className="train-png train-two"src={trainTwo} alt="seatIcon"></img>
        </div>
        <div className="seat-map-scroll-container">
          <div className="locomotive">LOK</div>
          <img className="train-img"src={TrainImg} alt="seatIcon"></img>
          <img className="train-img"src={TrainImg} alt="seatIcon"></img>
          <img className="train-img"src={TrainImg} alt="seatIcon"></img>
          <img className="train-img"src={TrainBistroImg} alt="seatIcon"></img>
          <img className="train-img"src={TrainImg} alt="seatIcon"></img>
          <img className="train-img"src={TrainImg} alt="seatIcon"></img>
        </div>
      </div>
    );
  }
}
export default seatSelectorWagon;
