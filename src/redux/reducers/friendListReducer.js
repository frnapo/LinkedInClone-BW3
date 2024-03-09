import { ADD_FRIEND, DELETE_FRIEND } from "../actions/friendListAction";

const initialState = {
  list: [],
};

const friendListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FRIEND:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case DELETE_FRIEND:
      return {
        ...state,
        list: state.list.filter((elem) => elem._id !== action.payload),
      };
    default:
      return state;
  }
};
export default friendListReducer;
