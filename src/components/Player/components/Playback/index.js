import React, { Component } from 'react';
import './styles.css';

import FontAwesome from 'react-fontawesome';

class Playback extends Component {
  render() {
    return (
      <div className="player-playback">

        <button className="playback-backward">
          <FontAwesome name="backward" />
        </button>

        <button className="playback-pause">
          <FontAwesome name="pause" />
        </button>

        <button className="playback-forward">
          <FontAwesome name="forward" />
        </button>

      </div>
    );
  }
}

export default Playback;
