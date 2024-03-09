import { Col, Container, Row } from "react-bootstrap";
import SidebarRete from "./SidebarRete";
import ReteAmici from "./ReteAmici";
const Rete = () => {
  return (
    <Container fluid="lg" className="mb-5">
      <Row>
        <Col xs={12} md={3}>
          <SidebarRete />
        </Col>
        <Col xs={12} md={9}>
          <ReteAmici />
        </Col>
      </Row>
    </Container>
  );
};
export default Rete;
