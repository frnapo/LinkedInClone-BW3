import {
  ADD_CURRENT_USER_DATA,
  ADD_ERROR_MESSAGE,
  HAS_ERROR_FALSE,
  HAS_ERROR_TRUE,
  IS_LOADING_FALSE,
  IS_LOADING_TRUE,
} from "../actions/homeAction";

const initialstate = {
  userData: null,
  isLoading: false,
  hasError: false,
  errorMessage: "",
  idLoggedUser: "",
};

const currentUserReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_CURRENT_USER_DATA:
      return {
        ...state,
        userData: { ...state.userData, ...action.payload },
      };

    case IS_LOADING_TRUE:
      return {
        ...state,
        isLoading: action.payload,
      };
    case IS_LOADING_FALSE:
      return {
        ...state,
        isLoading: action.payload,
      };
    case HAS_ERROR_TRUE:
      return {
        ...state,
        hasError: action.payload,
      };
    case HAS_ERROR_FALSE:
      return {
        ...state,
        hasError: action.payload,
      };
    case ADD_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case "ADD_LOGGED_ID": {
      return {
        ...state,
        idLoggedUser: action.payload,
      };
    }
    default:
      return state;
  }
};

export default currentUserReducer;
