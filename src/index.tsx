import * as React from 'react'
import { createStore } from 'redux'
import { render } from 'react-dom'
import * as Immutable from 'immutable'
import { connect, Provider } from 'react-redux'
import { createSelector } from 'reselect'
import reducer, { toggleSort, setFilterBy } from './data'
import MenuContainer from './MenuContainer'
import ReverseButtonContainer from './ReverseButtonContainer'
import FilterDropDownContainer from './FilterDropDownContainer'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <div>
      <ReverseButtonContainer />
      <FilterDropDownContainer />
      <MenuContainer />
    </div>
  </Provider>,
  document.getElementById('app')
)
