import { Row, Image, Card, Col, Button } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNetwork } from "../../redux/actions/networkAction";
import { addFriendAction, deleteFriendAction } from "../../redux/actions/friendListAction";
// import { useNavigate } from "react-router-dom";
const ReteAmici = () => {
  const dispatch = useDispatch();
  const { network = [] } = useSelector((state) => state.network);
  const { list = [] } = useSelector((state) => state.friendList);
  // const navigate = useNavigate();
  const removeUsercard = (e) => {
    e.target.closest(".col").style.display = "none";
  };
  useEffect(() => {
    dispatch(fetchNetwork());
  }, [dispatch]);
  console.log("Profili:", network);
  console.log("Amici:", list);
  return (
    <>
      {list.length > 0 ? (
        <>
          <h3 className="mt-3">Persone che segui</h3>
          <div className="border border-1 rounded-4 shadow p-3 mt-3 bg-light">
            <Row className="row-cols-2 row-cols-lg-3  row-cols-xl-4 gy-3">
              {list.map((elem) => (
                <Col key={elem._id}>
                  <Card>
                    <div style={{ position: "relative" }}>
                      <Card.Img
                        variant="top"
                        src="https://images.unsplash.com/photo-1705844996076-eaf8cfad3a16?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"
                        style={{ position: "relative", object: "cover" }}
                        height="60px"
                      />
                      <Image
                        src={elem.image}
                        roundedCircle
                        style={{
                          position: "absolute",
                          width: "80px",
                          height: "80px",
                          bottom: "-40px",
                          left: "50%",
                          marginLeft: "-40px",
                        }}
                        className="shadow"
                      />
                    </div>
                    <Card.Body className="text-center mt-5">
                      <Card.Title
                        className="text-truncate"
                        style={{ cursor: "pointer" }}
                        // onClick={() => {
                        //   navigate(`/profile/${elem._id}`);
                        //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                        // }}
                      >
                        {elem.name} {elem.surname}
                      </Card.Title>
                      <Card.Text className="text-truncate">{elem.title}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-center">
                      <Button
                        variant="outline-secondary"
                        className="rounded-4 py-1 mt-2"
                        onClick={() => {
                          dispatch(deleteFriendAction(elem._id));
                        }}
                      >
                        Segui Gia'
                      </Button>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </>
      ) : null}
      <h3 className="mt-3">Persone che potresti conoscere, calde e vicino a te</h3>
      <div className="border border-1 rounded-4 shadow p-3 mt-3 bg-light">
        <Row className="row-cols-2 row-cols-lg-3  row-cols-xl-4 gy-3">
          {network.map(
            (elem, i) =>
              i < 20 &&
              list.findIndex((x) => x._id === elem._id) === -1 && (
                <Col key={elem._id}>
                  <Card>
                    <div style={{ position: "relative" }}>
                      <Card.Img
                        variant="top"
                        src="https://images.unsplash.com/photo-1705773335937-17e1ff6fac10?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        style={{ position: "relative", objectFit: "cover" }}
                        height="60px"
                      />
                      <Image
                        src={elem.image}
                        roundedCircle
                        style={{
                          position: "absolute",
                          width: "80px",
                          height: "80px",
                          bottom: "-40px",
                          left: "50%",
                          marginLeft: "-40px",
                        }}
                        className="shadow"
                      />
                      <Button
                        className="bg-transparent border-0"
                        onClick={(e) => {
                          removeUsercard(e);
                        }}
                      ></Button>
                    </div>
                    <Card.Body className="text-center mt-5">
                      <Card.Title
                        className="text-truncate"
                        style={{ cursor: "pointer" }}
                        // onClick={() => {
                        //   navigate(`/profile/${elem._id}`);
                        //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                        // }}
                      >
                        {elem.name} {elem.surname}
                      </Card.Title>
                      <Card.Text className="text-truncate">{elem.title}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-center">
                      <Button
                        variant="outline-primary"
                        className="rounded-4 py-1 mt-2"
                        onClick={() => {
                          dispatch(addFriendAction(elem));
                        }}
                      >
                        Segui
                      </Button>
                    </Card.Footer>
                  </Card>
                </Col>
              )
          )}
        </Row>
      </div>
    </>
  );
};

export default ReteAmici;
