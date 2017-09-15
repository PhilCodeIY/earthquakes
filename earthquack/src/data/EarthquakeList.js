import React, { Component } from 'react';
import moment from 'moment';
import earthquakes from '../data/earthquakes';
import '../styles/App.css';
export default class EarthquakeList extends Component {
  render(){

      return(
        <div className="quake-list">
          <div className="row">
          {earthquakes.features.map(earthquake => (
                <div className="quake-list">
                  <div className="row" style={{marginLeft: "2rem"}}>
                    <div className="col-sm-6" key={earthquake.id}>
                      <div className="card" style={{height:"15rem", width: "34rem"}}>
                        <div className="card-block">
                          <h4 className="card-title">{earthquake.properties.place}</h4>
                            <h6 className="card-subtitle mb-2 text-muted">Magnitude: {earthquake.properties.mag}</h6>
                            <h6 className="card-subtitle mb-2 text-muted">Time: {moment(earthquake.time).format('llll')}</h6>
                            <p className="card-text">Coordinates: {earthquake.geometry.coordinates}</p>
                          <a href={earthquake.properties.url} className="card-link">USGS Event Link</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
          </div>
        </div>
      )
  }
}
