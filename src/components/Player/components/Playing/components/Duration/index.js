import React, { Component } from 'react';
import './styles.css';

export const secondsToString = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = time - minutes * 60;
  seconds = (seconds.toString().length === 1) ? '0' + seconds : seconds;
  minutes = (minutes.toString().length === 1) ? '0' + minutes : minutes;
  return minutes + ':' + seconds;
}

class Duration extends Component {

  render() {
    const { position, duration } = this.props.playing;

    return (

      <div className="playing-duration">-{secondsToString(duration - position)}</div>

    );
  }
}

export default Duration;
