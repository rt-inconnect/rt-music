import React, { Component } from 'react';
import './styles.css';

import FontAwesome from 'react-fontawesome';

class PlaybackButton extends Component {

  handlePlay = (sound) => {
    const { play } = this.props;
    play(sound);
  }

  render() {

    const { sound, playing, playPlaying, pausePlaying } = this.props;

    if (playing.isBuffering && playing.id === sound.id)
      return (
        <button className="playback-buffering">
          <FontAwesome name="ellipsis-h" />
        </button>
      );

    if (playing.isPlaying && playing.id === sound.id)
      return (
        <button className="playback-pause" onClick={ () => { pausePlaying() } }>
          <FontAwesome name="pause" />
        </button>
      );

    if (!playing.isPlaying && playing.id === sound.id)
      return (
        <button className="playback-play" onClick={ () => { playPlaying() } }>
          <FontAwesome name="play" />
        </button>
      );

    return (
      <button className="playback-play" onClick={ () => { this.handlePlay(sound) } }>
        <FontAwesome name="play" />
      </button>
    );

  }
}

export default PlaybackButton;
