import React, { Component } from 'react';
import './styles.css';

import FontAwesome from 'react-fontawesome';

class UserMenu extends Component {
  render() {
    return (
      <div className="header-usermenu">
        Stefan
        <span className="usermenu-notification">1</span>
        <FontAwesome name="caret-down" />
      </div>
    );
  }
}

export default UserMenu;
