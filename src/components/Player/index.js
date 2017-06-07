import React, { Component } from 'react';
import './styles.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  init,

  seekPlaying,
  forward,
  backward,

  setShuffle,
  setRepeat,
  setMute,
  setVolume
} from '../../components/Player/action';

import Gradient from './components/Gradient';
import Playback from './components/Playback';
import Playing from './components/Playing';
import Menu from './components/Menu';

class Player extends Component {

  componentWillMount() {
    this.props.init();
  }

  render() {
    return (
      <div className="player">
        <Gradient />
        <Playback {...this.props} />
        <Playing {...this.props} />
        <Menu />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  playing: state.playing
});

const mapDispatchToProps = dispatch => bindActionCreators({
  init,
  seekPlaying,
  forward,
  backward,
  setShuffle,
  setRepeat,
  setMute,
  setVolume
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Player);
