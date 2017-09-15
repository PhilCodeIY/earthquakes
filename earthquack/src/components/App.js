import React, { Component } from 'react';
import EarthquakeList from '../data/EarthquakeList';
import EarthquakeInfo from '../components/EarthquakeInfo';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
          <div className="my-header">Earthquakes!
          </div>
        </div>
        <EarthquakeInfo />
        <EarthquakeList />
      </div>

    );
  }
}

export default App;
