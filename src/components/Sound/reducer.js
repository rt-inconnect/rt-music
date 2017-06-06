import {
  FETCH_SOUNDS
} from './types';

export default (state = [], action) => {

  switch (action.type) {

    case FETCH_SOUNDS:
      return [ ...state, ...action.payload ]

    default:
      return state

  }

};