import React, { Component } from 'react';
import './styles.css';

import Logo from './components/Logo';
import Search from './components/Search';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Logo />
        <Search />
      </div>
    );
  }
}

export default Header;
