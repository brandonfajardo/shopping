import {
  TOGGLE_FAVOURITE,
  DELETE_CART_ITEM,
} from '../actions/types'
import isEqual from 'lodash/isEqual'

const initialState = {
  cart: [],
}

export default (state = initialState, action) => {
  switch(action.type){
    case TOGGLE_FAVOURITE: {

      const liked = action.payload.liked_by_user

      const cart = isEqual(liked, false) // photo is being liked
        ? [...state.cart, action.payload]
        : state.cart.filter(photo => !isEqual(action.payload.id, photo.id))

      return {
        ...state,
        cart,
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
