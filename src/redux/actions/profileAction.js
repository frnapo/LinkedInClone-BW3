import axios from "axios";

export const FETCH_PROFILE_REQUEST = "FETCH_PROFILE_REQUEST";
export const FETCH_PROFILE_SUCCESS = "FETCH_PROFILE_SUCCESS";
export const FETCH_PROFILE_FAILURE = "FETCH_PROFILE_FAILURE";

const fetchProfileRequest = () => ({
  type: FETCH_PROFILE_REQUEST,
});

const fetchProfileSuccess = (profile) => ({
  type: FETCH_PROFILE_SUCCESS,
  payload: profile,
});

const fetchProfileFailure = (error) => ({
  type: FETCH_PROFILE_FAILURE,
  payload: error,
});

export const fetchProfile = () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlNzY2YzYwMGJlMTAwMTgzYTg2YzciLCJpYXQiOjE3MDU5MzIzOTYsImV4cCI6MTcwNzE0MTk5Nn0._lXDAp9GrSaRCbC4PwGaSAxnfN79__pJeNpk4ERaOD0";
  return (dispatch) => {
    dispatch(fetchProfileRequest());
    axios
      .get("https://striveschool-api.herokuapp.com/api/profile/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const profile = response.data;
        dispatch(fetchProfileSuccess(profile));
        console.log("Dati ricevuti da Profile:", response.data);
      })
      .catch((error) => {
        dispatch(fetchProfileFailure(error.message));
      });
  };
};
