import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import sounds from '../components/Sound/reducer';
import playing from '../components/Player/reducer';

export default combineReducers({
  routing: routerReducer,
  sounds,
  playing
});