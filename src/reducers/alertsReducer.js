import {CLEANMSGS,MSGERROR,MSGSUCCESS,MSGWARNING} from '../actions/alerts/actionCreator'

export function alertsReducer(state={},action){
  switch (action.type){
    case MSGERROR:
      return {msgErr:action.msg};
    case MSGSUCCESS:
      return {msgSucc:action.msg};
    case MSGWARNING:
      return {msgWar:action.msg};
    case CLEANMSGS:
      return {};
    default:
      return state
  }
}