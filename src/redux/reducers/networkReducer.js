import { FETCH_NETWORK_REQUEST, FETCH_NETWORK_SUCCESS, FETCH_NETWORK_FAILURE } from "../actions/networkAction";

const initialState = {
  loading: false,
  network: [],
  error: "",
};

const networkReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NETWORK_REQUEST:
      return { ...state, loading: true };
    case FETCH_NETWORK_SUCCESS:
      return { ...state, loading: false, network: action.payload, error: "" };
    case FETCH_NETWORK_FAILURE:
      return { ...state, loading: false, network: [], error: action.payload };
    default:
      return state;
  }
};

export default networkReducer;
