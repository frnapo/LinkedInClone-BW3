import {
  Container,
  Form,
  Nav,
  Navbar,
  Dropdown,
  Button,
  Offcanvas,
  Card,
  Row,
  Col,
  InputGroup,
  Badge,
} from "react-bootstrap/";
import { FaLinkedin } from "react-icons/fa";
import { IoSearchSharp, IoHomeSharp, IoNotifications } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { FaUserGroup, FaDiamond } from "react-icons/fa6";
import { TiMessageTyping } from "react-icons/ti";
import { BiSolidGrid } from "react-icons/bi";
import "../assets/style/navbar.css";
import { GoTriangleDown } from "react-icons/go";
import { useState, useEffect } from "react";
import { GoVideo } from "react-icons/go";
import { CgInsights } from "react-icons/cg";
import { MdBusinessCenter } from "react-icons/md";
import { GiTwirlCenter } from "react-icons/gi";
import { FaSafari } from "react-icons/fa";
import { TiGroup } from "react-icons/ti";
import { TiTick } from "react-icons/ti";
import { IoLocationSharp } from "react-icons/io5";
import { NavLink, Link, useLocation } from "react-router-dom";
import { fetchProfile } from "../redux/actions/profileAction";
import { useDispatch, useSelector } from "react-redux";

