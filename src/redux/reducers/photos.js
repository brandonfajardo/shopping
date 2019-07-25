import {
  FETCH_PHOTOS,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAIL,
  TOGGLE_FAVOURITE,
  DELETE_CART_ITEM,
  RESET_PHOTOS,
} from '../actions/types'
import isEqual from 'lodash/isEqual'

const initialState = {
  loading: null,
  lastPage: null,
  currentPage: 0,
  photos: [],
  searchTerm: '',
}

export default (state = initialState, action) => {
  switch(action.type){
    case FETCH_PHOTOS: {
      return {
        ...state,
        loading: true,
      }
    }
    case FETCH_PHOTOS_SUCCESS: {
      return {
        ...state,
        loading: false,
        currentPage: action.payload.page,
        photos: [...state.photos, ...action.payload.data.results],
        lastPage: action.payload.data.total_pages,
        searchTerm: action.payload.searchTerm,
      } 
    }
    case FETCH_PHOTOS_FAIL: {
      return {
        ...state,
        loading: false,
      }
    }
    case TOGGLE_FAVOURITE: {
      const updatedPhotos = state.photos.map(photo => {
        if (isEqual(photo.id, action.payload.id)) {
          return {
            ...photo,
            liked_by_user: !photo.liked_by_user
          }
        }
        return photo
      })
  
      return {
        ...state,
        photos: updatedPhotos,
      }
    }
    case DELETE_CART_ITEM: {
      const updatedPhotos = state.photos.map(photo => {
        if (isEqual(photo.id, action.payload)) {
          return {
            ...photo,
            liked_by_user: !photo.liked_by_user
          }
        }
        return photo
      })

      return {
        ...state,
        photos: updatedPhotos,
      }
    }
    case RESET_PHOTOS: {
      return {
        ...state,
        photos: [],
      }
    }
    default:
      return state
  }
}
