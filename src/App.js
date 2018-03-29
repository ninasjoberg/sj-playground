import React from 'react';
import './App.css';
import Header from './components/Header';
import Title from './components/Title/Title';
import Route from './components/Route/Route';
import RouteBottom from './components/RouteBottom/RouteBottom';
import SeatSelector from './components/SeatSelector/SeatSelector';
import SeatInformation from './components/SeatInformation/SeatInformation';
import { availableSeats } from './data/tripInfo';

const journey = {
  partOne: {
    from: 'Stockholm C',
    to: 'Göteborg C',
  },
  partTwo: {
    from: 'Göteborg C',
    to: 'Jönköping C',
  },
};

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedSeat: availableSeats.find((availableSeat) => availableSeat.preSelected),
    };
    this.handleSeatClick = this.handleSeatClick.bind(this);
  }

  handleSeatClick = (seat) => {
    this.setState({
      selectedSeat: seat,
    });
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Title />
        <Route section={journey.partOne} />
        <SeatSelector handleSeatClick={this.handleSeatClick} selectedSeat={this.state.selectedSeat} />
        <SeatInformation selectedSeat={this.state.selectedSeat} />
        <Route section={journey.partTwo} />
        <RouteBottom />
      </div>
    );
  }
}

export default App;
