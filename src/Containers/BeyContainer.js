import React, { Component } from 'react';
import BeyCard from '../Components/BeyCard';

class BeyContainer extends Component {

  renderAllBeys = () => {
    return this.props.beyArray.map((bey) => <BeyCard oneBey={bey} key={bey.id} clickHandler={this.props.clickHandler} />)
    }

  render() {
    // console.log(this.props.clickHandler)
    return (
      <div className="index">
        <h1>Index</h1>
        {this.renderAllBeys()}
      </div>
    );
  }
}

export default BeyContainer;
