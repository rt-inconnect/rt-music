import React, { Component } from 'react';
import './styles.css';

import config from '../../../../common/config';

class Cover extends Component {

  render() {
    const { playing } = this.props;
    return (
      <div className="playlist-cover">
        <img src={config.IMG_CDN + playing.cover} alt={`${playing.artist} - ${playing.name}`} />
      </div>
    );
  }
}

export default Cover;
