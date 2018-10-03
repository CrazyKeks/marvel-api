import { FirstDownloadHero } from '../actions/actionFirstHero'

var initialState = {};

export function heroList(state = initialState,action) {
  switch (action.type) {
    case 'GET_FIRST_HERO':
      return {...state, heroList: action.payload}
    default:
      return state
  }
}