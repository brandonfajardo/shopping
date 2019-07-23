import React from 'react'
import ReactDOM from 'react-dom'
import { BaseCSS } from 'styled-bootstrap-grid'

import { Provider } from 'react-redux'
import store from './redux/store'
// import './firebase'
import Routes from './routes'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BaseCSS /> {/* Neccessary for bootstrap grid */}
        <Routes />
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
