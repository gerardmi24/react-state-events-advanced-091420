import React, { Component } from "react";
import BeyCard from '../Components/BeyCard';

class Favorites extends Component {

  renderFavBeys = () => {
    return this.props.beyArray.map(bey => <BeyCard key={bey.id} oneBey={bey} clickHandler={this.props.clickHandler} />)
  }

  render() {
    // console.log(this.props.beyArray)
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {this.renderFavBeys()}
      </div>
    );
  }
}

export default Favorites;