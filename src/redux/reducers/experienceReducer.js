import {
  FETCH_EXPERIENCES_REQUEST,
  FETCH_EXPERIENCES_SUCCESS,
  FETCH_EXPERIENCES_FAILURE,
  ADD_EXPERIENCE,
  UPDATE_EXPERIENCE,
  DELETE_EXPERIENCE,
} from "../actions/experienceAction";

const initialState = {
  loading: false,
  experiences: [],
  error: "",
};

const experienceReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EXPERIENCES_REQUEST:
      return { ...state, loading: true };
    case FETCH_EXPERIENCES_SUCCESS:
      return { loading: false, experiences: action.payload, error: "" };
    case FETCH_EXPERIENCES_FAILURE:
      return { loading: false, experiences: [], error: action.payload };

    case ADD_EXPERIENCE:
      return { ...state, experiences: [...state.experiences, action.payload] };

    case UPDATE_EXPERIENCE:
      return {
        ...state,
        experiences: state.experiences.map((exp) => (exp._id === action.payload._id ? action.payload : exp)),
      };

    case DELETE_EXPERIENCE:
      return {
        ...state,
        experiences: state.experiences.filter((exp) => exp._id !== action.payload),
      };

    default:
      return state;
  }
};

export default experienceReducer;
