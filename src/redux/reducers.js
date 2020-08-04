import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import albums from './albums/reducers'

export default history =>
  combineReducers({
    router: connectRouter(history),
    albums
  })
