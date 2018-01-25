export const MSGERROR = "msgerror"
export const MSGSUCCESS = "MSGSUCCESS"
export const MSGWARNING = "MSGWARNING"
export const CLEANMSGS = "CLEANMSGS"

export default class AlertsApi {
  static cleanAlerts(){
    return dispatch => {
      dispatch({type:CLEANMSGS});
      return true
    }
  }
}