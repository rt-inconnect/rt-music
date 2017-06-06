import React, { Component } from 'react';
import './styles.css';

import FontAwesome from 'react-fontawesome';

class Playback extends Component {
  render() {

    return (
      <div className="sound-playback">
        <button className="playback-play">
          <FontAwesome name="play" />
        </button>
      </div>
    );
  }
}

export default Playback;
