import * as Immutable from 'immutable'
import * as React from 'react'
import { Item } from './data'

export interface MenuProps {
  title: string
  items: Immutable.List<Item>
}

export default function Menu ({title, items}: MenuProps) {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.get('name')}</li>
        ))}
      </ul>
    </div>
  )
}
