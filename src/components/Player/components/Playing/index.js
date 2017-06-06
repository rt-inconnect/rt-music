import React, { Component } from 'react';
import './styles.css';

import FontAwesome from 'react-fontawesome';

import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

class Playing extends Component {
  render() {
    return (
      <div className="player-playing">

        <button className="playing-repeat">
          <FontAwesome name="retweet" />
        </button>

        <button className="playing-shuffle muted">
          <FontAwesome name="random" />
        </button>

        <div className="playing-info">

          <div className="info-music">Montana</div>

          <div className="info-position">
            <Slider
              min={0}
              max={100}
              tooltip={false}
              value={30}
            />
          </div>

          <div className="info-artist">Tycho</div>

        </div>

        <div className="playing-duration">-2:34</div>

        <button className="playing-volume">
          <FontAwesome name="volume-up" />
        </button>

      </div>
    );
  }
}

export default Playing;
