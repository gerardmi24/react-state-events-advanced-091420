import React, { Component } from 'react';
import "./App.css";
import BeyContainer from './Containers/BeyContainer';
import Favorites from './Containers/Favorites';
import beyArray from './api.js';
// import BeyCard from './Components/BeyCard';

class App extends Component {

  state = {
    beyArray: beyArray
  }

  render() {
    // console.log(this.state.beyArray)
    return (
      <div className="container">
        <BeyContainer allBeys={this.state.beyArray} />
        <Favorites />
      </div>
    )
  }
}

export default App;