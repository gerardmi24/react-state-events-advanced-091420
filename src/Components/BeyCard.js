import React, { Component } from 'react';

class BeyCard extends Component {

  beyClick = () => {
    // console.log("Clicked", this.props.clickHandler)
    this.props.clickHandler(this.props.oneBey.id)
    }

  render() {
    // console.log(this.props.oneBey)
    return (
      <div onClick={this.beyClick}>
        <h2> {this.props.oneBey.name} </h2>
        <img src={this.props.oneBey.img} alt="Queen Bee" />
      </div>
    )
  }
}

export default BeyCard;
