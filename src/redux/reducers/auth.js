import { 
  SIGN_IN,
  SIGN_IN_FAIL,
  SIGN_UP,
  SIGN_UP_FAIL,
  SIGN_UP_SUCCESS,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
} from '../actions/types'

const initialState = {
  signingIn: null,
  signingUp: null,
  signUpError: null,
  signUpSuccess: null,
  resetting: null,
  resetMessage: null,
}

export default (state = initialState, action) => {
  switch(action.type){
    case SIGN_IN: {
      return {
        ...state,
        signingIn: true
      }
    }
    case SIGN_IN_FAIL: {
      return {
        ...state,
        signingIn: null,
        signInError: action.payload,
      }
    }
    case SIGN_UP: {
      return {
        ...state,
        signingUp: true
      }
    }
    case SIGN_UP_SUCCESS: {
      return {
        ...state,
        signingUp: null,
        signUpError: null,
        signUpSuccess: action.payload,
      }
    }
    case SIGN_UP_FAIL: {
      return {
        ...state,
        signUpError: action.payload,
        signingUp: null,
      }
    }
    case RESET_PASSWORD: {
      return {
        ...state,
        resetting: true,
      }
    }
    case RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        resetting: false,
        resetMessage: 'If the email exists in our system, we will send you a password reset email'
      }
    }
    case RESET_PASSWORD_FAIL: {
      return {
        ...state,
        resetting: false,
        resetMessage: 'If the email exists in our system, we will send you a password reset email'
      }
    }
    default:
        return state
  }
}
