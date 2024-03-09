import { Col, Card, Badge } from "react-bootstrap";
import { EyeFill, Broadcast, PeopleFill } from "react-bootstrap-icons";

const ResourceComponent = () => {
  return (
    <>
      {" "}
      <Col xs={12}>
        <Card className=" mt-2">
          <Card.Body className="pb-0">
            <Card.Title className="mb-1">Risorse</Card.Title>
            <Card.Text className="lead" style={{ fontSize: "16px" }}>
              <EyeFill className="text-secondary me-2" /> Solo per te
            </Card.Text>
            <Card.Title className="mb-0 fs-6">
              <Broadcast /> Modalità creazione di contenuti{" "}
              <Badge bg="light" className="mb-1 text-secondary">
                No
              </Badge>
            </Card.Title>
            <Card.Text style={{ fontSize: "14px", marginInlineStart: "21px" }} className="pe-5">
              Fatti scoprire, metti in risalto i contenuti sul tuo profilo e accedi agli strumenti di creazione
            </Card.Text>
            <Card.Title className="mb-0 fs-6 border-top pt-3">
              <PeopleFill /> La mia rete
            </Card.Title>
            <Card.Text style={{ fontSize: "14px", marginInlineStart: "21px" }} className="pe-5 pb-4">
              Salva e gestisci i tuoi collegamenti e interessi.
            </Card.Text>
          </Card.Body>
          <Card.Text className="text-center fs-6 fw-bolder text-secondary border-1 border-top py-2 custom-buttons">
            Mostra tutte le risorse (5) →
          </Card.Text>
        </Card>
      </Col>
    </>
  );
};

export default ResourceComponent;
