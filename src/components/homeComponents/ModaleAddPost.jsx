import { Button, Image, Modal } from "react-bootstrap";
import { ImageFill, Calendar3, ThreeDots, PatchPlusFill, Check2 } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import Dropzone from "react-dropzone";
import { useState } from "react";
import {
  addErrorMessageAction,
  fetchPost,
  hasErrorTrueAction,
  isLoadingFalseAction,
  isLoadingTrueAction,
} from "../../redux/actions/homeAction";

const ModaleAddPost = ({ handleClose, show, profile, postText, setPostText, modifica, idPost }) => {
  const dispatch = useDispatch();
  const [image, setImage] = useState();

  const handleChange = (e) => {
    const newText = e.target.value;

    clearTimeout(handleChange.timeout);
    handleChange.timeout = setTimeout(() => {
      setPostText(newText);
    }, 1500);
  };

  const fetchNewPost = async () => {
    if (postText) {
      try {
        console.log("vediamo se siamo nel try");
        dispatch(isLoadingTrueAction());
        const resp = await fetch(`https://striveschool-api.herokuapp.com/api/posts/`, {
          method: "POST",
          body: JSON.stringify({ text: postText }),
          headers: {
            "content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlOTBhNGJkNWQxMjAwMTg5MGQzMTgiLCJpYXQiOjE3MDU5MzkxMDgsImV4cCI6MTcwNzE0ODcwOH0.1uiduDteuO646k5b6tK8nq0uhzV1ZV4npoqRktlImNI",
          },
        });
        if (resp.ok) {
          const data = await resp.json();
          setPostText("");
          dispatch(fetchPost());
          handleClose(false);
          console.log(data);
          image && handleImage(data._id);
        } else {
          dispatch(hasErrorTrueAction());
          throw new Error(resp.status);
        }
      } catch (error) {
        dispatch(addErrorMessageAction(error.message));
        console.log("Bestemmia se mi leggi", error.message);
      } finally {
        dispatch(isLoadingFalseAction());
      }
    } else {
      window.alert("Ci devi scrivere qualcosa, genio");
      setImage("");
    }
  };

  const fetchEditPost = async () => {
    try {
      dispatch(isLoadingTrueAction());
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${idPost}`, {
        method: "PUT",
        body: JSON.stringify({ text: postText }),
        headers: {
          "content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlOTBhNGJkNWQxMjAwMTg5MGQzMTgiLCJpYXQiOjE3MDU5MzkxMDgsImV4cCI6MTcwNzE0ODcwOH0.1uiduDteuO646k5b6tK8nq0uhzV1ZV4npoqRktlImNI",
        },
      });
      if (resp.ok) {
        setPostText("");
        dispatch(fetchPost());
        handleClose(false);
      } else {
        dispatch(hasErrorTrueAction());
        throw new Error(resp.status);
      }
    } catch (error) {
      dispatch(addErrorMessageAction(error.message));
      console.log("Spera di non leggermi mai");
    } finally {
      dispatch(isLoadingFalseAction());
    }
  };

  const handleImage = async (...parametro) => {
    const formImage = new FormData();
    formImage.append("post", image);
    console.log(formImage.get("post"));
    try {
      dispatch(isLoadingTrueAction());
      const resp = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${parametro[0] ? parametro[0] : idPost}`,
        {
          method: "POST",
          body: formImage,
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlOTBhNGJkNWQxMjAwMTg5MGQzMTgiLCJpYXQiOjE3MDU5MzkxMDgsImV4cCI6MTcwNzE0ODcwOH0.1uiduDteuO646k5b6tK8nq0uhzV1ZV4npoqRktlImNI",
          },
        }
      );
      if (resp.ok) {
        setImage(null);
        dispatch(fetchPost());
        handleClose(false);
      } else {
        dispatch(hasErrorTrueAction());
        throw new Error(resp.status);
      }
    } catch (error) {
      dispatch(addErrorMessageAction(error.message));
      console.log("Stesso discorso, se mi vedi piangi");
    } finally {
      dispatch(isLoadingFalseAction());
    }
  };
  return (
    profile && (
      <>
        <Modal show={show} onHide={handleClose} style={{ marginTop: "8em" }}>
          <Modal.Header closeButton>
            <Image
              src={
                profile ? profile.image : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
              }
              alt="profileImg"
              width="60px"
              height="60px"
              roundedCircle
              style={{ objectFit: "cover" }}
            />
            <Modal.Title className="ms-3">{`${profile.name} ${profile.surname}`}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-flex flex-column">
            <textarea
              className="mx-auto border-0 rounded-2 p-4"
              id="textAreaModale"
              name="textAreaModale"
              rows="4"
              cols="50"
              defaultValue={postText}
              placeholder="Inserisci il testo qui"
              style={{ backgroundColor: "#F4F2EE" }}
              onChange={handleChange}
            ></textarea>
            <div className="mt-3 d-flex justify-content-between">
              {
                <Button variant="outline-light" className="border-0" style={{ position: "relative" }}>
                  <Dropzone>
                    {({ getRootProps, getInputProps, acceptedFiles }) => (
                      <>
                        <div {...getRootProps()}>
                          <input
                            {...getInputProps}
                            id="dropZoneBtn"
                            placeholder="Path/img..."
                            className="border-0 rounded-2 p-1"
                            style={{ backgroundColor: "#F4F2EE" }}
                          />{" "}
                          {image ? (
                            <Check2 className="text-secondary ms-2" />
                          ) : (
                            <ImageFill className="text-secondary ms-2" />
                          )}
                          {acceptedFiles[0] && setImage(acceptedFiles[0])}
                        </div>
                      </>
                    )}
                  </Dropzone>
                </Button>
              }
              <div className="me-3">
                <Button className="rounded-circle ms-2 border-0" variant="outline-secondary">
                  <Calendar3 />
                </Button>
                <Button className="rounded-circle ms-2  border-0" variant="outline-secondary">
                  <PatchPlusFill />
                </Button>
                <Button className="rounded-circle ms-2 border-0" variant="outline-secondary">
                  <ThreeDots />
                </Button>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="text-secondary rounded-5"
              variant="light"
              onClick={() => {
                handleClose();
                modifica ? fetchEditPost() : fetchNewPost();
                image && modifica && handleImage();
              }}
            >
              {modifica ? "Modifica" : "Pubblica"}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  );
};
export default ModaleAddPost;
