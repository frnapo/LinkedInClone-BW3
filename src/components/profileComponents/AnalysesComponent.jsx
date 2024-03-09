import { Col, Row, Card } from "react-bootstrap";
import { PeopleFill, BarChartFill, Search, EyeFill } from "react-bootstrap-icons";

const AnalysesComponent = () => {
  return (
    <>
      <Col xs={12}>
        <Card className=" mt-2">
          <Card.Body className="pb-0">
            <Card.Title className="mb-1">Analisi</Card.Title>
            <Card.Text className="lead" style={{ fontSize: "16px" }}>
              <EyeFill className="text-secondary me-2" /> Solo per te
            </Card.Text>
            <Row className="mb-2">
              <Col xs={12} md={4} className="px-5">
                <Card.Title className="mb-1 fs-6">
                  <PeopleFill className="me-2" />
                  45 visualizzazioni del profilo
                </Card.Title>
                <Card.Text className="mb-1 fs-6"> Scopri chi ha visitato il tuo profilo.</Card.Text>
              </Col>
              <Col xs={12} md={4} className="px-5">
                <Card.Title className="mb-1 fs-6">
                  <BarChartFill className="me-2" />
                  253 impressioni del post
                </Card.Title>
                <Card.Text className="mb-1 fs-6">Scopri chi sta interagendo con i tuoi post.</Card.Text>
              </Col>
              <Col xs={12} md={4} className="px-5">
                <Card.Title className="mb-1 fs-6">
                  <Search className="me-2" />4 comparse nei motori di ricerca
                </Card.Title>
                <Card.Text className="mb-1 fs-6">Vedi quante volte compari nei risultati di ricerca.</Card.Text>
              </Col>
            </Row>
          </Card.Body>
          <Card.Text className="text-center fs-6 fw-bolder text-secondary border-1 border-top py-2 custom-buttons ">
            Mostra tutte le analisi →
          </Card.Text>
        </Card>
      </Col>
    </>
  );
};

export default AnalysesComponent;
