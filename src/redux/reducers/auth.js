import { 
  SIGN_IN,
  SIGN_IN_FAIL,
  SIGN_UP,
  SIGN_UP_FAIL,
  SIGN_UP_SUCCESS,
} from '../actions/types'

const initialState = {
  signingIn: null,
  signingUp: null,
  signUpError: null,
  signUpSuccess: null,
}

export default (state = initialState, action) => {
  switch(action.type){
    case SIGN_IN:
      return {
        ...state,
        signingIn: true
      }
    case SIGN_IN_FAIL: 
      return {
        ...state,
        signingIn: null,
        signInError: action.payload,
      }
    case SIGN_UP: 
      return {
        ...state,
        signingUp: true
      }
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        signingUp: null,
        signUpError: null,
        signUpSuccess: action.payload,
      }
    case SIGN_UP_FAIL:
      return {
        ...state,
        signUpError: action.payload,
        signingUp: null,
      }
    default:
        return state
  }
}
