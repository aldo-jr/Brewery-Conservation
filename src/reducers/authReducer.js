import { AUTHENTICATED, UNAUTHENTICATED, AUTHENTICATION_ERROR, STORE_USER_EMAIL, STORE_USER, STORE_USER_TYPE } from '../actions/actionCreator';

export function authReducer(state={}, action) {
  switch(action.type) {
    case AUTHENTICATED:
      return { ...state, authenticated: true };
    case UNAUTHENTICATED:
      return { ...state, authenticated: false };
    case AUTHENTICATION_ERROR:
      return { ...state, error: action.payload };
    case STORE_USER_EMAIL:
      return { ...state, userEmail: action.payload };
    case STORE_USER:
      return { ...state, user: action.payload };
    case STORE_USER_TYPE:
      return {...state, userType: action.payload};
    default:
      return state
  }
}