import {
  ADD_CART_ITEM,
  DELETE_CART_ITEM,
} from '../actions/types'
import isEqual from 'lodash/isEqual'

const initialState = {
  cart: [],
}

export default (state = initialState, action) => {
  switch(action.type){
    case ADD_CART_ITEM: {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      }
    }
    case DELETE_CART_ITEM: {
      const updatedCart = state.cart.filter(item => !isEqual(item.id, action.payload))
      return {
        ...state,
        cart: updatedCart,
      }
    }
    default:
      return state
  }
}
