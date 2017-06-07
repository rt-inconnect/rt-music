import {
  SET_PLAYLIST
} from './types';


export const setPlaylist = (sounds) => {
  return {
    type: SET_PLAYLIST,
    payload: sounds
  };
};