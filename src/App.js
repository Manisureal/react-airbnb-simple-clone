import React, { Component } from 'react';
import './App.css';
import Flat from "./components/flat";
import GoogleMapReact from 'google-map-react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: []
    };
  }

  componentDidMount() {
    const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json"
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          flats: data
        })
      })
  }

  render() {
    const center = {
      // london co-ordinates
      lat: 51.5074,
      lng: 0.1278
    }

    return (
      <div className="app">
        <div className="main">
          <div className="search">
          </div>
          <div className="flats">
            { this.state.flats.map(function(flat)
              {
                return <Flat building={flat}/>
              })
            }
          </div>
        </div>
        <div className="map">
          <GoogleMapReact
            defaultCenter={center}
            defaultZoom={11}
          >
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;