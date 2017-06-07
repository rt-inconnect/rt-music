import React, { Component } from 'react';
import './styles.css';

import PlaybackButton from '../../../Player/components/Playback/components/PlaybackButton';

class Sound extends Component {

  render() {
    const { sound } = this.props;
    return (
      <div className="playlist-sound">
        <PlaybackButton {...this.props} />
        <div className="playlist-sound-info">
          <p className="playlist-sound-music" title={`${sound.artist} - ${sound.name}`}>{`${sound.artist} - ${sound.name}`}</p>
        </div>
      </div>
    );
  }
}

export default Sound;
