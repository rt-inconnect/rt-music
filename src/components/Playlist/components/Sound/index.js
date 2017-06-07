import React, { Component } from 'react';
import './styles.css';

import PlaybackButton from '../../../Player/components/Playback/components/PlaybackButton';

class Sound extends Component {

  render() {
    const { sound } = this.props;
    return (
      <div className="playlist-sound">
        <PlaybackButton {...this.props} />
        <div className="playlist-info">
          <p className="playlist-artist" title={sound.artist}>{sound.artist}</p>
          <p className="playlist-music" title={sound.name}>{sound.name}</p>          
        </div>
      </div>
    );
  }
}

export default Sound;
