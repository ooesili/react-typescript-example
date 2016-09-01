import FilterDropDown from './FilterDropDown'
import { setFilterBy } from './data'
import { connect, Dispatch } from 'react-redux'

export default connect(
  null,
  (dispatch: Dispatch<any>) => ({
    setFilterBy: (filterKey: string) => dispatch(setFilterBy(filterKey))
  })
)(FilterDropDown)
