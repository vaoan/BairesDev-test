const actions = {
  LOAD_ASYNC: 'albums/LOAD_ASYNC',
  LOAD: 'albums/LOAD',
}

export const getAsyncAlbums = () => {
  return {
    type: actions.LOAD_ASYNC,
  }
}

export const setAlbums = albums => {
  return {
    type: actions.LOAD,
    payload: albums,
  }
}

export default actions
