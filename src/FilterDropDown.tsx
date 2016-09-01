import * as React from 'react'

export interface FilterDropDownProps {
  setFilterBy: (filterKey: string) => void
}

export default function ({setFilterBy}: FilterDropDownProps) {
  return (
    <select onChange={(e) => {
      const target = (e.target as HTMLSelectElement)
      setFilterBy(target.value)}
    }>
      <option value='mexican'>Mexican</option>
      <option value='english'>English</option>
    </select>
  )
}
