import * as React from 'react'
import { createStore } from 'redux'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import reducer from './data'
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
