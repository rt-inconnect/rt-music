import React, { Component } from 'react';
import './normalize.css';
import './styles.css';
import 'font-awesome/css/font-awesome.css';

import Header from '../../components/Header';
import Player from '../../components/Player';

class App extends Component {

  render() {
    return (
      <div className="app">
        <Header />
        <Player />
        <div className="app-container">
          { this.props.children }
        </div>
      </div>
    );
  }
};

export default App;