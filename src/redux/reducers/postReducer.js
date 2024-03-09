import { ADD_POSTS } from "../actions/homeAction";

const initialState = {
  data: [],
};

const postReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POSTS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default postReducers;
