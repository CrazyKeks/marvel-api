import { combineReducers } from 'redux'
import { heroList } from './hero'

export const rootReducer = combineReducers({
  hero: heroList
});