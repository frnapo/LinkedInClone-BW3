import { Container, Row, Col, Card, ListGroup, Button, InputGroup, FormControl } from "react-bootstrap";
import { useState } from "react";
import "../assets/style/messaggistica.css";
import Premium from "../premium.png";
import SidebarFooter from "./SidebarFooter";
import Pietro from "../assets/imgChat/pietro.png";
import GPT from "../assets/imgChat/chat.jpg";
import Chiara from "../assets/imgChat/chiara.png";
import EPICODE from "../assets/imgChat/epicode.jpg";
import {
  ThreeDots,
  PencilSquare,
  Search,
  SortDown,
  CameraVideoFill,
  StarFill,
  CardImage,
  EmojiSmile,
  FiletypeGif,
  Paperclip,
} from "react-bootstrap-icons";

const MessaggisticaComponent = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    { id: 1, name: "Pietro Semerano", profileImage: Pietro },
    { id: 2, name: "ChatGPT", profileImage: GPT },
    { id: 3, name: "Chiara Presaghi", profileImage: Chiara },
    { id: 4, name: "Server EPICODE", profileImage: EPICODE },
  ];

  const messages = {
    1: [
      { text: "Ciao! Sei riuscito a chiudere il tag <p> nell'esercizio html di oggi?", isOurMessage: false },
      {
        text: "Ciao Pietro, si' basta aggiungere una / prima della p, se non ti e' chiaro puoi sempre riguardarti la lezione di oggi",
        isOurMessage: true,
      },
      {
        text: "COME TI PERMETTI? NON MI E' CHIARO? SONO ABITUATO A PRIMEGGIARE! NON HO TEMPO PER LA LEZIONE! HO MOGLIE E GIARDINO!",
        isOurMessage: false,
      },
      {
        text: "Ciao hai finito il corso?",
        isOurMessage: false,
      },
      {
        text: "Ciao come stai",
        isOurMessage: false,
      },
      {
        text: "Ciao hai finito il corso? Vuoi venire a lavorare per me?",
        isOurMessage: false,
      },
      {
        text: "Ciao il corso e' finito? Vuoi aiutarmi a sviluppare un Poker virtuale?",
        isOurMessage: false,
      },
      {
        text: "Ciao come va'?",
        isOurMessage: false,
      },
    ],
    2: [
      { text: "ma il tag textarea ha un'azione di default?", isOurMessage: true },
      {
        text: "Il tag <textarea> in HTML e' utilizzato per creare un campo di testo multi-linea all'interno  di modulo di modulo di modulo di modulo di modulo di modulo di modulo di modulo di modulo di di modulo di di modulo di di modulo di......",
        isOurMessage: false,
      },
      { text: "? nn h cpt", isOurMessage: true },
    ],
    3: [
      {
        text: "GUEST LECTURE! È con grande entusiasmo che vi invitiamo alla Guest Lecture di questo fantastico giovedì 25 gennaio, dalle 15:30 alle 16:30, saremo onorati di avere come ospite un ospite, esperto di qualcosa. Questo appuntamento sarà un'occasione unica per immergersi nel mondo dell'innovazione da una prospettiva privilegiata.",
        isOurMessage: false,
      },
      { text: "C'e' la build week questa settimana... :'(", isOurMessage: true },
    ],
    4: [
      { text: "POST!", isOurMessage: true },
      {
        text: "Access to fetch at 'https://striveschool-api.herokuapp.com/api/profile/65ae766c600be100183a86c7/picture' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.",
        isOurMessage: false,
      },
      { text: "PUT...", isOurMessage: true },
      { text: "ERR_FAILED 503 (Service Unavailable)", isOurMessage: false },
      { text: "GET?", isOurMessage: true },
      { text: "ERR_FAILED 429 “Too Many Requests”", isOurMessage: false },
      { text: "......", isOurMessage: true },
      { text: "ERR_FAILED 404 NOT FOUND!", isOurMessage: false },
    ],
  };

  const handleUserClick = (userId) => {
    setSelectedUser(userId);
  };

  const getLastMessagePreview = (userId) => {
    const lastMessage = messages[userId][messages[userId].length - 1];
    return lastMessage.isOurMessage
      ? `Tu: ${lastMessage.text}`
      : `${users.find((u) => u.id === userId).name.split(" ")[0]}: ${lastMessage.text}`;
  };

  return (
    <Container>
      <Row>
        <Col xs={12} md={8}>
          <Card className="mt-3" style={{ height: "90vh" }}>
            <Card.Body className="ps-2 pt-0">
              <Row>
                <Col xs={12} lg={5} className="ps-1 border border-0 border-end pe-0" style={{ height: "90vh" }}>
                  <div className=" d-flex justify-content-between border-0 border-bottom pt-1">
                    <Card.Title className="bg-transparent p-0 m-0 ps-2" style={{ fontWeight: "600" }}>
                      <p className="p-0 m-0 mt-2 custom-text fs-6 ms-2 ">Messaggistica</p>
                    </Card.Title>
                    <div className="mb-2">
                      <Button className="rounded-circle border-0" variant="outline-secondary">
                        <ThreeDots className="mb-1" />
                      </Button>
                      <Button className="rounded-circle ms-2 border-0" variant="outline-secondary">
                        <PencilSquare className="mb-1" />
                      </Button>
                    </div>
                  </div>

                  <InputGroup className="p-2">
                    <InputGroup.Text className="border-0" style={{ backgroundColor: "#EDF3F7" }}>
                      <Search style={{ backgroundColor: "#EDF3F7" }} />
                    </InputGroup.Text>
                    <FormControl
                      placeholder="Cerca messaggi"
                      aria-label="Cerca"
                      aria-describedby="basic-addon1"
                      className="border-0"
                      style={{ backgroundColor: "#EDF3F7" }}
                    />
                    <InputGroup.Text className="border-0" style={{ backgroundColor: "#EDF3F7" }}>
                      <SortDown style={{ backgroundColor: "#EDF3F7" }} />
                    </InputGroup.Text>
                  </InputGroup>

                  <ListGroup className="border-0 rounded-0">
                    {users.map((user) => (
                      <ListGroup.Item
                        key={user.id}
                        className="border-0 border-bottom d-flex justify-content-between align-items-center"
                        active={selectedUser === user.id}
                        onClick={() => handleUserClick(user.id)}
                        action
                      >
                        <div className="d-flex align-items-center">
                          <img
                            src={user.profileImage}
                            alt={user.name}
                            style={{ width: "60px", height: "60px", borderRadius: "50%", marginRight: "10px" }}
                          />
                          <div className="mb-1">
                            {user.name}

                            <div className="text-muted text-truncate" style={{ maxWidth: "150px" }}>
                              {getLastMessagePreview(user.id)}
                            </div>
                          </div>
                        </div>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Col>
                <Col xs={12} lg={7}>
                  {selectedUser && messages[selectedUser] ? (
                    <div>
                      <div className="d-flex justify-content-between">
                        <h5 className="my-2 fs-6">{users.find((u) => u.id === selectedUser)?.name}</h5>
                        <div>
                          <ThreeDots className="fs-4 me-3 mt-2 text-secondary" style={{ cursor: "pointer" }} />
                          <CameraVideoFill className="fs-5 me-3 mt-2 text-secondary" style={{ cursor: "pointer" }} />
                          <StarFill className="fs-5 mt-1 text-secondary" style={{ cursor: "pointer" }} />
                        </div>
                      </div>
                      <div>
                        {messages[selectedUser].map((message, index) => (
                          <div
                            key={index}
                            className={`p-2 my-1 rounded ${
                              message.isOurMessage ? "bg-primary text-white ml-auto" : "bg-light"
                            }`}
                            style={{ maxWidth: "75%", clear: "both", float: message.isOurMessage ? "right" : "left" }}
                          >
                            {message.text}
                          </div>
                        ))}
                      </div>
                      <Col xs={12}>
                        <div className="border-0 border-top">
                          <InputGroup>
                            <FormControl
                              as="textarea"
                              placeholder="Scrivi un messaggio..."
                              className="border-0 mt-5 p-3"
                              style={{ backgroundColor: "#F4F2EE", borderTop: "1px solid #EDF3F7" }}
                            />
                          </InputGroup>
                        </div>
                        <div className="d-flex justify-content-between border-0 border-top mt-3">
                          <div className="mt-3">
                            <CardImage className="fs-4 me-3" style={{ cursor: "pointer", color: "#5E5E5E" }} />
                            <Paperclip className="fs-4 me-3" style={{ cursor: "pointer", color: "#5E5E5E" }} />
                            <FiletypeGif className="fs-4 me-3" style={{ cursor: "pointer", color: "#5E5E5E" }} />
                            <EmojiSmile
                              className="text-secondary fs-4"
                              style={{ cursor: "pointer", color: "#5E5E5E" }}
                            />
                          </div>
                          <div className="mt-3">
                            <Button variant="secondary" className="rounded-5 p-0 px-3" style={{ fontSize: "14px" }}>
                              Invia
                            </Button>
                            <ThreeDots className="fs-4 ms-2" style={{ cursor: "pointer", color: "#5E5E5E" }} />
                          </div>
                        </div>
                      </Col>
                    </div>
                  ) : (
                    <p className="mt-4 lead p-5 text-center">Seleziona un utente per visualizzare i messaggi.</p>
                  )}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        {/*  */}

        <Col md={4} className="d-none d-md-block">
          <Card className="pb-2 mt-3">
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

export default MessaggisticaComponent;
