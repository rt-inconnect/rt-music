import React, { Component } from 'react';
import './styles.css';

import Logo from './components/Logo';
import Search from './components/Search';
import Menu from './components/Menu';
import UserMenu from './components/UserMenu';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Logo />
        <Search />
        <Menu />
        <UserMenu />
      </div>
    );
  }
}

export default Header;
