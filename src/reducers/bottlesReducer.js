import { STORE_BOTTLES_INFOS } from '../actions/bottles/actionCreator';

export function bottlesReducer(state={}, action) {
  switch(action.type) {
    case STORE_BOTTLES_INFOS:
      return { ...state, infos: action.payload };
    default:
      return state
  }
}