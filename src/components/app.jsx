import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      gifs:[],
      selectedGifId: "oOmPLpzgzq4p3PQV2D",
    }
  }



  search = (query) => {
    giphy('QlRy3IXfgL4DtPN1O4KAv6WaF6Ac36n7').search({
      q: query,
      rating: 'g'
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  render() {

    const gifs = [
    { id: "oOmPLpzgzq4p3PQV2D" },
    { id: "xUOwG6r4nPnVPcEKyI" }
    ];

    return (
      <div>
      <div className="left-scene">
      <SearchBar searchFunction={this.search}/>
      <div className="selected-gif">
      <Gif id={this.state.selectedGifId}/>
      </div>
      </div>
      <div className="right-scene">
      <GifList gifs={this.state.gifs}/>
      </div>
      </div>
      );
  }
}

export default App;
