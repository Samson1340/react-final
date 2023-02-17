import { combineReducers } from 'redux'
import { albumReducer, postsReducer } from './allReducer'

export const rootReducer = combineReducers({
  posts: postsReducer,
  album: albumReducer
})