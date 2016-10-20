import { connect } from 'react-redux'
import { getItems, getTitle } from './data'
import { State } from './State'
import Menu from './Menu'

export default connect(
  (state: State) => ({
    items: getItems(state),
    title: getTitle(state)
  })
)(Menu)
