import React, { Component } from 'react';
import './App.css';
import Flat from "./components/flat";

class App extends Component {
  render() {
    const flat = {
      "name": "Great Park House",
      "price": 22,
      "priceCurrency": "£",
      "imageUrl": `https://images.unsplash.com/photo-1498450067505-1e6cec4224fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80`
    };

    return (
      <div className="app">
        <div className="main">
          <div className="search">
          </div>
          <div className="flats">
            <Flat building={flat} />
            <Flat building={flat} />
            <Flat building={flat} />
          </div>
        </div>
        <div className="map">
        </div>
      </div>
    );
  }
}

export default App;