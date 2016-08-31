import * as React from 'react'

export interface ReverseButtonProps {
  isReversed: boolean
  toggleSort: () => void
}

export default function ReverseButton ({isReversed, toggleSort}: ReverseButtonProps) {
  const text = isReversed ? 'Ascending' : 'Descending'
  return (
    <button onClick={toggleSort}>
      {text}
    </button>
  )
}
