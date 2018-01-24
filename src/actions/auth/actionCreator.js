import axios from 'axios';
import UrlAPI from '../../components/UrlAPI'

export const AUTHENTICATED = 'authenticated_user';
export const UNAUTHENTICATED = 'unauthenticated_user';
export const AUTHENTICATION_ERROR = 'authentication_error';
export const STORE_USER = 'store_user';

export function signInAction({email, password}, history, path = {pathname: '/panel'}) {
  return async (dispatch) => {
    dispatch({type: AUTHENTICATION_ERROR, payload: ''});
    await axios.post(`${UrlAPI.getUrl()}/web/login`, {email, password})
      .then(res => {
        if (res.headers.authorization) {
          dispatch({type: AUTHENTICATED});
          localStorage.setItem('user', res.headers.authorization);
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

export function isAuthenticated(func) {
  let user = localStorage.getItem('user');
  if(user){
    axios.get(`${UrlAPI.getUrl()}/web/user/infos`)
      .then(res => {
        func(res.data.valid)
      })
      .catch(() => {
        func(false)
      })
  } else {
    func(false)
  }
}