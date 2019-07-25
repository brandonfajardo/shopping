import React from 'react'
import isEqual from 'lodash/isEqual'

class Home extends React.Component {
  render() {
    const { isLoggedIn, history } = this.props

    if (isEqual(isLoggedIn, false)) {
      history.push('/login')
    } else {
      history.push('/welcome')
    }
    return null
  }
}

export default Home