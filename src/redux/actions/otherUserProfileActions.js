export const fetchUserProfileStart = () => ({
  type: "FETCH_USER_PROFILE_START",
});

export const fetchUserProfileSuccess = (userProfile) => ({
  type: "FETCH_USER_PROFILE_SUCCESS",
  payload: userProfile,
});

export const fetchUserProfileFailure = (error) => ({
  type: "FETCH_USER_PROFILE_FAILURE",
  payload: error,
});

export const fetchUserProfileAsync = (userId) => {
  return async (dispatch) => {
    dispatch(fetchUserProfileStart());
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlNzY2YzYwMGJlMTAwMTgzYTg2YzciLCJpYXQiOjE3MDU5MzIzOTYsImV4cCI6MTcwNzE0MTk5Nn0._lXDAp9GrSaRCbC4PwGaSAxnfN79__pJeNpk4ERaOD0`,
        },
      });
      const userProfile = await response.json();
      dispatch(fetchUserProfileSuccess(userProfile));
    } catch (error) {
      dispatch(fetchUserProfileFailure(error));
    }
  };
};
