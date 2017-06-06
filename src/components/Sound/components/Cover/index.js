import React, { Component } from 'react';
import './styles.css';
import config from '../../../../common/config'

class Cover extends Component {
  render() {

    const { sound } = this.props;

    return (
      <div className="sound-cover">
        <img src={ config.IMG_CDN + sound.cover } alt={ sound.artist + ' - ' + sound.name } />
      </div>
    );
  }
}

export default Cover;
