import axios from 'axios'
import { 
  FETCH_PHOTOS,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAIL,
  TOGGLE_FAVOURITE,
  DELETE_CART_ITEM,
  RESET_PHOTOS,
} from './types'

export const fetchPhotos = (page, searchTerm) => {
  return dispatch => {
    dispatch({ type: FETCH_PHOTOS })
    setTimeout(() => { // Just want to show loading animation :)
      axios.get(`https://api.unsplash.com/search/photos/?page=${page}&per_page=24&query=${searchTerm}&client_id=${'13906d4db219b70cb342be87a1a8993569b2fe2dd8995a01df44e68139d2a29a'}`)
      .then(({ data }) => {
        dispatch({ type: FETCH_PHOTOS_SUCCESS, payload: { page, data, searchTerm }})
      })
      .catch(() => {
        dispatch({ type: FETCH_PHOTOS_FAIL })
      })
    }, 800)
  }
}

export const addToCart = photo => ({
  type: TOGGLE_FAVOURITE,
  payload: photo
})

export const deleteCartItem = itemId => ({
  type: DELETE_CART_ITEM,
  payload: itemId,
})

export const resetPhotos = () => ({
  type: RESET_PHOTOS,
})