import { combineReducers } from 'redux'
import authReducer from './auth'
import shopReducer from './shop'

const rootReducer = combineReducers({
  auth: authReducer,
  shop: shopReducer,
})

export default rootReducer