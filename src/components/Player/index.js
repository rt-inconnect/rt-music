import React, { Component } from 'react';
import './styles.css';

import Gradient from './components/Gradient';
import Playback from './components/Playback';
import Playing from './components/Playing';
import Menu from './components/Menu';

class Player extends Component {
  render() {
    return (
      <div className="player">
        <Gradient />
        <Playback />
        <Playing />
        <Menu />
      </div>
    );
  }
}

export default Player;
