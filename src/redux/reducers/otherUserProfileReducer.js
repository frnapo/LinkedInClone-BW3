const INITIAL_STATE = {
  userProfile: null,
  isFetching: false,
  errorMessage: undefined,
};

const otherUserProfileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_USER_PROFILE_START":
      return {
        ...state,
        isFetching: true,
      };
    case "FETCH_USER_PROFILE_SUCCESS":
      return {
        ...state,
        isFetching: false,
        userProfile: action.payload,
      };
    case "FETCH_USER_PROFILE_FAILURE":
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default otherUserProfileReducer;
