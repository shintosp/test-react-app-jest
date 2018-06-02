/**
 * @jest-environment jsdom
 */

import React from 'react'
import ReactDOM from 'react-dom'
import LoginBar from '../LoginBar'

describe('LoginBar tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<LoginBar/>, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('shows 2 buttons when logged out', () => {
    const loginBar = shallow(<LoginBar/>)
    expect(loginBar.find('.App-logo').length).toBe(1)
    expect(loginBar.find('.App-Button').length).toBe(2)
  })

  it('shows only logo when logged in', () => {
    const loginBar = shallow(<LoginBar/>)
    loginBar.setState({...loginBar.state, loggedIn: true})
    expect(loginBar.find('.App-logo').length).toBe(1)
    expect(loginBar.find('.App-Button').length).toBe(0)
  })
})