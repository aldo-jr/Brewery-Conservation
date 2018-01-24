import { AUTHENTICATED, UNAUTHENTICATED, AUTHENTICATION_ERROR, STORE_USER} from '../actions/auth/actionCreator';

export function authReducer(state={}, action) {
  switch(action.type) {
    case AUTHENTICATED:
      return { ...state, authenticated: true };
    case UNAUTHENTICATED:
      return { ...state, authenticated: false };
    case AUTHENTICATION_ERROR:
      return { ...state, error: action.payload };
    case STORE_USER:
      return { ...state, user: action.payload };
    default:
      return state
  }
}