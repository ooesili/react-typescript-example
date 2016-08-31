import { connect } from 'react-redux'
import { State, getReverseSort, toggleSort } from './data'
import ReverseButton from './ReverseButton'

export default connect(
  (state: State) => ({
    isReversed: getReverseSort(state)
  }),
  (dispatch) => ({
    toggleSort: () => dispatch(toggleSort())
  })
)(ReverseButton)
