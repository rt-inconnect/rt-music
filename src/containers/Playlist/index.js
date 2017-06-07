import React, { Component } from 'react';
import './styles.css';

import { connect } from 'react-redux';

import PlaylistComponent from '../../components/Playlist';

class Playlist extends Component {

  render() {
    return (
      <div className="app-playlist">
      	<PlaylistComponent {...this.props} />
      </div>
    );
  }
};

const mapStateToProps = state => ({
  playlist: state.playlist,
  playing: state.playing
});


export default connect(mapStateToProps, null)(Playlist);