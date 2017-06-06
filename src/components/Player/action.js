import {
  CHANGE_PLAYING,
  SEEK_PLAYING,
  PAUSE_PLAYING,
  PLAY_PLAYING,
  IS_BUFFERING,

  SET_SHUFFLE,
  SET_REPEAT,
  SET_MUTE,
  SET_VOLUME
} from './types';

import playerProvider from '../../common/playerProvider';

const getRandom = (max) => {
  return Math.floor(Math.random() * (max - 0 + 1)) + 0;
}

export const play = (sound) => (dispatch, getState) => {
  const { playing } = getState();
  if (playing.isPlaying) playerProvider.unloadSound(playing.id);
  playerProvider.play(sound, playing.volume);

  dispatch({
    type: CHANGE_PLAYING,
    payload: sound
  });
}

export const pausePlaying = () => (dispatch, getState) => {
  const { playing } = getState();

  //if (!playing || !playing.id) return dispatch({ type: ADD_ERROR, payload: 'No sound to pause!' })

  playerProvider.pause(playing.id);

  dispatch({
    type: PAUSE_PLAYING
  });
}

export const playPlaying = () => (dispatch, getState) => {
  const { playing } = getState();

  //if (!playing || !playing.id) return dispatch({ type: ADD_ERROR, payload: 'No sound to play!' })

  playerProvider.play(playing, playing.volume);

  dispatch({
    type: PLAY_PLAYING
  });
}

export const seekPlaying = (position) => (dispatch, getState) => {
  const { playing } = getState();

  //if (!playing || !playing.id) return dispatch({ type: ADD_ERROR, payload: 'No sound to seek!' })

  playerProvider.seek(playing.id, position * 1000);

  dispatch({
    type: SEEK_PLAYING,
    payload: position
  });
}

export const forward = () => (dispatch, getState) => {
  const { playing, playlist } = getState();

  if (playlist.length > 0) {
    let index = playlist.map(function (sound) { return sound.id }).indexOf(playing.id);
    let nextIndex = index + 1;
    if (index === playlist.length - 1) nextIndex = 0;
    if (playing.shuffle) nextIndex = getRandom(playlist.length - 1);
    dispatch(play(playlist[nextIndex]));
  }

}

export const backward = () => (dispatch, getState) => {
  const { playing, playlist } = getState();

  if (playlist.length > 0) {
    let index = playlist.map(function (sound) { return sound.id }).indexOf(playing.id);
    let nextIndex = index - 1;
    if (index === 0) nextIndex = playlist.length - 1;
    dispatch(play(playlist[nextIndex]));
  }

}

export const init = () => (dispatch, getState) => {
  const sm2 = playerProvider.getPlayer();

  const whileplaying = function (sound) {
    let position = Math.floor(sound.position/1000);
    const { playing } = getState();
    if (playing.position !== position) {
      dispatch({ type: SEEK_PLAYING, payload: position });
    }
  }

  var onfinish = function () {
    const { playing } = getState();
    if (playing.repeat) return dispatch(play(playing));
    dispatch(forward());
  }

  var onbufferchange = function (sound) {
    dispatch({ type: IS_BUFFERING, payload: sound.isBuffering });
  }

  sm2.setup({
    debugMode: false,
    defaultOptions: {
      whileplaying() { whileplaying(this) },
      onfinish() { onfinish(this) },
      onbufferchange() { onbufferchange(this) }
    }
  });

}

export const setShuffle = () => {
  return {
    type: SET_SHUFFLE
  };
}

export const setRepeat = () => {
  return {
    type: SET_REPEAT
  };
}

export const setMute = () => (dispatch, getState) => {
  const { playing } = getState();

  playerProvider.mute(!playing.mute);

  dispatch({ type: SET_MUTE });
}

export const setVolume = (volume) => (dispatch, getState) => {

  const { playing } = getState();

  playerProvider.volume(volume);

  if (playing.mute) dispatch(setMute());

  dispatch({
    type: SET_VOLUME,
    payload: volume
  });
}