import {
    SHOW_PHOTO_VIEW, HIDE_PHOTO_VIEW
  } from '../actions/types.js';
  
  const INITIAL_STATE = {
    photoView: false,
    images: [],
    index: 0
  }
  
  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case SHOW_PHOTO_VIEW:
        return { photoView: true,images :action.payload.images,index: action.payload.index };
      case HIDE_PHOTO_VIEW:
        return { photoView: false,images :[],index: 0 };
      default:
        return state;
    }
  }
  