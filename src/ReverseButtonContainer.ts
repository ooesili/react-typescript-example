import { connect, Dispatch } from 'react-redux'
import { State, getReverseSort, toggleSort } from './data'
import ReverseButton from './ReverseButton'

export default connect(
  (state: State) => ({
    isReversed: getReverseSort(state)
  }),
  (dispatch: Dispatch<any>) => ({
    toggleSort: () => dispatch(toggleSort())
  })
)(ReverseButton)
