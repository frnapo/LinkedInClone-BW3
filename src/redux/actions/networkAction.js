import axios from "axios";

export const FETCH_NETWORK_REQUEST = "FETCH_NETWORK_REQUEST";
export const FETCH_NETWORK_SUCCESS = "FETCH_NETWORK_SUCCESS";
export const FETCH_NETWORK_FAILURE = "FETCH_NETWORK_FAILURE";

const fetchNetworkRequest = () => ({
  type: FETCH_NETWORK_REQUEST,
});

const fetchNetworkSuccess = (network) => ({
  type: FETCH_NETWORK_SUCCESS,
  payload: network,
});

const fetchNetworkFailure = (error) => ({
  type: FETCH_NETWORK_FAILURE,
  payload: error,
});

export const fetchNetwork = () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlOTBhNGJkNWQxMjAwMTg5MGQzMTgiLCJpYXQiOjE3MDU5MzkxMDgsImV4cCI6MTcwNzE0ODcwOH0.1uiduDteuO646k5b6tK8nq0uhzV1ZV4npoqRktlImNI";
  return (dispatch) => {
    dispatch(fetchNetworkRequest());
    axios
      .get("https://striveschool-api.herokuapp.com/api/profile/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const network = response.data;
        dispatch(fetchNetworkSuccess(network));
        console.log("Dati ricevuti da Network:", response.data);
      })
      .catch((error) => {
        dispatch(fetchNetworkFailure(error.message));
      });
  };
};
