import axios from 'axios';
import UrlAPI from '../../components/UrlAPI'

export const AUTHENTICATED = 'authenticated_user';
export const UNAUTHENTICATED = 'unauthenticated_user';
export const AUTHENTICATION_ERROR = 'authentication_error';
export const STORE_USER = 'store_user';

export function signInAction({email, password}, history, path = {pathname: '/panel'}) {
  return (dispatch) => {
    dispatch({type: AUTHENTICATION_ERROR, payload: ''});
    axios.post(`${UrlAPI.getUrl()}/web/auth/login`, {email, password})
      .then(res => {
        if (res.data.auth) {
          dispatch({type: AUTHENTICATED});
          localStorage.setItem('user', res.data.token);
          history.push(path.pathname);
        }
        else {
          dispatch({type: AUTHENTICATION_ERROR, payload: 'Usuário ou senha inválidos'});
        }
      })
      .catch(() => {
        dispatch({type: AUTHENTICATION_ERROR, payload: 'Usuário ou senha inválidos'});
      });

  }
}

export function signOutAction(history) {
  return dispatch => {
    dispatch({type: UNAUTHENTICATED});
    localStorage.clear();
    history.push('/');
  }
}

export function isAuthenticated() {
  return localStorage.getItem('user')
}

export function verifyToken(history) {
  return dispatch => {
    if (localStorage.getItem('user')) {
      axios.get(`${UrlAPI.getUrl()}/web/auth/me`)
        .then(res => {
          dispatch({type: STORE_USER, payload:res.data.attributes});
          dispatch({type: AUTHENTICATED});
        })
        .catch(() => {
          dispatch({type: UNAUTHENTICATED});
          localStorage.clear();
          history.push('/', {});
        })
    } else {
      dispatch({type: UNAUTHENTICATED});
    }
    return false;
  }
}