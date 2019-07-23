import React from 'react'
import { Route } from 'react-router-dom'
import isEqual from 'lodash/isEqual'

const PrivateRouteCurry = (state, history) => {
  return ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props => {
          const isAuthenticated = state.isLoggedIn

          if (isEqual(isAuthenticated, false)) {
            history.push('/login')
          } else {
            return <Component {...state} {...rest} {...props} />
          }
        }} />
      )
    }
}

export default PrivateRouteCurry
