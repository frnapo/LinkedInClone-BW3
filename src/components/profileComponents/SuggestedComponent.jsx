import { Card, ProgressBar, Button } from "react-bootstrap";
import { EyeFill } from "react-bootstrap-icons";

const SuggestedComponent = () => {
  return (
    <>
      <Card className="pb-2 mt-2 mt-md-0 mt-xl-2" style={{ marginTop: "-7px" }}>
        <Card.Body>
          <Card.Title className="mb-1">Consigliato per te</Card.Title>
          <Card.Text className="lead" style={{ fontSize: "16px" }}>
            <EyeFill className="text-secondary me-2" /> Solo per te
          </Card.Text>
          <h6>Intermedio</h6>
          <ProgressBar now={80} variant="secondary" style={{ height: "8px" }} />
          <Card.Text className="mt-2 fs-6">
            Completa 1 passaggio per raggiungere il livello{" "}
            <a className="text-primary fw-bold text-decoration-none custom-link" href="#">
              Massimo
            </a>
          </Card.Text>
          <div className="border border-1 rounded-3 bg-light">
            <Card.Title className="m-3 mb-2">
              Scrivi un riepilogo per mettere in evidenza la tua personalità o la tua esperienza lavorativa
            </Card.Title>
            <Card.Text className="m-3 mt-2 mb-2" style={{ fontSize: "14px" }}>
              Gli utenti che includono un riepilogo ricevono fino a 3,9 volte più visualizzazioni del profilo.
            </Card.Text>
            <Card.Link href="#">
              <Button
                variant="outline-secondary"
                className="rounded-5 px-3 border-2 py-1 fw-bolder custom-button-3 m-3 mt-2"
              >
                Aggiungi un riepilogo
              </Button>
            </Card.Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default SuggestedComponent;
