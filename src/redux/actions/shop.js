import axios from 'axios'
import { 
  FETCH_PHOTOS,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAIL
} from './types'

export const fetchItems = () => {
  return dispatch => {
    dispatch({ type: FETCH_PHOTOS })
    axios.get(`https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${'expensive'}&client_id=${'13906d4db219b70cb342be87a1a8993569b2fe2dd8995a01df44e68139d2a29a'}`)
      .then(({ data }) => {
        dispatch({ type: FETCH_PHOTOS_SUCCESS, payload: data })
      })
      .catch(() => {
        dispatch({ type: FETCH_PHOTOS_FAIL })
      })
  }
}