import React, { Component } from 'react';
import './styles.css';

class Info extends Component {
  render() {
    const { sound } = this.props;

    return (
      <div className="sound-info">
        <p className="sound-artist" title={sound.artist}>{sound.artist}</p>
        <p className="sound-music" title={sound.name}>{sound.name}</p>
      </div>
    );
  }
}

export default Info;
