import { connect } from 'react-redux'
import { getItems, getTitle, State } from './data'
import Menu from './Menu'

export default connect(
  (state: State) => ({
    items: getItems(state),
    title: getTitle(state)
  })
)(Menu)
