import React, { Component } from 'react';
import './styles.css';

import FontAwesome from 'react-fontawesome';

class Menu extends Component {
  render() {
    return (
      <div className="header-menu">
        <FontAwesome name="camera" />
        <FontAwesome name="circle" />
        <FontAwesome name="list" />
        <FontAwesome name="caret-down" />
      </div>
    );
  }
}

export default Menu;
