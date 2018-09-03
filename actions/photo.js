import {
    SHOW_PHOTO_VIEW, HIDE_PHOTO_VIEW
  } from '../actions/types.js';
  
  
  
  export const showPhotoView = (data) => {
    return {
      payload: data,
      type: SHOW_PHOTO_VIEW
    }
  };


// export const showPhotoView = (data) => async dispatch => {
//       dispatch({  payload: data, type: SHOW_PHOTO_VIEW });
//   };
  
  
  
  
  export const hidePhotoView = (data) => {
    return {
      type: HIDE_PHOTO_VIEW
    }
  };
  