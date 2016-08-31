import FilterDropDown from './FilterDropDown'
import { setFilterBy } from './data'
import { connect } from 'react-redux'

export default connect(
  null,
  (dispatch) => ({
    setFilterBy: (filterKey) => dispatch(setFilterBy(filterKey))
  })
)(FilterDropDown)
