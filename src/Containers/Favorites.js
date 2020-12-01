import React, { Component } from "react";
import BeyCard from '../Components/BeyCard';

class Favorites extends Component {

  renderFavBeys = () => {
    return this.props.allBeys.map((bey) => <BeyCard key={bey.id} bey={bey} clickHandler={this.props.clickHandler} />)
  }

  render() {
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {this.renderFavBeys()}
      </div>
    );
  }
}

export default Favorites;