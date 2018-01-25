import axios from 'axios';
import UrlAPI from '../../components/UrlAPI'

export const STORE_BOTTLES_INFOS = "store_bottles_infos";

export function getBottlesInfos() {
  return dispatch => {
    axios.get(`${UrlAPI.getUrl()}/web/bottles/infos`)
      .then(res => {
        dispatch({type:STORE_BOTTLES_INFOS, payload:res.data})
      })
      .catch(err => {
        throw err;
      })
  }
}