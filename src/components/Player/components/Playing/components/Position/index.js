import React, { Component } from 'react';
import './styles.css';

import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

class Position extends Component {

  render() {
    const { position, duration } = this.props.playing;

    return (

      <div className="info-position">
        <Slider
          min={0}
          max={duration}
          tooltip={false}
          value={position}
          onChange={this.props.seekPlaying}
        />
      </div>

    );
  }
}

export default Position;
