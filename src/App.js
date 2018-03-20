import React from 'react';
import './App.css';
import Header from './components/Header';
import Title from './components/Title/Title';
import Route from './components/Route/Route';
import SeatSelector from './components/SeatSelector/SeatSelector';

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
        <Route />
        <SeatSelector />
      </div>
    );
  }
}

export default App;
