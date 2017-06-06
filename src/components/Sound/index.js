import React, { Component } from 'react';
import './styles.css';

import Cover from './components/Cover';
import Playback from './components/Playback';
import Info from './components/Info';

class Sound extends Component {
  render() {
    const { sound } = this.props;

    return (
      <div className="sound">
        <Cover sound={sound} />
        <Playback {...this.props} />
        <Info sound={sound} />
      </div>
    );
  }
}

export default Sound;
