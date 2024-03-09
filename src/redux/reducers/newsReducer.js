import { ADD_NEWS } from "../actions/homeAction";

const initialState = {
  data: [],
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEWS:
      return {
        ...state,
        data: [...state.data, ...action.payload.results],
      };
    default:
      return state;
  }
};

export default newsReducer;
