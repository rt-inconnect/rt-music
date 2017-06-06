import React, { Component } from 'react';
import './styles.css';

import FontAwesome from 'react-fontawesome';
import PlaybackButton from './components/PlaybackButton';

class Playback extends Component {

  renderPlayback() {
    return (<PlaybackButton sound={this.props.playing} {...this.props} />);
  }

  render() {
    const { forward, backward } = this.props

    return (
      <div className="player-playback">

        <button className="playback-backward" onClick={ () => { backward() } }>
          <FontAwesome name="backward" />
        </button>

        { this.renderPlayback() }

        <button className="playback-forward" onClick={ () => { forward() } }>
          <FontAwesome name="forward" />
        </button>

      </div>
    );
  }
}

export default Playback;
