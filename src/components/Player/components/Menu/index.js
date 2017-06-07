import React, { Component } from 'react';
import './styles.css';
import { Link, IndexLink } from 'react-router';

import FontAwesome from 'react-fontawesome';

class Menu extends Component {
  render() {
    return (
      <div className="player-menu">

        <IndexLink to="/" className="menu-home" title="Go Home" activeClassName="active">
          <FontAwesome name="home" />
        </IndexLink>

        <Link to="/playlist" className="menu-bars" title="Now Playing Playlist" activeClassName="active">
          <FontAwesome name="bars" />
        </Link>

      </div>
    );
  }
}

export default Menu;
