import React from 'react'
import { Route } from 'react-router-dom'
import isEqual from 'lodash/isEqual'

const PublicRouteCurry = (state, history) => {
  return ({ component: Component, ...rest }) => {
    console.log('inside public route')
    return (
      <Route
        {...rest}
        render={props => {
          const isAuthenticated = state.isLoggedIn

          if (isEqual(isAuthenticated, true)) {
            props.history.push('/welcome')
          } else {
            return <Component {...state} {...rest} {...props} />
          }
        }} />
      )
    }
}

export default PublicRouteCurry