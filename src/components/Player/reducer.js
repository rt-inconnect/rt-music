import {
  SET_PLAYING,
  PAUSE_PLAYING,
  PLAY_PLAYING,
  SEEK_PLAYING,
  IS_BUFFERING,

  SET_SHUFFLE,
  SET_REPEAT,
  SET_MUTE,
  SET_VOLUME

} from './types';

export default (state = {}, action) => {

  switch (action.type) {

    case SET_PLAYING:
      return {
        ...state,
        ...action.payload,
        isPlaying: true
      };

    case PAUSE_PLAYING:
      return {
        ...state,
        isPlaying: false
      };

    case PLAY_PLAYING:
      return {
        ...state,
        isPlaying: true
      };

    case SEEK_PLAYING:
      return {
        ...state,
        position: action.payload
      };

    case IS_BUFFERING:
      return {
        ...state,
        isBuffering: action.payload
      };

    case SET_SHUFFLE:
      return {
        ...state,
        shuffle: !state.shuffle
      };

    case SET_REPEAT:
      return {
        ...state,
        repeat: !state.repeat
      };

    case SET_MUTE:
      return {
        ...state,
        mute: !state.mute
      };

    case SET_VOLUME:
      return {
        ...state,
        volume: action.payload
      };

    default:
      return state;

  }

};