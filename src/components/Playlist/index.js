import React, { Component } from 'react';
import './styles.css';

import config from '../../common/config';

import Sound from './components/Sound';

class Playlist extends Component {

  renderSounds = (sound) => {
    const { playlist } = this.props;
    return(
      <Sound key={sound.id} sound={sound} sounds={playlist} />
    )
  }

  render() {
    const { playlist, playing } = this.props;
    return (
      <div className="playlist">
        <div className="playlist-cover">
          <img src={config.IMG_CDN + playing.cover} alt={`${playing.artist} - ${playing.name}`} />
        </div>
        <div className="playlist-list">
          { playlist.map(this.renderSounds) }
        </div>
      </div>
    );
  }
}

export default Playlist;
