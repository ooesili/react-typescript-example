import { createSelector } from 'reselect'
import {
  createAction,
  handleActions,
  ReducerMap,
  Action
} from 'redux-actions'
import { State, stateDecoder } from './State'

const initialStateJSON = `{
  "title": "Menu",
  "filterBy": "mexican",
  "reverseSort": false,
  "items": [
    {"id": 1, "name": "tacos", "type": "mexican"},
    {"id": 2, "name": "burrito", "type": "mexican"},
    {"id": 3, "name": "tostada", "type": "mexican"},
    {"id": 4, "name": "mushy peas", "type": "english"},
    {"id": 5, "name": "fish and chips", "type": "english"},
    {"id": 6, "name": "black pudding", "type": "english"}
  ]
}`

const initialState: State = stateDecoder.decodeJSON(initialStateJSON)

export const getFilterBy = (state: State) => state.filterBy
export const getReverseSort = (state: State) => state.reverseSort
export const getTitle = (state: State) => state.title
export const getAllItems = (state: State) => state.items
export const getItems = createSelector(
  getAllItems,
  getFilterBy,
  getReverseSort,
  (items, filterKey, shouldReverse) => {
    const filteredAndSorted = items
      .filter((item) => item.type === filterKey)
      .sortBy((item) => item.name)
    if (shouldReverse) {
      return filteredAndSorted.reverse()
    }
    return filteredAndSorted
  }
)

const reducerMap: ReducerMap<State, any> = {}

const TOGGLE_SORT = 'TOGGLE_SORT'
export const toggleSort: () => Action<void> = createAction(TOGGLE_SORT)
reducerMap[TOGGLE_SORT] = (state) => {
  return state.merge({reverseSort: !state.reverseSort})
}

const SET_FILTER_BY = 'SET_FILTER_BY'
export const setFilterBy: (filterKey: string) => Action<string> = createAction(SET_FILTER_BY)
reducerMap[SET_FILTER_BY] = (state, {payload: filterBy}) => {
  return state.merge({filterBy})
}

export default handleActions(reducerMap, initialState)
