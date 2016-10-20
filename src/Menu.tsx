import { List } from 'immutable'
import * as React from 'react'
import { Item } from './Item'

export interface MenuProps {
  title: string
  items: List<Item>
}

export default function Menu ({title, items}: MenuProps) {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}
