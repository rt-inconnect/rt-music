import React, { Component } from 'react';
import './styles.css';

import PlaybackButton from '../../../Player/components/Playback/components/PlaybackButton';

class Playback extends Component {

  render() {

    return (
      <div className="sound-playback">
        <PlaybackButton {...this.props} />
      </div>
    );
  }
}

export default Playback;
