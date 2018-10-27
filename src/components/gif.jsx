import React, { Component } from 'react';

class Gif extends Component {
  handleClick = (e) => {
    this.props.selectId(e.target.id);
  }

  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img
        className="gif"
        src={src}
        alt=""
        onClick={this.handleClick}
        id={this.props.id}
      />
    );
  }
}

export default Gif;
