import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { history } from './store';
import App from '../containers/App';
import Home from '../containers/Home';
import Playlist from '../containers/Playlist';

const Routes = () => (
  <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />

      <Route path="/playlist" component={Playlist} />
    </Route>
  </Router>
);

export default Routes;