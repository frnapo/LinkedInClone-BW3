import { UPLOAD_PROFILE_PICTURE, UPLOAD_EXPERIENCE_PICTURE, UPLOAD_POST_PICTURE } from "../actions/imageAction";

const initialState = {
  profilePicture: {},
  experiencePictures: {},
  postPictures: {},
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_PROFILE_PICTURE:
      return { ...state, profilePicture: action.payload };

    case UPLOAD_EXPERIENCE_PICTURE:
      return {
        ...state,
        experiencePictures: {
          ...state.experiencePictures,
          [action.payload.expId]: action.payload.picture,
        },
      };

    case UPLOAD_POST_PICTURE:
      return {
        ...state,
        postPictures: {
          ...state.postPictures,
          [action.payload.postId]: action.payload.picture,
        },
      };

    default:
      return state;
  }
};

export default imageReducer;
