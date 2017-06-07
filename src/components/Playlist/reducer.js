import {
  SET_PLAYLIST
} from './types';

export default (state = [], action) => {

  switch (action.type) {

    case SET_PLAYLIST:
      return [ ...action.payload ];

    default:
      return state;

  }

};