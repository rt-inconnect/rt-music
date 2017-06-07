import React, { Component } from 'react';
import './styles.css';

import FontAwesome from 'react-fontawesome';

class Menu extends Component {
  render() {
    return (
      <div className="header-menu">

        <FontAwesome name="home" />

        <FontAwesome name="bars" />

      </div>
    );
  }
}

export default Menu;
