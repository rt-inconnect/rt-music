import React, { Component } from 'react';
import './styles.css';

import classNames from 'classnames/dedupe'

import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

class Volume extends Component {
  render() {
    const { playing, setMute } = this.props;

    const volumeClass = classNames(
      'fa',
      {
        'fa-volume-off': playing.mute || playing.volume === 0,
        'fa-volume-up': !playing.mute && playing.volume >= 50,
        'fa-volume-down': !playing.mute && playing.volume < 50 && playing.volume > 0
      }
    );

    const volumeBtnClass = classNames(
      { 'disabled': playing.mute || playing.volume === 0 }
    );

    return (
      <div className="playing-volume">

        <div className="volume-wrapper">
          <Slider
            min={0}
            max={100}
            tooltip={false}
            value={playing.volume}
            onChange={this.props.setVolume}
          />
        </div>

        <button className={ volumeBtnClass } onClick={setMute}>
          <span aria-hidden="true" className={volumeClass}></span>
        </button>
      </div>
    );
  }
}

export default Volume;
