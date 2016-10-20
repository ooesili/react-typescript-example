import Record, { RecordBase } from 'type-safe-immutable-record'
import { Decoder, number, string, object } from 'type-safe-json-decoder'

export interface ItemFields {
  id: number
  name: string
  type: string
}

export interface ItemChange {
  id?: number
  name?: string
  type?: string
}

export interface Item extends RecordBase<ItemChange, Item>, ItemFields {}

export const Item = Record<ItemFields, ItemChange, Item>({
  id: 0,
  name: '',
  type: ''
})

export const itemDecoder: Decoder<Item> = object(
  ['id', number()],
  ['name', string()],
  ['type', string()],
  (id, name, type) => Item({id, name, type})
)
