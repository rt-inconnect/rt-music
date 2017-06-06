import React, { Component } from 'react';
import './styles.css';

import logo from './logo.svg';

class Logo extends Component {
  render() {
    return (
      <div className="header-logo">
        <img src={logo} alt="Logo" />
        rt-music
      </div>
    );
  }
}

export default Logo;
