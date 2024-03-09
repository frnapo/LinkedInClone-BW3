import axios from "axios";

export const FETCH_EXPERIENCES_REQUEST = "FETCH_EXPERIENCES_REQUEST";
export const FETCH_EXPERIENCES_SUCCESS = "FETCH_EXPERIENCES_SUCCESS";
export const FETCH_EXPERIENCES_FAILURE = "FETCH_EXPERIENCES_FAILURE";
export const ADD_EXPERIENCE = "ADD_EXPERIENCE";
export const UPDATE_EXPERIENCE = "UPDATE_EXPERIENCE";
export const DELETE_EXPERIENCE = "DELETE_EXPERIENCE";

export const fetchExperiences = (userId, token) => {
  return (dispatch) => {
    dispatch({ type: FETCH_EXPERIENCES_REQUEST });
    axios
      .get(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        dispatch({ type: FETCH_EXPERIENCES_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_EXPERIENCES_FAILURE, payload: error.message });
      });
  };
};

export const addExperience = (userId, token, experienceData) => {
  return (dispatch) => {
    return axios
      .post(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`, experienceData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        dispatch({ type: ADD_EXPERIENCE, payload: response.data });
        console.log("Dati ricevuti da Esperienze:", response.data);
      })
      .catch((error) => {
        dispatch({ type: FETCH_EXPERIENCES_FAILURE, payload: error.message });
        throw error;
      });
  };
};

export const updateExperience = (userId, token, expId, experienceData) => {
  return (dispatch) => {
    return axios
      .put(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`, experienceData, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        dispatch({ type: UPDATE_EXPERIENCE, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_EXPERIENCES_FAILURE, payload: error.message });
      });
  };
};

export const deleteExperience = (userId, token, expId) => {
  return (dispatch) => {
    return axios
      .delete(`https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences/${expId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => {
        dispatch({ type: DELETE_EXPERIENCE, payload: expId });
      })
      .catch((error) => {
        dispatch({ type: FETCH_EXPERIENCES_FAILURE, payload: error.message });
      });
  };
};
