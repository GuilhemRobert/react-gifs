import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search-bar';
import Gif from './gif';
import GifList from './giflist';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [

      ],
      selectedGifId: "ASd0Ukj0y3qMM",
    };
  }

  search = (query) => {
    giphy('OctiZJVYuQnf6ZFBkapjjLxb5eEoAz8P').search({
      q: query,
      rating: 'g',
      limit: 12
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  selectId = (id) => {
    this.setState({
      selectedGifId: id
    });
  }


  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <div className="gif-list">
            <GifList gifs={this.state.gifs} selectId={this.selectId} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
