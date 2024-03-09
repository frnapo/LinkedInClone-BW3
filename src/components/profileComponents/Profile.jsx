import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Card, Container, Button, Spinner, Navbar, Nav, Image } from "react-bootstrap";
import "../../assets/style/profile.css";
import ProfileBg from "../../background.jpg";
import Premium from "../../premium.png";
import { Pencil, PersonFillAdd, PencilFill, PlusLg } from "react-bootstrap-icons";
import { fetchProfile } from "../../redux/actions/profileAction";
import { fetchNetwork } from "../../redux/actions/networkAction";
import { fetchUserProfileAsync } from "../../redux/actions/otherUserProfileActions";
/* import { uploadProfilePicture } from "../../redux/actions/imageAction"; */
import FooterProfile from "../FooterProfile";
import SuggestedComponent from "./SuggestedComponent";
import AnalysesComponent from "./AnalysesComponent";
import ResourceComponent from "./ResourceComponent";
import ExperienceComponent from "./ExperienceComponent";
import { Link, useParams } from "react-router-dom";

const getRandomElements = (arr, count) => {
  let shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count);
};

const Profile = () => {
  const [navbarClass, setNavbarClass] = useState("slide-out");

  const { userId } = useParams();
  const dispatch = useDispatch();

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 100) {
      setNavbarClass("slide-in");
    } else {
      setNavbarClass("slide-out");
    }
  };

  useEffect(() => {
    if (!userId || userId === "me") {
      dispatch(fetchProfile());
    } else {
      dispatch(fetchUserProfileAsync(userId));
    }
    window.scrollTo(0, 0);
  }, [userId, dispatch]);

  useEffect(() => {
    dispatch(fetchNetwork());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { profile } = useSelector((state) => state.profile);
  const { network } = useSelector((state) => state.network);
  const userProfile = useSelector((state) => state.otherUserProfile.userProfile);
  const dataToDisplay = userId && userId !== "me" && userProfile ? userProfile : profile;

  const { loading: profileLoading } = useSelector((state) => state.profile);
  const { loading: networkLoading } = useSelector((state) => state.network);

  const displayedNetwork = useMemo(() => getRandomElements(network, 5), [network]);
  const displayedNetwork2 = useMemo(() => getRandomElements(network, 5), [network]);

  if (profileLoading || networkLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  console.log("Aggiornamento Profilo:", profile);
  console.log("Aggiornamento Rete:", network);
  console.log({ userId, profile, userProfile, dataToDisplay });

  /*   const [selectedFile, setSelectedFile] = useState(null);
   */

  /*   const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile && typeof _id === "string") {
      dispatch(uploadProfilePicture(_id, selectedFile));
    } else {
      console.error("Invalid userID or no file selected");
    }
  }; */

  return (
    <>
      <Navbar
        fixed="top"
        bg="light"
        expand="lg"
        className={`secondary-navbar ${navbarClass} shadow border border-0 border-top border-bottom d-none d-lg-block`}
      >
        <Container>
          <Navbar.Brand href="#home">
            <Image src={dataToDisplay.image} roundedCircle style={{ width: "40px", height: "40px" }} />
          </Navbar.Brand>
          <Nav className="me-auto">
            <div className="d-flex flex-column">
              <span style={{ fontWeight: "600" }}>
                {dataToDisplay.name} {dataToDisplay.surname}
              </span>
              <span className="lead" style={{ fontSize: "14px" }}>
                {dataToDisplay.title}
              </span>
            </div>
          </Nav>
          <Nav>
            <Button variant="outline-secondary" className="rounded-5 px-3 py-1 border-2 custom-button-3 mt-2 mt-lg-0">
              Altro
            </Button>

            <Button variant="outline-primary" className="rounded-5 px-3 border-2 py-1  custom-button-2 ms-2">
              Aggiungi sezione del profilo
            </Button>

            <Button className="rounded-5 px-3 border-2 py-1 custom-button-1 ms-2">Disponibile per</Button>
          </Nav>
        </Container>
      </Navbar>
      <Container className="mt-4">
        {/* ROW PRIMA SEZIONE */}
        <Row>
          <Col md={8}>
            <Card className="profile-card">
              <Card.Img variant="top" src={ProfileBg} className="profile-background" />

              <img src={dataToDisplay.image} className="profile-picture" alt="profile-pic" />

              <Card.Body className="mt-5">
                <Card.Title className="fs-4">
                  {dataToDisplay.name} {dataToDisplay.surname}
                </Card.Title>
                <Card.Text className="mb-1">{dataToDisplay.title}</Card.Text>
                <Card.Text className="lead fs-6 mb-1">
                  {dataToDisplay.area} ·{" "}
                  <a className="text-primary fw-bold text-decoration-none custom-link" href="#">
                    Informazioni di contatto
                  </a>
                </Card.Text>
                <a className="text-primary fw-bold text-decoration-none custom-link" href="#">
                  67 collegamenti
                </a>
              </Card.Body>
              <Card.Body className="mb-2 pt-0">
                <Card.Link className="text-primary custom-link" href="#">
                  <Button className="rounded-5 px-3 border-2 py-1 fw-bolder custom-button-1">Disponibile per</Button>
                </Card.Link>
                <Card.Link href="#">
                  <Button variant="outline-primary" className="rounded-5 px-3 border-2 py-1 fw-bolder custom-button-2">
                    Aggiungi sezione del profilo
                  </Button>
                </Card.Link>
                <Card.Link href="#">
                  <Button
                    variant="outline-secondary"
                    className="rounded-5 px-3 py-1 border-2 fw-bolder custom-button-3 mt-2 mt-lg-0"
                  >
                    Altro
                  </Button>
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
          {/*           <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Carica Immagine del Profilo</button>
          </div> */}
          <Col md={4}>
            <Card className="mt-2 mt-md-0">
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <Card.Title className="mb-0">Lingua del profilo</Card.Title>
                  <Pencil className="text-secondary fs-6 mt-1" />
                </div>
                <Card.Text className="lead fs-6">Italiano</Card.Text>
              </Card.Body>
              <Card.Body className=" border-top">
                <div className="d-flex justify-content-between">
                  <Card.Title className="mb-0">Public profile & URL</Card.Title>
                  <Pencil className="text-secondary fs-6 mt-1" />
                </div>
                <Card.Text className="lead fs-6">
                  www.linkedin.com/in/{dataToDisplay.name}-{dataToDisplay.surname}
                </Card.Text>
              </Card.Body>
            </Card>
            <Col md={12} className="mt-2">
              {/* SEZIONE ANNUNCIO VARIABILE */}
              <Card className="pb-2">
                <Card.Body>
                  <Card.Text className="text-center lead" style={{ fontSize: "12px" }}>
                    {dataToDisplay.name}, enjoy 50% off 2 months of Linkedin Premium!
                  </Card.Text>
                  <div className="d-flex">
                    <img
                      src={dataToDisplay.image}
                      alt="profile-pic"
                      className="rounded-5 ms-auto me-3"
                      style={{ width: "60px", height: "60px" }}
                    />
                    <img
                      src={Premium}
                      alt="linkedin-premium"
                      className=" me-auto"
                      style={{ width: "60px", height: "60px" }}
                    />
                  </div>
                  <Card.Text className="text-center lead mt-4 fs-6">Get a boost with this exclusive offer.</Card.Text>
                  <Card.Link href="#">
                    <div className="text-center">
                      <Button
                        variant="outline-primary"
                        className="rounded-5 px-3 border-1 py-1 fw-bolder custom-button-2"
                      >
                        Get 50% today
                      </Button>
                    </div>
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </Col>
        </Row>
        {/* ROW SECONDA SEZIONE */}
        <Row>
          <Col md={8}>
            <SuggestedComponent />
            <AnalysesComponent />
            <ResourceComponent />

            <Col xs={12}>
              <Card className=" mt-2">
                <Card.Body className="pb-0">
                  <div className="d-flex justify-content-between">
                    <Card.Title className="mb-0">
                      Attivitá <Card.Text className="text-primary mt-0 fs-6"> 67 follower </Card.Text>
                    </Card.Title>
                    <Card.Link href="#">
                      <Button variant="outline-primary" className="rounded-5 px-3 border-2 fw-bolder custom-button-2">
                        Crea un post
                      </Button>
                      <PencilFill className="text-secondary ms-4 fs-4" />
                    </Card.Link>
                  </div>

                  <div className="mt-2">
                    <Button variant="success" className="rounded-5 px-3 border-1 fw-bolder py-1 me-2">
                      Post
                    </Button>
                    <Button
                      variant="outline-secondary"
                      className="rounded-5 px-3 border-1 fw-bolder custom-button-3 py-1 me-2"
                    >
                      Commenti
                    </Button>
                    <Button
                      variant="outline-secondary"
                      className="rounded-5 px-3 border-1 fw-bolder custom-button-3 py-1"
                    >
                      Immagini
                    </Button>
                  </div>

                  <Card.Text className="lead mt-4 mb-2" style={{ fontSize: "13px" }}>
                    <b>
                      {dataToDisplay.name} {dataToDisplay.surname}
                    </b>{" "}
                    non ha ancora pubblicato un post ·
                  </Card.Text>
                </Card.Body>
                <Card.Text className="text-center fs-6 fw-bolder text-secondary border-1 border-top py-2 custom-buttons">
                  Mostra tutti i post →
                </Card.Text>
              </Card>
            </Col>

            <ExperienceComponent
              userId={dataToDisplay._id}
              token={
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFlNzY2YzYwMGJlMTAwMTgzYTg2YzciLCJpYXQiOjE3MDU5MzIzOTYsImV4cCI6MTcwNzE0MTk5Nn0._lXDAp9GrSaRCbC4PwGaSAxnfN79__pJeNpk4ERaOD0"
              }
            />

            <Col xs={12}>
              <Card className=" mt-2">
                <Card.Body className="pb-0">
                  <div className="d-flex justify-content-between">
                    <Card.Title className="mb-4">Competenze</Card.Title>
                    <Card.Link href="#">
                      <PlusLg className="text-secondary fs-3" />
                      <PencilFill className="text-secondary ms-4 fs-4" />
                    </Card.Link>
                  </div>
                </Card.Body>
                <Card.Text className="text-center fs-6 fw-bolder text-secondary border-1 border-top py-2 custom-buttons">
                  Mostra tutte le competenze →
                </Card.Text>
              </Card>
            </Col>

            <Col xs={12}>
              <Card className=" mt-2">
                <Card.Body className="pb-0">
                  <Card.Title className="mb-3">Interessi</Card.Title>

                  <Button
                    className="rounded-0 border-2 border-start-0 border-end-0 border-top-0 border-success text-success"
                    variant="outline-light"
                  >
                    Aziende
                  </Button>
                  <Button
                    className="rounded-0 border-2 border-start-0 border-end-0 border-top-0 border-success text-success"
                    variant="outline-light"
                  >
                    Scuole o universitá
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Col>

          <Col md={4}>
            <Col>
              <Card className="pb-0 mt-2">
                <Card.Body>
                  <Card.Title className="fs-6 mb-3">Altri profili consultati</Card.Title>
                  {displayedNetwork.map((suggested, index) => (
                    <React.Fragment key={index}>
                      <div className="d-flex">
                        <div>
                          <img
                            src={suggested.image}
                            alt="profile-pic"
                            className="rounded-5"
                            style={{ width: "60px", height: "60px" }}
                          />
                        </div>

                        <div className="ms-2">
                          <Card.Title className="fs-6 mt-1 mb-1">
                            {suggested.name} {suggested.surname}
                          </Card.Title>
                          <Card.Text>{suggested.title}</Card.Text>
                        </div>
                      </div>
                      <Link to={`/profile/${suggested._id}`} style={{ textDecoration: "none" }}>
                        <div
                          className={`text-center mb-3 mt-3 ${
                            index !== displayedNetwork.length - 1 ? " pb-4 border-bottom" : ""
                          }`}
                        >
                          <Button
                            variant="outline-secondary"
                            className="rounded-5 px-3 border-1 py-1 fw-bolder custom-button-3"
                          >
                            Visualizza Profilo
                          </Button>
                        </div>
                      </Link>
                    </React.Fragment>
                  ))}
                </Card.Body>
                <Card.Text className="text-center fs-6 fw-bolder text-secondary border-1 border-top py-2 custom-buttons ">
                  Mostra tutto
                </Card.Text>
              </Card>
            </Col>

            <Card className="pb-0 mt-2">
              <Card.Body>
                <Card.Title className="fs-6 mb-0">Persone che potresti conoscere</Card.Title>
                <Card.Text className="mb-3 mt-0 lead fs-6">Dal tuo settore</Card.Text>
                {displayedNetwork2.map((suggested, index) => (
                  <React.Fragment key={index}>
                    <div className="d-flex">
                      <div>
                        <img
                          src={suggested.image}
                          alt="profile-pic"
                          className="rounded-5"
                          style={{ width: "60px", height: "60px" }}
                        />
                      </div>

                      <div className="ms-2">
                        <Card.Title className="fs-6 mt-1 mb-1">
                          {suggested.name} {suggested.surname}
                        </Card.Title>
                        <Card.Text>{suggested.title}</Card.Text>
                      </div>
                    </div>
                    <Card.Link href="#">
                      <div
                        className={`text-center mb-3 mt-3 ${
                          index !== displayedNetwork.length - 1 ? " pb-4 border-bottom" : "" // condizione se e' l'ultimo elemento non mette margin bottom
                        }`}
                      >
                        <Button
                          variant="outline-secondary"
                          className="rounded-5 px-3 border-1 py-1 fw-bolder custom-button-3 "
                        >
                          <PersonFillAdd className="mb-1" /> Collegati
                        </Button>
                      </div>
                    </Card.Link>
                  </React.Fragment>
                ))}
              </Card.Body>
              <Card.Text className="text-center fs-6 fw-bolder text-secondary border-1 border-top py-2 custom-buttons ">
                Mostra tutto
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
      <FooterProfile />
    </>
  );
};

export default Profile;
