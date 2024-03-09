import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Card, Button, Modal, Form } from "react-bootstrap";
import { PlusLg, PencilFill, Trash } from "react-bootstrap-icons";
import {
  fetchExperiences,
  addExperience,
  updateExperience,
  deleteExperience,
} from "../../redux/actions/experienceAction";
import "../../assets/style/experience.css";
import { uploadExperiencePicture } from "../../redux/actions/imageAction";

const ExperienceComponent = ({ userId, token }) => {
  const dispatch = useDispatch();
  const { experiences } = useSelector((state) => state.experience);
  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const [currentExperience, setCurrentExperience] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
    image: "",
    _id: null,
  });

  useEffect(() => {
    if (userId && token) {
      dispatch(fetchExperiences(userId, token));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddOrUpdateExperience();
  };

  const handleAddOrUpdateExperience = () => {
    const action = currentExperience._id
      ? updateExperience(userId, token, currentExperience._id, currentExperience)
      : addExperience(userId, token, currentExperience);
    console.log("Fetch exp", experiences);

    dispatch(action)
      .then(() => {
        dispatch(fetchExperiences(userId, token));
        setShowModal(false);
        setCurrentExperience({
          role: "",
          company: "",
          startDate: "",
          endDate: "",
          description: "",
          area: "",
        });
      })
      .catch((error) => {
        console.error("Errore nell'aggiornamento dell'esperienza:", error);
      });
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUploadImage = () => {
    if (selectedFile && currentExperience._id) {
      dispatch(uploadExperiencePicture(userId, currentExperience._id, selectedFile, token));
      setSelectedFile(null);
    }
  };

  const handleInputChange = (e) => {
    setCurrentExperience({ ...currentExperience, [e.target.name]: e.target.value });
  };

  const handleDeleteExperience = (expId) => {
    dispatch(deleteExperience(userId, token, expId));
  };

  const toShortDate = (isoDate) => {
    return isoDate ? isoDate.split("T")[0] : "";
  };

  console.log("Aggiornamento Esperienze:", experiences);

  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <Col xs={12}>
      <Card className="mt-2">
        <Card.Body className="pb-0">
          <div className="d-flex justify-content-between mb-2">
            <Card.Title className="m-2">Esperienze</Card.Title>
            <Button
              variant="link"
              className="custom-edits-buttons px-2"
              onClick={() => {
                setShowModal(true);
                setCurrentExperience({
                  role: "",
                  company: "",
                  startDate: "",
                  endDate: "",
                  description: "",
                  area: "",
                });
              }}
            >
              <PlusLg className="text-secondary fs-3" />
            </Button>
          </div>
          {experiences.map((exp) => (
            <div key={exp._id} className="mb-3">
              <Card className="border-0 border-top">
                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <Card.Title style={{ textTransform: "uppercase" }} className="fw-normal mb-0">
                      {exp.company}
                    </Card.Title>
                    <div className="custom-div">
                      <Button
                        variant="link"
                        className="custom-edits-buttons"
                        onClick={() => {
                          setShowModal(true);
                          setCurrentExperience({
                            ...exp,
                            startDate: toShortDate(exp.startDate),
                            endDate: toShortDate(exp.endDate),
                          });
                        }}
                      >
                        <PencilFill className="text-secondary fs-5 mb-1 " />
                      </Button>
                      <Button
                        variant="link"
                        onClick={() => handleDeleteExperience(exp._id)}
                        className="custom-edits-buttons"
                      >
                        <Trash className="text-secondary fs-5 mb-1" />
                      </Button>
                    </div>
                  </div>

                  <p style={{ fontWeight: "700", textTransform: "uppercase" }} className="mb-0 custom-company">
                    {exp.role}
                  </p>
                  <Card.Text className="lead" style={{ fontSize: "13px" }}>
                    {toShortDate(exp.startDate)} - {toShortDate(exp.endDate) || "In corso"}
                  </Card.Text>
                  <Card.Text style={{ fontSize: "15px" }}>
                    <span className="fw-bolder">Descrizione:</span> {exp.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Card.Body>
      </Card>

      {/* Modal per aggiungere o modificare un'esperienza */}
      <Modal show={showModal} onHide={() => setShowModal(false)} style={{ marginTop: "5em" }}>
        <Modal.Header closeButton>
          <Modal.Title className="fs-5">
            {currentExperience._id ? "Modifica Esperienza" : "Aggiungi Esperienza"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <Form onSubmit={handleSubmit}>
            <h6 className=" m-0 ps-3 pt-2" style={{ backgroundColor: "#EDF3F7" }}>
              Informa la rete
            </h6>
            <div className="p-2 pb-0 px-3 d-flex" style={{ backgroundColor: "#EDF3F7" }}>
              <p style={{ fontSize: "14px" }}>
                Attiva l’opzione per informare la tua rete delle principali modifiche al profilo (ad esempio nuovi
                titoli di studio) e degli anniversari lavorativi. Scopri di più sulla{" "}
                <span className="text-primary" style={{ fontWeight: "600", cursor: "pointer" }}>
                  condivisione delle modifiche del profilo
                </span>
                .
              </p>
              <div>
                <Button
                  onClick={handleToggle}
                  className="rounded-pill mt-3"
                  variant={isActive ? "success" : "secondary"}
                  style={{ width: "60px" }}
                >
                  {isActive ? "Si" : "No"}
                </Button>
              </div>
            </div>
            <p style={{ fontSize: "13px" }} className="ps-3 mt-2 text-secondary">
              * Indica che è obbligatorio
            </p>
            <div className="px-3">
              <Form.Group className="mb-3">
                <Form.Label className="lead fs-6">Ruolo*</Form.Label>
                <Form.Control
                  type="text"
                  name="role"
                  value={currentExperience.role}
                  onChange={handleInputChange}
                  placeholder="Esempio: Manager"
                  style={{ fontSize: "14px" }}
                  required
                />

                <Form.Label className="lead fs-6 mt-2">Azienda*</Form.Label>
                <Form.Control
                  type="text"
                  name="company"
                  placeholder="Esempio: GFT"
                  value={currentExperience.company}
                  onChange={handleInputChange}
                  style={{ fontSize: "14px" }}
                  required
                />

                <Form.Label className="lead fs-6 mt-2">Data di inizio*</Form.Label>
                <Form.Control
                  type="date"
                  name="startDate"
                  value={currentExperience.startDate}
                  onChange={handleInputChange}
                  required
                />

                <Form.Label className="lead fs-6 mt-2">Data di fine (o prevista)</Form.Label>
                <Form.Control
                  type="date"
                  name="endDate"
                  value={currentExperience.endDate}
                  onChange={handleInputChange}
                />

                <Form.Label className="lead fs-6 mt-2">Luogo*</Form.Label>
                <Form.Control
                  type="text"
                  name="area"
                  value={currentExperience.area}
                  onChange={handleInputChange}
                  placeholder="Esempio: Milano"
                  style={{ fontSize: "14px" }}
                  required
                />

                <Form.Label className="lead fs-6 mt-2">Immagine</Form.Label>
                {/*                 
                <input type="file" onChange={handleFileChange} />
                <button onClick={handleUploadImage}>Carica Immagine</button> */}
                <Form.Control
                  type="text"
                  name="image"
                  value={currentExperience.image}
                  onChange={handleInputChange}
                  style={{ fontSize: "14px" }}
                  placeholder="URL dell'immagine"
                />

                <Form.Label className="lead fs-6 mt-2">Descrizione*</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  value={currentExperience.description}
                  onChange={handleInputChange}
                  style={{ fontSize: "14px" }}
                  placeholder="Descrizione delle tue mansioni e competenze acquisite in ambito lavorativo...."
                  required
                />
              </Form.Group>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" className="rounded-5 px-4" onClick={handleAddOrUpdateExperience}>
            Salva
          </Button>
        </Modal.Footer>
      </Modal>
    </Col>
  );
};

export default ExperienceComponent;
