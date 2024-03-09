import { Container, Row, Col, Form } from "react-bootstrap";
import { Gear, QuestionCircleFill, ShieldShaded } from "react-bootstrap-icons";
import "../assets/style/footerProfile.css";

const Footer = () => {
  return (
    <Container fluid="lg" className="Footer-container">
      <Row className="Footer">
        <Col sm={3} md={2}>
          <Row className="d-flex flex-column text-start">
            <Col>
              <a href="#">Informazioni</a>
            </Col>
            <Col>
              <a href="#">Linee guida della community</a>
            </Col>
            <Col>
              <a href="#">Privacy e condizioni</a>
            </Col>
            <Col>
              <a href="#">Sales Solution</a>
            </Col>
            <Col>
              <a href="#">Centro sicurezza</a>
            </Col>
          </Row>
        </Col>
        <Col sm={3} md={2}>
          <Row className="d-flex flex-column text-start">
            <Col>
              <a href="#">Accessibilita'</a>
            </Col>
            <Col>
              <a href="#">Carriera</a>
            </Col>
            <Col>
              <a href="#">Opzione per gli annunci pubblicitari</a>
            </Col>
            <Col>
              <a href="#">Mobile</a>
            </Col>
          </Row>
        </Col>
        <Col sm={3} md={2}>
          <Row className="d-flex flex-column text-start">
            <Col>
              <a href="#">Talent Solution</a>
            </Col>
            <Col>
              <a href="#">Soluzioni di marketing</a>
            </Col>
            <Col>
              <a href="#">Pubblicita'</a>
            </Col>
            <Col>
              <a href="#">Piccole imprese</a>
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column text-start">
            <Col sm={12} className="d-flex">
              <QuestionCircleFill className="mt-1" />
              <Col className="ms-3">
                <a href="#" style={{ fontWeight: "bold" }}>
                  Domande?
                </a>
                <p>
                  <a href="#">Visita il nostro centro assistenza</a>
                </p>
              </Col>
            </Col>
            <Col sm={12} className="d-flex">
              <Gear className="mt-1" />
              <Col className="ms-3">
                <a href="#" style={{ fontWeight: "bold", verticalAling: "top" }}>
                  Gestisci il tuo Account e la tua privacy
                </a>
                <p>
                  <a href="#">Vai alle impostazioni</a>
                </p>
              </Col>
            </Col>
            <Col sm={12} className="d-flex">
              <ShieldShaded className="mt-1" />
              <Col className="ms-3">
                <a href="#" style={{ fontWeight: "bold" }}>
                  Trasparenza sui contenuti consigliati
                </a>
                <p>
                  <a href="#">Scopri di piu sui contenuti consigliati</a>
                </p>
              </Col>
            </Col>
            <Col sm={12}>
              <Form.Select size="sm" className="Footer-option-sotto">
                <Form.Label>Seleziona lingua</Form.Label>
                <option>Italiano</option>
                <option>Inglese</option>
                <option>Turco</option>
                <option>Napoletano</option>
              </Form.Select>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row>
            <Col>
              <Form.Select size="sm" className="Footer-option-lato">
                <Form.Label>
                  <option>Seleziona lingua</option>
                  <option>Inglese</option>
                  <option>Turco</option>
                  <option>Napoletano</option>
                </Form.Label>
              </Form.Select>
            </Col>
          </Row>
        </Col>
        <p className="Footer-ultimo-p">Linkedln Corporation © 2024</p>
      </Row>
    </Container>
  );
};

export default Footer;
