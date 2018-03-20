import React from 'react';
import './App.css';
import Header from './components/Header';
import Heading from './components/Heading/Heading';
import Route from './components/Route/Route';
import SeatSelection from './components/SeatSelection/SeatSelection';

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
        <Heading />
        <Route />
        <SeatSelection />
      </div>
    );
  }
}

export default App;
