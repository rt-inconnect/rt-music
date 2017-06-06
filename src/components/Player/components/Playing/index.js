import React, { Component } from 'react';
import './styles.css';

import Repeat from './components/Repeat';
import Shuffle from './components/Shuffle';
import Position from './components/Position';
import Duration from './components/Duration';
import Volume from './components/Volume';

class Playing extends Component {
  render() {
    return (
      <div className="player-playing">

        <Repeat {...this.props} />
        <Shuffle {...this.props} />

        <div className="playing-info">

          <p className="info-music">{ this.props.playing.name }</p>

          <Position {...this.props} />

          <p className="info-artist">{ this.props.playing.artist }</p>

        </div>

        <Duration {...this.props} />
        <Volume {...this.props} />

      </div>
    );
  }
}

export default Playing;
