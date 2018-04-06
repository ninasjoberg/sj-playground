import React from 'react';
import { connect } from 'react-redux';
import './SeatSelectorWagon.css';
import { wagons, availableSeats } from '../../data/tripInfo';
import SeatMapWagon from '../SeatMapWagon/SeatMapWagon';
import OverviewWagon from '../OverviewWagon/OverviewWagon';

class SeatSelectorWagon extends React.Component {

  componentWillMount() {
    const overviewWidth = wagons.reduce((prev, wagon) => (
      prev + (wagon.overviewWidth || 192))
    , 0);
    this.overviewWidth = overviewWidth;
  }

  componentDidMount() {
    const seatMapScroll = document.querySelector('.seatmap-scroll');
    const overviewScroll = document.querySelector('.overview-scroll');
    // add rezise listener
    const seatMapWidth = document.querySelector('.seatmap-container').getBoundingClientRect().width;
    const screenWidth = seatMapScroll.getBoundingClientRect().width;
    const targets = {
      leaderWidth: seatMapWidth,
      leaderScroll: seatMapScroll,
      followerWidth: this.overviewWidth,
      followerScroll: overviewScroll,
      screenWidth,
    };
    seatMapScroll.addEventListener('scroll', () => this.handleScroll(targets));

    const scrollToSeat = document.querySelectorAll('.seatmap-seat');
    const scrollSeat = [...scrollToSeat].find((s) => (
      Number(s.dataset.wagonId) === this.props.departure.preSelectedSeat.wagonId && Number(s.dataset.seatId) === this.props.departure.preSelectedSeat.seatId
    ));
    const leaderScrollTo = (scrollSeat.offsetParent.offsetLeft + scrollSeat.offsetLeft) - (screenWidth / 2);
    targets.leaderScroll.scrollTo(leaderScrollTo, 0);  // to show the preselected seat from start
  }

  handleScroll(targets) {
    const scrollPercent = targets.leaderScroll.scrollLeft / (targets.leaderWidth - targets.screenWidth);
    const scrollTarget = scrollPercent * (targets.followerWidth - targets.screenWidth);
    targets.followerScroll.scrollTo(scrollTarget, 0);
  }

  render() {
    return (
      <div>
        <div className="overview-scroll">
          <div className="overview-container" style={{ width: this.overviewWidth }}>
            { wagons.map((w, index) => OverviewWagon(w, index)) }
          </div>
        </div>
        <div className="seatmap-scroll">
          <div className="seatmap-container">
            { wagons.map((w, index) => (
              <SeatMapWagon
                key={`wagon${index}`}
                wagonInfo={w}
                availableSeats={availableSeats}
                index={index}
                departureId={this.props.departureId}
              />))
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  departure: state.departures.find((d) => (d.id === ownProps.departureId)),
});

export default connect(mapStateToProps)(SeatSelectorWagon);
