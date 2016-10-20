import Record, { RecordBase } from 'type-safe-immutable-record'
import { Item, itemDecoder } from './Item'
import { List } from 'immutable'
import {
  Decoder,
  boolean,
  string,
  object,
  array,
  map
} from 'type-safe-json-decoder'

export interface StateFields {
  title: string
  filterBy: string
  reverseSort: boolean
  items: List<Item>
}

export interface StateChange {
  title?: string
  filterBy?: string
  reverseSort?: boolean
  items?: List<Item>
}

export interface State extends RecordBase<StateChange, State>, StateFields {}

export const State = Record<StateFields, StateChange, State>({
  title: '',
  filterBy: '',
  reverseSort: false,
  items: List<Item>()
})

export const stateDecoder: Decoder<State> = object(
  ['title', string()],
  ['filterBy', string()],
  ['reverseSort', boolean()],
  ['items', map(List, array(itemDecoder))],
  (title, filterBy, reverseSort, items) => State({title, filterBy, reverseSort, items})
)
