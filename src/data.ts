import * as Immutable from 'immutable'
import { createSelector } from 'reselect'
import {
  createAction,
  handleActions,
  ReducerMap,
  Action
} from 'redux-actions'

export type State = Immutable.Map<string, any>
export type Item = Immutable.Map<string, any>

const initialState: State = Immutable.fromJS({
  title: 'Menu',
  filterBy: 'mexican',
  reverseSort: false,
  items: [
    {id: 1, name: 'tacos', type: 'mexican'},
    {id: 2, name: 'burrito', type: 'mexican'},
    {id: 3, name: 'tostada', type: 'mexican'},
    {id: 4, name: 'mushy peas', type: 'english'},
    {id: 5, name: 'fish and chips', type: 'english'},
    {id: 6, name: 'black pudding', type: 'english'}
  ]
})

export function getFilterBy(state: State): string {
  return state.get('filterBy')
}
export function getReverseSort (state: State): boolean {
  return state.get('reverseSort')
}
export function getTitle (state: State): string {
  return state.get('title')
}
export function getAllItems (state: State): Immutable.List<Item> {
  return state.get('items')
}
export const getItems = createSelector(
  getAllItems,
  getFilterBy,
  getReverseSort,
  (items, filterKey, shouldReverse) => {
    const filteredAndSorted = items
      .filter((item) => item.get('type') === filterKey)
      .sortBy((item) => item.get('name'))
    if (shouldReverse) {
      return filteredAndSorted.reverse()
    }
    return filteredAndSorted
  }
)

const reducerMap: ReducerMap<any, any> = {}

const TOGGLE_SORT = 'TOGGLE_SORT'
export const toggleSort: () => Action<void> = createAction(TOGGLE_SORT)
reducerMap[TOGGLE_SORT] = (state, {type}) => {
  return state.set('reverseSort', !state.get('reverseSort'))
}

const SET_FILTER_BY = 'SET_FILTER_BY'
export const setFilterBy: (string) => Action<string> = createAction(SET_FILTER_BY)
reducerMap[SET_FILTER_BY] = (state, {type, payload}) => {
  return state.set('filterBy', payload)
}

export default handleActions(reducerMap, initialState)
