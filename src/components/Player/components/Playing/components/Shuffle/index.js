import React, { Component } from 'react';
import './styles.css';

import classNames from 'classnames/dedupe'
import FontAwesome from 'react-fontawesome';

class Shuffle extends Component {
  render() {
    const { playing, setShuffle } = this.props

    const repeatClass = classNames(
      'playing-shuffle',
      { 'disabled': !playing.shuffle }
    )

    return (
      <button className={ repeatClass } onClick={setShuffle}>
        <FontAwesome name="random" />
      </button>
    );
  }
}

export default Shuffle;
