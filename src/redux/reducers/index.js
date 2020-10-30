import { combineReducers } from 'redux'
import visibilityFilter from './visibilityFilter'
import beers from './beers'

export default combineReducers({
  beers,
  visibilityFilter
})
