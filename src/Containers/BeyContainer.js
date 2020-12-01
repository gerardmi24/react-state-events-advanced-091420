import React, { Component } from 'react';
import BeyCard from '../Components/BeyCard';

class BeyContainer extends Component {

  renderAllBeys = () => {
    return this.props.allBeys.map((bey) => <BeyCard oneBey={bey} key={bey.id} />)
    }

  render() {
    // console.log(this.props.allBeys)
    return (
      <div className="index">
        <h1>Index</h1>
        {this.renderAllBeys()}
      </div>
    );
  }
}

export default BeyContainer;
