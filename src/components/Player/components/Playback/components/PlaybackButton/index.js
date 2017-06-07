import React, { Component } from 'react';
import './styles.css';

import FontAwesome from 'react-fontawesome';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  play,
  playPlaying,
  pausePlaying
} from '../../../../action';
import { setPlaylist } from '../../../../../Playlist/action';

class PlaybackButton extends Component {

  handlePlay = (sound) => {
    const { sounds, play, setPlaylist } = this.props;
    play(sound);
    setPlaylist(sounds);
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


const mapStateToProps = state => ({
  playing: state.playing
});

const mapDispatchToProps = dispatch => bindActionCreators({
  play,
  playPlaying,
  pausePlaying,
  setPlaylist
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PlaybackButton);