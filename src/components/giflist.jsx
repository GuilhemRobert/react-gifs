import React, { Component } from 'react';
import Gif from './gif';

class GifList extends Component {
  render = () => {
    return (
      <div>
        {this.props.gifs.map((gif) => {
          return (
            <Gif id={gif.id} key={gif.id} selectId={this.props.selectId} />
          );
        })}
      </div>
    );
  }
}

export default GifList;
