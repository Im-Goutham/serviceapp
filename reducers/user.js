import {
  SAVE_USER,SHOW_BACKBUTTON
} from '../actions/types.js';

const INITIAL_STATE = {
  user: {},
  backButton: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_USER:
      return  Object.assign({}, state, {user: action.payload});
    case SHOW_BACKBUTTON:
    return  Object.assign({}, state, {backButton: action.payload});
    default:
      return state;
  }
}
