import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../assets/style/notifications.css";
import { TbPointFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import SidebarFooter from "./SidebarFooter";
import Premium from "../premium.png";
import Pietro from "../assets/imgChat/pietro.png";
import GPT from "../assets/imgChat/chat.jpg";
import Chiara from "../assets/imgChat/chiara.png";
import EPICODE from "../assets/imgChat/epicode.jpg";

const Notifications = () => {
  return (
    <Container>
      <Row className="my-3">
        <Col md={4} lg={2} className="d-none d-md-inline small">
          <Card>
            <Card.Body>
              <span>
                <strong>Gestisci le tue notifiche</strong>
              </span>
              <br />
              <a href="/*" className="text-decoration-none">
                <span className="text-primary">Impostazioni</span>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8} lg={6}>
          <Card className="mb-3">
            <Card.Body>
              <Button variant="success" className="fw-bold rounded-5 px-3 py-1 me-2">
                Tutto
              </Button>
              <Button variant="outline-dark" className="fw-bold rounded-5 px-3 py-1 me-2">
                I miei post
              </Button>
              <Button variant="outline-dark" className="fw-bold rounded-5 px-3 py-1 me-2">
                Menzioni
              </Button>
            </Card.Body>
          </Card>
          <Link to="/#" className="pointer text-decoration-none">
            <Card className="pointer p-1" style={{ borderBottom: "0", borderRadius: "10px 10px 0px 0px" }}>
              <Card.Body>
                <Row className="notifications-text d-flex">
                  <Col md={2} className="d-flex align-items-center justify">
                    <TbPointFilled className="text-primary fs-4 me-2" />
                    <img
                      style={{ width: 45 }}
                      src="https://media.licdn.com/dms/image/C4E0BAQEKJx_trpGmZA/company-logo_100_100/0/1656445424051/rai_radiotelevisione_italiana_logo?e=1714003200&v=beta&t=pt4TvEza83mD00W-1Metohv89xRUrRu-H6nJv1EzzXI"
                      alt="rai-logo"
                      className=""
                    />
                  </Col>
                  <Col md={8}>
                    <span>
                      <strong>Rai - Radiotelevisione Italiana</strong> ha pubblicato: "#Sanremo2024, il fiore
                      all'occhiello della musica". ⚡️ La scenografia del Festival di Sanremo 2024, ideata da Gaetano e
                      Maria Chiara Castelli ⤵️
                    </span>
                  </Col>
                  <Col md={2} className="notifications-text2 d-flex flex-column text-center">
                    <span className="mb-4">2 ore</span>
                    <span>
                      <TbPointFilled />
                      <TbPointFilled />
                      <TbPointFilled />
                    </span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/#" className="pointer text-decoration-none">
            <Card className="pointer p-1 rounded-0" style={{ borderBottom: "0", borderTop: "0" }}>
              <Card.Body>
                <Row className="notifications-text d-flex">
                  <Col md={2} className="d-flex align-items-center justify">
                    <TbPointFilled className="text-primary fs-4 me-2" />
                    <img
                      style={{ width: 45 }}
                      src="https://media.licdn.com/dms/image/D4D0BAQFFsh9V8FCeDg/company-logo_100_100/0/1697723369685/ugolize_logo?e=1714608000&v=beta&t=Cng2JT_i_YNNpwli9Fms5MXOLhu7CDPRCzxZ52Qs1YQ"
                      alt="rai-logo"
                      className=""
                    />
                  </Col>
                  <Col md={8}>
                    <span>
                      <strong>Ugolize</strong> ha pubblicato: Già, chissà perchè...
                    </span>
                  </Col>
                  <Col md={2} className="notifications-text2 d-flex flex-column text-center">
                    <span className="mb-4">3 ore</span>
                    <span>
                      <TbPointFilled />
                      <TbPointFilled />
                      <TbPointFilled />
                    </span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/#" className="pointer text-decoration-none">
            <Card className="pointer p-1 rounded-0" style={{ borderBottom: "0", borderTop: "0" }}>
              <Card.Body>
                <Row className="notifications-text d-flex">
                  <Col md={2} className="d-flex align-items-center justify">
                    <TbPointFilled className="text-primary fs-4 me-2" />
                    <img
                      style={{ width: 45 }}
                      src="https://media.licdn.com/dms/image/D4D0BAQH8NQsgszPyBw/company-logo_100_100/0/1697102787071/il_sole_24_ore_logo?e=1714608000&v=beta&t=JO0JESkZ0i1TApuH9fKMAb0mS3R1Pl6mFcSaJJD6AZw"
                      alt="rai-logo"
                      className=""
                    />
                  </Col>
                  <Col md={8}>
                    <span>
                      Scopri di più su
                      <strong> Il Sole 24 Ore </strong>e trova altre pagine potresti voler seguire.
                    </span>
                  </Col>
                  <Col md={2} className="notifications-text2 d-flex flex-column text-center">
                    <span className="mb-4">4 ore</span>
                    <span>
                      <TbPointFilled />
                      <TbPointFilled />
                      <TbPointFilled />
                    </span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/#" className="pointer text-decoration-none">
            <Card className="pointer p-1 rounded-0" style={{ borderBottom: "0", borderTop: "0" }}>
              <Card.Body>
                <Row className="notifications-text d-flex">
                  <Col md={2} className="d-flex align-items-center justify">
                    <TbPointFilled className="text-primary fs-4 me-2" />
                    <img
                      style={{ width: 45 }}
                      src="https://media.licdn.com/media/AAYQAgQdAAgAAQAAAAAAAD8nF1XzP1fQRySb7IiB9vr30w.png"
                      alt="rai-logo"
                      className=""
                    />
                  </Col>
                  <Col md={8}>
                    <span>Te lo ricordi il fax? Una riflessione (e qualche aneddoto) a tema nostalgia.</span>
                  </Col>
                  <Col md={2} className="notifications-text2 d-flex flex-column text-center">
                    <span className="mb-4">5 ore</span>
                    <span>
                      <TbPointFilled />
                      <TbPointFilled />
                      <TbPointFilled />
                    </span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/#" className="pointer text-decoration-none">
            <Card className="pointer p-1 rounded-0" style={{ borderBottom: "0", borderTop: "0" }}>
              <Card.Body>
                <Row className="notifications-text d-flex">
                  <Col md={2} className="d-flex align-items-center justify">
                    <TbPointFilled className="text-primary fs-4 me-2" />
                    <img
                      style={{ width: 45 }}
                      src="https://media.licdn.com/media/AAYQAgQJAAgAAQAAAAAAADpE-0rwmIkXT1-0pSjWntciJA.png"
                      alt="rai-logo"
                      className=""
                    />
                  </Col>
                  <Col md={8}>
                    <span>3 aspetti da considerare quando cerchiamo di resistere al cambiamento.</span>
                  </Col>
                  <Col md={2} className="notifications-text2 d-flex flex-column text-center">
                    <span className="mb-4">5 ore</span>
                    <span>
                      <TbPointFilled />
                      <TbPointFilled />
                      <TbPointFilled />
                    </span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/#" className="pointer text-decoration-none">
            <Card className="pointer p-1 rounded-0" style={{ borderBottom: "0", borderTop: "0" }}>
              <Card.Body>
                <Row className="notifications-text d-flex">
                  <Col md={2} className="d-flex align-items-center justify">
                    <TbPointFilled className="text-primary fs-4 me-2" />
                    <img style={{ width: 45, height: 45 }} src={Pietro} alt="logo" className="rounded-5" />
                  </Col>
                  <Col md={8}>
                    <span>
                      <strong>Pietro Semerano</strong> ha visitato il tuo profilo. Vedi tutti i visitatori.
                    </span>
                  </Col>
                  <Col md={2} className="notifications-text2 d-flex flex-column text-center">
                    <span className="mb-4">12 ore</span>
                    <span>
                      <TbPointFilled />
                      <TbPointFilled />
                      <TbPointFilled />
                    </span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/#" className="pointer text-decoration-none">
            <Card className="pointer p-1 rounded-0" style={{ borderBottom: "0", borderTop: "0" }}>
              <Card.Body>
                <Row className="notifications-text d-flex">
                  <Col md={2} className="d-flex align-items-center justify">
                    <TbPointFilled className="text-primary fs-4 me-2" />
                    <img style={{ width: 45, height: 45 }} src={GPT} alt="logo" className="rounded-5" />
                  </Col>
                  <Col md={8}>
                    <span>
                      <strong>Chat GPT</strong> ha visitato il tuo profilo. Vedi tutti i visitatori.
                    </span>
                  </Col>
                  <Col md={2} className="notifications-text2 d-flex flex-column text-center">
                    <span className="mb-4">12 ore</span>
                    <span>
                      <TbPointFilled />
                      <TbPointFilled />
                      <TbPointFilled />
                    </span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/#" className="pointer text-decoration-none">
            <Card className="pointer p-1 rounded-0" style={{ borderBottom: "0", borderTop: "0" }}>
              <Card.Body>
                <Row className="notifications-text d-flex">
                  <Col md={2} className="d-flex align-items-center justify">
                    <TbPointFilled className="text-primary fs-4 me-2" />
                    <img style={{ width: 45, height: 45 }} src={Chiara} alt="logo" className="rounded-5" />
                  </Col>
                  <Col md={8}>
                    <span>
                      <strong>Chiara Presaghi</strong> ha visitato il tuo profilo. Vedi tutti i visitatori.
                    </span>
                  </Col>
                  <Col md={2} className="notifications-text2 d-flex flex-column text-center">
                    <span className="mb-4">15 ore</span>
                    <span>
                      <TbPointFilled />
                      <TbPointFilled />
                      <TbPointFilled />
                    </span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Link>
          <Link to="/#" className="pointer text-decoration-none">
            <Card className="pointer p-1 rounded-0" style={{ borderBottom: "0", borderTop: "0" }}>
              <Card.Body>
                <Row className="notifications-text d-flex">
                  <Col md={2} className="d-flex align-items-center justify">
                    <TbPointFilled className="text-primary fs-4 me-2" />
                    <img
                      style={{ width: 45 }}
                      src="https://media.licdn.com/media/AAYQAgQJAAgAAQAAAAAAADpE-0rwmIkXT1-0pSjWntciJA.png"
                      alt="logo"
                    />
                  </Col>
                  <Col md={8}>
                    <span>LAVORO: Crescere è anche questione di visibilità. Qualche consiglio per curarla.</span>
                  </Col>
                  <Col md={2} className="notifications-text2 d-flex flex-column text-center">
                    <span className="mb-4">19 ore</span>
                    <span>
                      <TbPointFilled />
                      <TbPointFilled />
                      <TbPointFilled />
                    </span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Link>

          <Link to="/#" className="pointer text-decoration-none">
            <Card className="pointer p-1" style={{ borderTop: "0", borderRadius: "0px 0px 10px 10px" }}>
              <Card.Body>
                <Row className="notifications-text d-flex">
                  <Col md={2} className="d-flex align-items-center justify">
                    <TbPointFilled className="text-white fs-4 me-2" />
                    <img
                      style={{ width: 45 }}
                      src="https://media.licdn.com/dms/image/C4E0BAQEKJx_trpGmZA/company-logo_100_100/0/1656445424051/rai_radiotelevisione_italiana_logo?e=1714003200&v=beta&t=pt4TvEza83mD00W-1Metohv89xRUrRu-H6nJv1EzzXI"
                      alt="rai-logo"
                      className=""
                    />
                  </Col>
                  <Col md={8}>
                    <span>
                      Post di tendenza di
                      <strong> Rai - Radiotelevisione Italiana: </strong>100 anni della radio, 70 anni della
                      televisione. I nuovi loghi #Rai per festeggiare gli anniversari del 2024 👇
                    </span>
                  </Col>
                  <Col md={2} className="notifications-text2 d-flex flex-column text-center">
                    <span className="mb-4">2 giorni</span>
                    <span>
                      <TbPointFilled />
                      <TbPointFilled />
                      <TbPointFilled />
                    </span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col md={4} className="d-none d-md-block">
          <Card className="pb-2">
            <Card.Body>
              <Card.Text className="text-center lead" style={{ fontSize: "12px" }}>
                Enjoy 50% off 2 months of Linkedin Premium!
              </Card.Text>
              <div className="d-flex justify-content-center">
                <img src={Premium} alt="linkedin-premium" style={{ width: "60px" }} />
              </div>
              <Card.Text className="text-center lead mt-4 fs-6">Get a boost with this exclusive offer.</Card.Text>
              <Card.Link href="#">
                <div className="text-center">
                  <Button variant="outline-primary" className="rounded-5 px-3 border-1 py-1 fw-bolder custom-button-2">
                    Get 50% today
                  </Button>
                </div>
              </Card.Link>
            </Card.Body>
          </Card>
          <Col xs={12}>
            <SidebarFooter />
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Notifications;
