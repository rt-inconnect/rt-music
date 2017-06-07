import React, { Component } from 'react';
import './styles.css';

import Cover from './components/Cover';
import Sound from './components/Sound';

class Playlist extends Component {

  renderSounds = (sound) => {
    const { playlist } = this.props;
    return(
      <Sound key={sound.id} sound={sound} sounds={playlist} />
    )
  }

  render() {
    const { playlist } = this.props;
    return (
      <div className="playlist">
        <div className="playlist-aside">
          <Cover {...this.props} />
        </div>
        <div className="playlist-bside">
          { playlist.map(this.renderSounds) }
        </div>
      </div>
    );
  }
}

export default Playlist;
