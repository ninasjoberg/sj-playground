import React from 'react';
import './SeatSelectorWagon.css';
import { wagons, availableSeats } from '../../data/tripInfo';
import SeatMapWagon from '../SeatMapWagon/SeatMapWagon';
import OverviewWagon from '../OverviewWagon/OverviewWagon';


class seatSelectorWagon extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedSeat: availableSeats.find((availableSeat) => availableSeat.preSelected),
    };
    this.handleSeatClick = this.handleSeatClick.bind(this);
  }

  componentDidMount() {
    const seatMapScroll = document.querySelector('.seatmap-scroll');
    const overviewScroll = document.querySelector('.overview-scroll');
    // add rezise listener
    const overviewWidth = wagons.reduce((prev, wagon) => (
      prev + (wagon.overviewWidth || 192))
    , 0);

    const seatMapWidth = document.querySelector('.seatmap-container').getBoundingClientRect().width;
    const screenWidth = seatMapScroll.getBoundingClientRect().width;
    const targets = {
      leaderWidth: seatMapWidth,
      leaderScroll: seatMapScroll,
      followerWidth: overviewWidth,
      followerScroll: overviewScroll,
      screenWidth,
    };
    seatMapScroll.addEventListener('scroll', () => this.handleScroll(targets));
    targets.leaderScroll.scrollTo(1000, 0); // to show the wagon with avaliable seats from start, 1000 magic number change to real value based on available seats later on
  }

  handleScroll = (targets) => {
    const scrollPercent = targets.leaderScroll.scrollLeft / (targets.leaderWidth - targets.screenWidth);
    const scrollTarget = scrollPercent * (targets.followerWidth - targets.screenWidth);
    targets.followerScroll.scrollTo(scrollTarget, 0);
  }

  handleSeatClick = (seat) => {
    this.setState({
      selectedSeat: seat,
    });
  }

  render() {
    return (
      <div>
        <div className="overview-scroll">
          <div className="overview-container">
            { wagons.map((w, index) => OverviewWagon(w, index)) }
          </div>
        </div>
        <div className="seatmap-scroll">
          <div className="seatmap-container">
            { wagons.map((w, index) => (
              <SeatMapWagon
                wagonInfo={w}
                availableSeats={availableSeats}
                index={index}
                selectedSeat={this.state.selectedSeat}
                handleSeatClick={this.handleSeatClick}
              />))
            }
          </div>
        </div>
      </div>
    );
  }
}
export default seatSelectorWagon;
