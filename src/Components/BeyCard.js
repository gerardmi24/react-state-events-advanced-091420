import React, { Component } from 'react';

class BeyCard extends Component {

  state = {
    clicked: this.props.oneBey.favorite
  }

  beyClick = () => {
    console.log("Clicked", this.props.oneBey.favorite)
    this.setState({
      clicked: !this.props.oneBey.favorite
    })
  }

  render() {
    // console.log(this.props.oneBey)
    return (
      <div>
        <h2> {this.props.oneBey.name} </h2>
        <img onClick={this.beyClick} src={this.props.oneBey.img} alt="Queen Bee" />
      </div>
    )
  }
}

export default BeyCard;
