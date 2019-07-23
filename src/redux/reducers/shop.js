import {
  FETCH_PHOTOS,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAIL,
} from '../actions/types'

const initialState = {
  loading: null,
}

export default (state = initialState, action) => {
  switch(action.type){
    default:
      case FETCH_PHOTOS:
        return {
          ...state,
          loading: true,
        }
      case FETCH_PHOTOS_SUCCESS:
        return {
          ...state,
          loading: false,
        }
      case FETCH_PHOTOS_FAIL:
        return {
          ...state,
          loading: false,
        }
  }
}
