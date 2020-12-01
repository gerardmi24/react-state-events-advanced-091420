import React, { Component } from 'react';
import "./App.css";
import BeyContainer from './Containers/BeyContainer';
import Favorites from './Containers/Favorites';
import beyArray from './api.js';
// import BeyCard from './Components/BeyCard';

class App extends Component {

  state = {
    beyArray
  }

  addFavorites = (id) => {
    let newBeyArray = [...this.state.beyArray];
    let findBey = newBeyArray.find(el => el.id === id);
    findBey.favorite = true
    this.setState({
      beyArray: newBeyArray
    })
  }

  removeFavs = (id) => {
    let newBeyArray = [...this.state.beyArray];
    let findBey = newBeyArray.find(el => el.id === id);
    findBey.favorite = false
    this.setState({
      beyArray: newBeyArray
    })
    window.alert("Hot sauce swag")
  }

  findFavs = () => {
    return this.state.beyArray.filter(el => el.favorite)
  }

  render() {
    // console.log(this.addFavorites)
    return (
      <div className="container">
        <BeyContainer allBeys={this.state.beyArray} clickHandler={this.addFavorites} />
        <Favorites allBeys={this.findFavs()} clickHandler={this.removeFavs} />
      </div>
    )
  }
}

export default App;