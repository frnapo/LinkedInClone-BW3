import { Col, Image, Row, Button } from "react-bootstrap";
import { PlusLg, Trash, PencilFill, DashLg } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { addFriendAction, deleteFriendAction } from "../../redux/actions/friendListAction";
import { HandThumbsUp, ChatDots, ArrowRepeat, Send } from "react-bootstrap-icons";

const SinglePost = ({
  elem,
  cancella,
  profile,
  handleShow,
  handleClose,
  show,
  setPostText,
  setModifica,
  setIdPost,
}) => {
  const { list = [] } = useSelector((state) => state.friendList);
  const dispatch = useDispatch();
  const calcolaData = () => {
    const createdate = new Date(elem.createdAt);
    const createMin = createdate.getMinutes();
    const createOre = createdate.getHours();
    const createGiorni = createdate.getDay();
    const createMesi = createdate.getMonth();
    const createAnno = createdate.getFullYear();
    const actualedate = new Date();
    const actualeMin = actualedate.getMinutes();
    const actualeOre = actualedate.getHours();
    const actualeGiorni = actualedate.getDay();
    const actualeMesi = actualedate.getMonth();
    const actualeAnno = actualedate.getFullYear();

    if (actualeAnno === createAnno) {
      if (actualeMesi === createMesi) {
        if (actualeGiorni === createGiorni) {
          if (actualeOre === createOre) {
            if (actualeMin === createMin) {
              return "adesso";
            } else return `${actualeMin - createMin} ${actualeMin - createMin === 1 ? "minuto fa" : "minuti fa"}`;
          } else return `${actualeOre - createOre} ${actualeOre - createOre === 1 ? "ora fa" : "ore fa"}`;
        } else
          return `${actualeGiorni - createGiorni} ${actualeGiorni - createGiorni === 1 ? "giorno fa" : "giorni fa"}`;
      } else return `${actualeMesi - createMesi} ${actualeMesi - createMesi === 1 ? "mese fa" : "mesi fa"}`;
    } else return `${actualeAnno - createAnno} ${actualeAnno - createAnno === 1 ? "anno fa" : "anni fa"}`;
  };
  return (
    elem &&
    profile && (
      <div className="border border-1 rounded-3 shadow-sm my-3 p-3 pb-0 bg-light">
        <Row className=" justify-content-between mb-2">
          <Col xs={2} className="pe-0">
            <Image
              src={elem ? elem.user.image : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"}
              alt="profileImg"
              roundedCircle
              style={{ objectFit: "cover", width: "60px", height: "60px" }}
            />
          </Col>
          <Col xs={6} className=" order-5 order-sm-0 p-0 ms-4">
            <div className="d-flex flex-column">
              <h6>
                {elem.user.name} {elem.user.surname}
              </h6>
              <p className="w-100 mb-0" style={{ fontSize: "14px" }}>
                {elem.user.title}
              </p>
              <p style={{ fontWeight: "300", fontSize: "12px" }}> {calcolaData()}</p>
            </div>
          </Col>
          <Col xs={3} className="text-primary text-end ">
            {profile._id !== elem.user._id &&
              (list.find((x) => x._id === elem.user._id) ? (
                <>
                  <div className="d-flex">
                    <Button
                      variant="outline-primary"
                      className="d-flex border-0"
                      style={{ fontSize: "13px" }}
                      onClick={() => {
                        dispatch(deleteFriendAction(elem.user));
                      }}
                    >
                      <DashLg className=" mt-1" />
                      Segui giá
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <Button
                    variant="outline-primary"
                    className="d-flex border-0"
                    style={{ fontSize: "13px" }}
                    onClick={() => {
                      dispatch(addFriendAction(elem.user));
                    }}
                  >
                    <PlusLg className="me-2 mt-1" />
                    Segui
                  </Button>
                </>
              ))}
            {profile._id === elem.user._id && (
              <>
                <Button variant="outline-secondary rounded-5 border-0">
                  <PencilFill
                    className="mb-1"
                    onClick={() => {
                      setIdPost(elem._id);
                      handleShow();
                      setModifica(true);
                      setPostText(elem.text);
                    }}
                    style={{ cursor: "pointer" }}
                  />
                </Button>
                <Button variant="outline-secondary rounded-5 border-0">
                  <Trash
                    className="mb-1"
                    onClick={() => {
                      cancella(elem._id);
                    }}
                    style={{ cursor: "pointer" }}
                  />
                </Button>
              </>
            )}
          </Col>
          <p className="">{elem.text}</p>
          <Col xs={12}>
            <Image src={elem.image ? elem.image : ""} width="100%" className="rounded-4 shadow" />
            <div className="mt-4 border-0 border-top">
              <Row className="mt-2">
                <Col xs={3}>
                  <Button variant="outline-secondary" className="border-0">
                    <HandThumbsUp />
                    <p className="p-0 m-0" style={{ fontSize: "14px" }}>
                      Consiglia
                    </p>
                  </Button>
                </Col>
                <Col xs={3}>
                  <Button variant="outline-secondary" className="border-0">
                    <ChatDots />
                    <p className="p-0 m-0" style={{ fontSize: "14px" }}>
                      Commenta
                    </p>
                  </Button>
                </Col>
                <Col xs={3}>
                  <Button variant="outline-secondary" className="border-0">
                    <ArrowRepeat />
                    <p className="p-0 m-0" style={{ fontSize: "14px" }}>
                      Diffondi il post
                    </p>
                  </Button>
                </Col>
                <Col xs={3}>
                  <Button variant="outline-secondary" className="border-0">
                    <Send />
                    <p className="p-0 m-0" style={{ fontSize: "14px" }}>
                      Invia
                    </p>
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    )
  );
};
export default SinglePost;