function MyNav() {
  const [show, setShow] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { profile } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProfile());
  }, []);

  const location = useLocation();
  const isWorkPage = location.pathname === "/work";

  const handleToggle = (component) => {
    if (component === "search") {
      setShowSearch(!showSearch);
    } else if (component === "offcanvas") {
      setShow(!show);
    }
  };

  const [showCanvas, setShowCanvas] = useState(false);

  const handleCanvasToggle = () => {
    setShowCanvas(!showCanvas);
  };

  return (
    <Navbar sticky="top" className="bg-white d-flex justify-content-center shadow-sm nopadding">
      <Container className="d-flex justify-content-center">
        <div className="d-flex justify-content-center me-auto">
          <FaLinkedin className="linkedin-icon fs-1" />

          <Form className="search d-none d-lg-flex rounded ms-2">
            <InputGroup>
              <InputGroup.Text id="search-icon" className="bg-transparent border-0">
                <IoSearchSharp className="fs-5 ms-2" />
              </InputGroup.Text>

              <Form.Control
                type="search"
                placeholder={isWorkPage ? "Cerca per qualifica, competenza o azienda" : "Cerca"}
                className="bg-transparent border-0 me-2"
                aria-label="Cerca"
                aria-describedby="search-icon"
                onClick={handleCanvasToggle}
              />
            </InputGroup>
            <Offcanvas className="offcanvas-search" show={showCanvas} onHide={handleCanvasToggle} placement="top">
              {/* Contenuto del canvas */}
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Risultati ricerca:</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>{/* Contenuto del Canvas */}</Offcanvas.Body>
            </Offcanvas>
          </Form>
          {isWorkPage && (
            <Form className="search d-none d-xl-flex rounded ms-2">
              <InputGroup>
                <InputGroup.Text id="search-icon" className="bg-transparent border-0">
                  <IoLocationSharp className="fs-5 ms-2" />
                </InputGroup.Text>

                <Form.Control
                  type="search"
                  placeholder="Città, stato o CAP"
                  className="bg-transparent border-0 me-2"
                  aria-label="Cerca"
                  aria-describedby="search-icon"
                  onClick={handleCanvasToggle}
                />
              </InputGroup>
              <Offcanvas className="offcanvas-search" show={showCanvas} onHide={handleCanvasToggle} placement="top">
                {/* Contenuto del canvas */}
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Risultati ricerca:</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>{/* Contenuto del Canvas */}</Offcanvas.Body>
              </Offcanvas>
            </Form>
          )}
          <Button variant="transparent" className="d-flex d-lg-none flex-column align-items-center py-0">
            <IoSearchSharp className="fs-5" />
            <span className="d-none d-md-flex nav-tab">Cerca</span>
          </Button>
        </div>

        <Nav className="d-flex my-2 my-lg-0 p-0" variant="underline">
          <NavLink to="/" className="d-flex flex-column align-items-center py-1 nav-link">
            <IoHomeSharp className="fs-4 mt-1" />
            <span className="d-none d-md-flex nav-tab">Home</span>
          </NavLink>
          <NavLink to="/network" className="d-flex flex-column align-items-center py-1 nav-link">
            <FaUserGroup className="fs-4 mt-1" />
            <span className="d-none d-md-flex nav-tab">Rete</span>
          </NavLink>
          <NavLink to="/work" className="d-flex flex-column align-items-center py-1 nav-link">
            <MdWork className="fs-4 mt-1" />
            <span className="d-none d-md-flex nav-tab">Lavoro</span>
          </NavLink>
          <NavLink to="/messaggistica" className="d-flex flex-column align-items-center py-1 nav-link">
            <TiMessageTyping className="fs-4 mt-1" />
            <span className="d-none d-md-flex nav-tab">Messaggistica</span>
          </NavLink>
          <NavLink
            to="/notifications"
            className="d-flex flex-column align-items-center py-1 nav-link position-relative"
          >
            <IoNotifications className="fs-4 mt-1" />
            <Badge
              bg="danger"
              className="position-absolute top-0 start-50 translate rounded-4"
              style={{ zIndex: 1, fontSize: "10px", padding: "4px" }}
            >
              10+
            </Badge>
            <span className="d-none d-md-flex nav-tab">Notifiche</span>
          </NavLink>

          <Nav.Link to="/*" className=" py-1">
            <Dropdown>
              <Dropdown.Toggle className="custom-color border-0 py-0" variant="transparent" id="dropdown-basic">
                <img src={profile.image} className="d-flex mt-1 rounded-circle" width={20} height={20} />
                <span className="d-none d-md-inline-flex nav-tab ">Tu</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#action6">
                  <img src={profile.image} className="m-2 rounded-circle" width={50} height={50} />
                  <strong>
                    {profile.name} {profile.surname}
                  </strong>
                </Dropdown.Item>
                <div className="text-center">
                  <Link to={`/profile/me`}>
                    <Button variant="outline-primary" className="rounded-5 py-0 px-5">
                      Visualizza Profilo
                    </Button>
                  </Link>
                </div>
                <Dropdown.Divider />
                <Dropdown.Item href="#action7">
                  <strong>Account</strong>
                </Dropdown.Item>
                <Dropdown.Item href="#action8">Gestisci</Dropdown.Item>
                <Dropdown.Item href="#action9">
                  <FaDiamond className="me-2" />
                  Prova Premium gratis
                </Dropdown.Item>
                <Dropdown.Item href="#action10">Guida</Dropdown.Item>
                <Dropdown.Item href="#action11">Lingua</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#action12">
                  <strong>Gestisci</strong>
                </Dropdown.Item>
                <Dropdown.Item href="#action13">Post e attività</Dropdown.Item>
                <Dropdown.Item href="#action14">Account per la pubblicazione</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#action15">Esci</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Link>

          <Nav.Link href="#" className="d-flex flex-column align-items-center border-start py-1">
            <Button variant="transparent" onClick={() => handleToggle("offcanvas")} className="py-0">
              <BiSolidGrid className="fs-4" />
              <span className="d-none d-md-flex  nav-tab">
                Per le aziende <GoTriangleDown />
              </span>
            </Button>
            <Offcanvas
              show={show}
              onHide={() => handleToggle("offcanvas")}
              placement="end"
              className="offcanvas rounded-3"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <strong>Per le aziende</strong>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Card border="secondary" className="w-100">
                  <Card.Header>
                    <strong>Scopri altri prodotti LinkedIn</strong>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <Row md={4} className="g-2">
                        <Col>
                          <Button variant="transparent" className="d-flex flex-column align-items-center p-1">
                            <GoVideo className="linkedin-icon border rounded-2 fs-1 p-2" />
                            <span className="font-aziende">Learning</span>
                          </Button>
                        </Col>
                        <Col>
                          <Button variant="transparent" className="d-flex flex-column align-items-center p-1">
                            <CgInsights className="linkedin-icon border rounded-2 fs-1 p-2" />
                            <span className="font-aziende">Talent Insights</span>
                          </Button>
                        </Col>
                        <Col>
                          <Button variant="transparent" className="d-flex flex-column align-items-center p-1">
                            <MdBusinessCenter className="linkedin-icon border rounded-2 fs-1 p-2" />
                            <span className="font-aziende">Pubblica un'offerta di lavoro</span>
                          </Button>
                        </Col>
                        <Col>
                          <Button variant="transparent" className="d-flex flex-column align-items-center p-1">
                            <GiTwirlCenter className="linkedin-icon border rounded-2 fs-1 p-2" />
                            <span className="font-aziende">Pubblicizza</span>
                          </Button>
                        </Col>
                        <Col>
                          <Button variant="transparent" className="d-flex flex-column align-items-center p-1">
                            <FaSafari className="linkedin-icon border rounded-2 fs-1 p-2" />
                            <span className="font-aziende">Trova lead</span>
                          </Button>
                        </Col>
                        <Col>
                          <Button variant="transparent" className="d-flex flex-column align-items-center p-1">
                            <TiGroup className="linkedin-icon border rounded-2 fs-1 p-2" />
                            <span className="font-aziende">Gruppi</span>
                          </Button>
                        </Col>
                        <Col>
                          <Button variant="transparent" className="d-flex flex-column align-items-center p-1">
                            <TiTick className="linkedin-icon border rounded-2 fs-1 p-2" />
                            <span className="font-aziende">Marketplace dei servizi</span>
                          </Button>
                        </Col>
                      </Row>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card border="secondary" className="w-100">
                  <Card.Header>
                    <strong>Scopri altro per il business</strong>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title>
                      <a href="/*" className="a-custom">
                        Assumi su LinkeIn
                      </a>
                    </Card.Title>
                    <Card.Text>
                      <a href="/*" className="a-custom">
                        Trova, attrai e assumi
                      </a>
                    </Card.Text>
                    <Card.Title>
                      <a href="/*" className="a-custom">
                        Vendi con LinkedIn
                      </a>
                    </Card.Title>
                    <Card.Text>
                      <a href="/*" className="a-custom">
                        Sblocca nuove opportunità di vendita
                      </a>
                    </Card.Text>
                    <Card.Title>
                      <a href="/*" className="a-custom">
                        Offerta di lavoro gratuita
                      </a>
                    </Card.Title>
                    <Card.Text>
                      <a href="/*" className="a-custom">
                        Ottieni rapidamente candidati qualiticati
                      </a>
                    </Card.Text>
                    <Card.Title>
                      <a href="/*" className="a-custom">
                        Fai Pubblicità su LinkeIn
                      </a>
                    </Card.Title>
                    <Card.Text>
                      <a href="/*" className="a-custom">
                        Acquisisci clienti e fai crescere la tua azienda
                      </a>
                    </Card.Text>
                    <Card.Title>
                      <a href="/*" className="a-custom">
                        Impara con LinkedIn
                      </a>
                    </Card.Title>
                    <Card.Text>
                      <a href="/*" className="a-custom">
                        Corsi per formare i tuoi dipendenti
                      </a>
                    </Card.Text>
                    <Card.Title>
                      <a href="/*" className="a-custom">
                        Centro amministrazione
                      </a>
                    </Card.Title>
                    <Card.Text>
                      <a href="/*" className="a-custom">
                        Gestisci i dettagli di fatturazione e account
                      </a>
                    </Card.Text>
                  </Card.Body>
                  <Card.Header>
                    <a href="/*" className="a-custom">
                      <strong>Crea una pagina aziendale + </strong>
                    </a>
                  </Card.Header>
                </Card>
              </Offcanvas.Body>
            </Offcanvas>
          </Nav.Link>
          {isWorkPage ? null : (
            <>
              <a href="/*" className="d-none d-xl-inline text-center premium">
                Una rete più smart? <br />
                Prova Premium <br />
                gratuitamente
              </a>

              <a href="/*" className="d-none d-md-inline d-xl-none text-center premium">
                Prova Premium
              </a>
            </>
          )}
          {isWorkPage && (
            <a href="/*" className="d-none d-md-inline text-center premium">
              Prova Premium
            </a>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNav;
