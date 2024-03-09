export const UPLOAD_PROFILE_PICTURE = "UPLOAD_PROFILE_PICTURE";
export const UPLOAD_EXPERIENCE_PICTURE = "UPLOAD_EXPERIENCE_PICTURE";
export const UPLOAD_POST_PICTURE = "UPLOAD_POST_PICTURE";

const API_URL = "https://striveschool-api.herokuapp.com/api";

export const uploadProfilePicture = (userId, file) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("profile", file);

    const response = await fetch(`${API_URL}/profile/${userId}/picture`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlOTBhNGJkNWQxMjAwMTg5MGQzMTgiLCJpYXQiOjE3MDU5MzkxMDgsImV4cCI6MTcwNzE0ODcwOH0.1uiduDteuO646k5b6tK8nq0uhzV1ZV4npoqRktlImNI",
      },
    });

    if (!response.ok) {
      throw new Error("Upload failed");
    }

    const data = await response.json();
    dispatch({
      type: UPLOAD_PROFILE_PICTURE,
      payload: data,
    });
  } catch (error) {
    console.error(error);
  }
};

/*  */

export const uploadExperiencePicture = (userId, expId, file) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("experience", file);

    const response = await fetch(`${API_URL}/profile/${userId}/experiences/${expId}/picture`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlNzY2YzYwMGJlMTAwMTgzYTg2YzciLCJpYXQiOjE3MDU5MzIzOTYsImV4cCI6MTcwNzE0MTk5Nn0._lXDAp9GrSaRCbC4PwGaSAxnfN79__pJeNpk4ERaOD0",
      },
    });

    if (!response.ok) {
      throw new Error("Upload failed");
    }

    const data = await response.json();
    dispatch({
      type: UPLOAD_EXPERIENCE_PICTURE,
      payload: { expId, picture: data },
    });
  } catch (error) {
    console.error(error);
  }
};

/*  */

export const uploadPostPicture = (postId, file) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("post", file);

    const response = await fetch(`${API_URL}/posts/${postId}`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlOTBhNGJkNWQxMjAwMTg5MGQzMTgiLCJpYXQiOjE3MDU5MzkxMDgsImV4cCI6MTcwNzE0ODcwOH0.1uiduDteuO646k5b6tK8nq0uhzV1ZV4npoqRktlImNI",
      },
    });

    if (!response.ok) {
      throw new Error("Upload failed");
    }

    const data = await response.json();
    dispatch({
      type: UPLOAD_POST_PICTURE,
      payload: { postId, picture: data },
    });
  } catch (error) {
    console.error(error);
  }
};
