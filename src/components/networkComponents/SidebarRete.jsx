import { Accordion, Card, Container } from "react-bootstrap";
import { Calendar3, CardList, Hash, PeopleFill, PersonFill, Postcard } from "react-bootstrap-icons";
import SidebarFooter from "../SidebarFooter";

const SidebarRete = () => {
  return (
    <Card className="p-3 sticky-top " style={{ top: "100px", zIndex: "1" }}>
      <h6>Gestisci la tua rete</h6>
      <div className="d-flex opacity-75 ps-3">
        <PeopleFill className="me-2 align-self-center" size={20} />
        <p className="mb-2" style={{ fontSize: "0.8rem" }}>
          Collegamenti
        </p>
      </div>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Body>
          <div className="d-flex opacity-75">
            <PersonFill className="me-2 align-self-center" size={20} />
            <p className="mb-2" style={{ fontSize: "0.8rem" }}>
              Persone che segui e follower
            </p>
          </div>
          <div className="d-flex mb-2 opacity-75">
            <Calendar3 className="me-2 align-self-center" size={20} />
            <p className="pt-3 mb-1" style={{ fontSize: "0.8rem" }}>
              Eventi
            </p>
          </div>
          <div className="d-flex mb-2 opacity-75">
            <CardList className="me-2 align-self-center" size={20} />
            <p className="pt-2 mb-1" style={{ fontSize: "0.8rem" }}>
              Pagine
            </p>
          </div>
          <div className="d-flex opacity-75">
            <Postcard className="me-2 align-self-center" size={20} />
            <p className="pt-2 mb-2" style={{ fontSize: "0.8rem" }}>
              Newsletter
            </p>
          </div>
          <div className="d-flex opacity-75">
            <Hash className="me-2 align-self-center" size={20} />
            <p className="pt-2 mb-1" style={{ fontSize: "0.8rem" }}>
              Hashtag
            </p>
          </div>
        </Accordion.Body>
        <Accordion.Header style={{ backgroundColor: "white" }}>Dettagli</Accordion.Header>
      </Accordion>
      <Container fluid="md" className="text-center">
        <SidebarFooter />
      </Container>
    </Card>
  );
};
export default SidebarRete;
