import React, { Component } from 'react';
import './styles.css';

import FontAwesome from 'react-fontawesome';

class Menu extends Component {
  render() {
    return (
      <div className="player-menu">

        <button className="menu-spotify active">
          <FontAwesome name="spotify" />
        </button>

        <button className="menu-soundcloud">
          <FontAwesome name="soundcloud" />
        </button>

        <button className="menu-youtube">
          <FontAwesome name="youtube" />
        </button>

        <button className="menu-share">
          Share
        </button>

        <button className="menu-more">
          <FontAwesome name="ellipsis-v" />
        </button>

      </div>
    );
  }
}

export default Menu;
