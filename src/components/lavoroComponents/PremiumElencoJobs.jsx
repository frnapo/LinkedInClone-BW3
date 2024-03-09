import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Row, Col, Image, Button } from "react-bootstrap";
import { fetchProfile } from "../../redux/actions/profileAction";
import "../../assets/style/premiumelencojobs.css";

const PremiumElencoJobs = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.profile);
  useEffect(() => {
    dispatch(fetchProfile());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const token =
  // 	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc1ZjY4YzNkYWRhMDAwMThhNjlmOTgiLCJpYXQiOjE3MDYxNzQ0ODcsImV4cCI6MTcwNzM4NDA4N30.D_oUWOkDru_J40ei7pOE0hADNvyYJtypzzIboLiccx8"; // Replace with your actual token

  return (
    <Card className="mt-2">
      <Card.Body className="pb-0">
        <Row>
          <Col xs={12} md={3} className="text-center">
            <Image
              src={profile.image}
              roundedCircle
              className="ivm-view-attr__img--centered EntityPhoto-circle-4 evi-image mt-2"
              style={{ width: "80px", height: "80px" }}
            />
          </Col>
          <Col xs={12} md={9}>
            <Card.Title className="mb-0 card-title h5">
              Vedi l’elenco completo delle offerte di lavoro per cui saresti fra i migliori candidati
            </Card.Title>
            <div className="jobs-home-upsell-card__social-proof mt-2">
              <div className="ivm-image-view-model jobs-home-upsell-card__facepile"></div>
              <p className="text-body-xsmall">Miriam e milioni di altri utenti usano Premium</p>
            </div>
            <Button
              href="https://www.linkedin.com/premium/products/?upsellOrderOrigin=premium_jobs_home_top_applicant_upsell&amp;utype=job&amp;referenceId=8ZDnnc0fTPW4YPXI4q3mwg%3D%3D&amp;destRedirectURL=https%3A%2F%2Fwww.linkedin.com%2Fjobs%2F"
              variant="secondary"
              className="custom-button text-black fw-bold border-0 rounded-5 px-3 mt-2"
            >
              Prova Premium per 0 EUR
            </Button>
            <p className="t-12 card-upsell__subtext mt-2">Prova gratuita di 1 mese. Annulli in qualsiasi momento.</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default PremiumElencoJobs;
