import React from 'react';
import './App.css';
import Header from './components/Header';
import Title from './components/Title/Title';
import Route from './components/Route/Route';
import RouteBottom from './components/RouteBottom/RouteBottom';
import SeatSelector from './components/SeatSelector/SeatSelector';
import SeatInformation from './components/SeatInformation/SeatInformation';


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
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Title />
        <Route section={journey.partOne} />
        <SeatSelector />
        <SeatInformation />
        <Route section={journey.partTwo} />
        <RouteBottom />
      </div>
    );
  }
}

export default App;
