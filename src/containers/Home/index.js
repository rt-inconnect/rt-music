import React, { Component } from 'react';
import './styles.css';

import initialState from '../../common/initialState.js';

import Sound from '../../components/Sound';

class Home extends Component {

  renderSound = (sound) => {
    return (<Sound key={ sound.id } sound={ sound } /> )
  }

  render() {
    const { sounds } = initialState;
    return (
      <div className="home">
        { sounds.map(this.renderSound) }
      </div>
    );
  }
}

export default Home;
