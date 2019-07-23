import React from 'react'
import { Router, Switch } from 'react-router-dom'
import history from './history'
import Login from './pages/auth/Login'
import Welcome from './pages/misc/Welcome'
import ShopList from './pages/shop/ShopList'
import { dbAuth } from './firebase'
import PrivateRouteCurry from './privateRoute'
import PublicRouteCurry from './publicRoute'
import { NavBar } from './components'
import isEqual from 'lodash/isEqual'

class AppRoutes extends React.Component {
  state = {
    loading: true,
    isLoggedIn: null,
  }

  componentDidMount () {
    this.authListener()
  }

  authListener = () => {
    dbAuth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ isLoggedIn: true, loading: false })
      } else {
        this.setState({ isLoggedIn: false, loading: false })
      }
    })
  }

  render() {
    const { loading, isLoggedIn } = this.state
    if (isEqual(loading, true)) return null

    const PrivateRoute = PrivateRouteCurry(this.state, history)
    const PublicRoute = PublicRouteCurry(this.state, history)

    return (
      <div>
        {isEqual(isLoggedIn, true) && <NavBar {...this.state} />}
        <Router history={history}>
          <Switch>
            <PublicRoute path='/login' exact={true} component={Login} />
            <PrivateRoute path='/welcome' exact={true} component={Welcome} />
            <PrivateRoute path='/shop' exact={true} component={ShopList} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default AppRoutes