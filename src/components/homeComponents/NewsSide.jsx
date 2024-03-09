import { fetchNews } from "../../redux/actions/homeAction";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillInfoSquareFill } from "react-icons/bs";
import SidebarFooter from "../SidebarFooter";
import { Row, Card, Button } from "react-bootstrap";
import "../../assets/style/sideNews.css";
import { formatDistanceToNow } from "date-fns";
import { ArrowDownShort } from "react-bootstrap-icons";
import Premium from "../../premium.png";

const NewsSide = () => {
  const { data: news } = useSelector((state) => state.news);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Effetto eseguito");
    dispatch(fetchNews());
  }, [dispatch]);

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return formatDistanceToNow(date, { addSuffix: true });
  };

  console.log(news);
  return (
    <>
      <Row className="d-none d-lg-block mt-3">
        <Card className="mb-2">
          <div className="mt-3 d-flex justify-content-between">
            <h2>LinkedIn Notizie</h2>
            <BsFillInfoSquareFill className="me-2" />
          </div>

          {news &&
            news.slice(0, 6).map((elem, index) => (
              <React.Fragment key={index}>
                <Card.Body className="p-1 mb-2">
                  <Card.Title className="fs-6" style={{ cursor: "pointer" }}>
                    <span className=" me-2 fs-2">•</span>
                    {truncateText(elem.title, 32)}
                  </Card.Title>
                  <Card.Text className="mb-0 lead" style={{ fontSize: "14px" }}>
                    {truncateText(elem.summary, 40)}
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <span style={{ fontSize: "12px" }}>{formatDate(elem.published_at)}</span>
                  </div>
                </Card.Body>
              </React.Fragment>
            ))}
          <Button variant="outline-secondary border-0 p-0 mb-3" style={{ fontWeight: "600" }}>
            Show More <ArrowDownShort className="mb-1 fs-4" />
          </Button>
        </Card>
        <Card className="pb-2">
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
        <div>
          <SidebarFooter />
        </div>
      </Row>
    </>
  );
};

export default NewsSide;
