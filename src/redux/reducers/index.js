import { combineReducers } from 'redux'
import authReducer from './auth'
import photoReducer from './photos'
import cartReducer from './cart'

const rootReducer = combineReducers({
  auth: authReducer,
  photos: photoReducer,
  cart: cartReducer,
})

export default rootReducer