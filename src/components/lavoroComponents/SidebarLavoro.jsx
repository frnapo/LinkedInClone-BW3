import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import {
	BookmarkFill,
	PlayBtnFill,
	ClipboardCheck,
	ListUl,
	GearFill,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const SidebarLavoro = () => {
	return (
		<Card className="p-3 sticky-top" style={{ top: "87px", zIndex: "1" }}>
			<div className="mt-4 mb-4">
				<Container fluid className="mb-4">
					<Row className="align-items-center">
						<Col xs="auto">
							<BookmarkFill size={20} className="me-2" />
						</Col>
						<Col>
							<Link
								to="/saved-jobs"
								className="text-muted text-decoration-none fw-bold"
							>
								Le mie offerte di lavoro
							</Link>
						</Col>
					</Row>
				</Container>

				<Container fluid className="mb-4">
					<Row className="align-items-center">
						<Col xs="auto">
							<ListUl size={20} className="me-2" />
						</Col>
						<Col>
							<a
								href="#preferences"
								className="text-muted text-decoration-none fw-bold"
							>
								Preferenze
							</a>
						</Col>
					</Row>
				</Container>

				<Container fluid className="mb-4">
					<Row className="align-items-center">
						<Col xs="auto">
							<ClipboardCheck size={20} className="me-2" />
						</Col>
						<Col>
							<a
								href="#skills-ratings"
								className="text-muted text-decoration-none fw-bold"
							>
								Valutazioni delle competenze
							</a>
						</Col>
					</Row>
				</Container>

				<Container fluid className="mb-4">
					<Row className="align-items-center">
						<Col xs="auto">
							<PlayBtnFill size={20} className="me-2" />
						</Col>
						<Col>
							<a
								href="#job-seekers-guide"
								className="text-muted text-decoration-none fw-bold"
							>
								Indicazioni per chi cerca lavoro
							</a>
						</Col>
					</Row>
				</Container>

				<Container fluid>
					<Row className="align-items-center">
						<Col xs="auto">
							<GearFill size={20} className="me-2" />
						</Col>
						<Col>
							<a
								href="#application-settings"
								className="text-muted text-decoration-none fw-bold"
							>
								Impostazioni candidatura
							</a>
						</Col>
					</Row>
				</Container>
			</div>
			<Container fluid="md" className="text-center"></Container>
		</Card>
	);
};

export default SidebarLavoro;
