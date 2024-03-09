import { FETCH_PROFILE_REQUEST, FETCH_PROFILE_SUCCESS, FETCH_PROFILE_FAILURE } from "../actions/profileAction";

const initialState = {
  loading: false,
  profile: [],
  error: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILE_REQUEST:
      return { ...state, loading: true };
    case FETCH_PROFILE_SUCCESS:
      return { ...state, loading: false, profile: action.payload, error: "" };
    case FETCH_PROFILE_FAILURE:
      return { ...state, loading: false, profile: {}, error: action.payload };
    default:
      return state;
  }
};

export default profileReducer;
