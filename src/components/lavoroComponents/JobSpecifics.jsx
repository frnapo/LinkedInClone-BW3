import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Button, Col } from "react-bootstrap";
import { MdWork } from "react-icons/md";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { TbListCheck } from "react-icons/tb";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";

const JobSpecifics = () => {
  const { categoryOrCompany } = useParams();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = `https://strive-benchmark.herokuapp.com/api/jobs?${categoryOrCompany}`;
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc1ZjY4YzNkYWRhMDAwMThhNjlmOTgiLCJpYXQiOjE3MDYxNzQ0ODcsImV4cCI6MTcwNzM4NDA4N30.D_oUWOkDru_J40ei7pOE0hADNvyYJtypzzIboLiccx8";

      try {
        const response = await fetch(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
            // Add other headers if needed
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        console.log(responseData);

        // Check if responseData.data is an array
        if (Array.isArray(responseData.data)) {
          setJobs(responseData.data);
        } else {
          console.error("Invalid data format:", responseData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [categoryOrCompany]);

  const renderHTML = (htmlString) => {
    return { __html: htmlString };
  };

  return (
    <Container>
      <Col md={{ span: 8, offset: 2 }} className="mt-3">
        {jobs.map((job) => (
          <Card key={job._id} className="mb-4">
            <Card.Body className="m-3">
              <Card.Title>
                <h3>{job.title}</h3>
              </Card.Title>
              <Card.Text>
                <span>{job.company_name} • </span>
                <span>{job.candidate_required_location} • </span>
                {new Date(job.publication_date).toLocaleDateString("it-IT", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                <Container className="d-flex flex-column m-3">
                  <span className="m-3">
                    <MdWork className="fs-4 me-2" /> <span>{job.job_type}</span>
                  </span>
                  <span className="m-3">
                    <HiOutlineBuildingOffice className="fs-4 me-2" /> <span>1-20 dipendenti</span>
                  </span>
                  <span className="m-3">
                    <TbListCheck className="fs-4 me-2" /> <span>Competenze:</span>
                  </span>
                  <span className="m-3">
                    <HiOutlineLightBulb className="fs-4 me-2" />{" "}
                    <span>
                      Vedi come ti posizioni rispetto agli altri candidati. <a href="/#"> Prova Premium gratis</a>
                    </span>
                  </span>
                </Container>
                <Button variant="primary" className="fw-bold rounded-5 px-3 me-2">
                  <FaLinkedin className="me-1" />
                  Candidatura semplice
                </Button>
                <Button variant="outline-primary" className="fw-bold rounded-5 px-3 me-2">
                  Salva
                </Button>
                <div dangerouslySetInnerHTML={renderHTML(job.description)} className="my-5" />
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Col>
    </Container>
  );
};

export default JobSpecifics;
