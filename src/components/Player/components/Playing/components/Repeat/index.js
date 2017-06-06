import React, { Component } from 'react';
import './styles.css';

import classNames from 'classnames/dedupe'
import FontAwesome from 'react-fontawesome';

class Repeat extends Component {
  render() {
    const { playing, setRepeat } = this.props

    const repeatClass = classNames(
      'playing-repeat',
      { 'disabled': !playing.repeat }
    )

    return (
      <button className={ repeatClass } onClick={setRepeat}>
        <FontAwesome name="retweet" />
      </button>
    );
  }
}

export default Repeat;
