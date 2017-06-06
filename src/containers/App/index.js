import React, { Component } from 'react';
import './normalize.css';
import './styles.css';
import 'font-awesome/css/font-awesome.css';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  init,

  play,
  playPlaying,
  pausePlaying,
  seekPlaying,
  forward,
  backward,

  setShuffle,
  setRepeat,
  setMute,
  setVolume
} from '../../components/Player/action'

import Header from '../../components/Header';
import Player from '../../components/Player';
import Home from '../Home';

class App extends Component {

  componentWillMount() {
    this.props.init()
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Player  {...this.props} />
        <div className="app-container">
          <Home  {...this.props} />
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  playing: state.playing
});

const mapDispatchToProps = dispatch => bindActionCreators({
  init,
  play,
  playPlaying,
  pausePlaying,
  seekPlaying,
  forward,
  backward,
  setShuffle,
  setRepeat,
  setMute,
  setVolume
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);