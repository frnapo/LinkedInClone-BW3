import React, { useEffect, useState } from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../../redux/actions/jobActions";
import SidebarLavoro from "./SidebarLavoro";
import SuggestedJobSearchesCard from "./SuggestedJobSearchesCard";
import JobCard from "../lavoroComponents/JobCard";
import PremiumElencoJobs from "./PremiumElencoJobs";
import JobCardCategory from "./JobCardCategory";
import JobCardOther from "./JobCardOther";
import SavedJobs from "./SavedJobs";
import Premium from "../../premium.png";
import SidebarFooter from "../SidebarFooter";

const Lavoro = () => {
	const dispatch = useDispatch();

	const [savedJobs, setSavedJobs] = useState([]);

	useEffect(() => {
		// Fetch jobs when the component mounts
		dispatch(fetchJobs(""));
	}, [dispatch]); // Include 'dispatch' as a dependency

	const handleBookmarkJob = (jobId) => {
		console.log(jobId);
		if (!savedJobs.includes(jobId)) {
			setSavedJobs((prevSavedJobs) => [...prevSavedJobs, jobId]);
		}
	};

	return (
		<Container fluid="lg" className="mb-5">
			<Row>
				<Col xs={12} md={3}>
					{/* Pass the handleBookmarkJob function and savedJobs to SidebarLavoro */}
					<SidebarLavoro
						handleBookmarkJob={handleBookmarkJob}
						savedJobs={savedJobs}
					/>
				</Col>
				<Col xs={12} md={6}>
					<SuggestedJobSearchesCard />
					{/* Pass the handleBookmarkJob function to JobCard */}
					<JobCard handleBookmarkJob={handleBookmarkJob} />
					<PremiumElencoJobs />
					{/* Pass the handleBookmarkJob function to JobCardCategory */}
					<JobCardCategory
						category="full-stack"
						handleBookmarkJob={handleBookmarkJob}
					/>
					{/* Pass the handleBookmarkJob function to JobCardOther */}
					<JobCardOther handleBookmarkJob={handleBookmarkJob} />
					{/* Pass savedJobs to the SavedJobs component */}
					{/* <SavedJobs savedJobs={savedJobs} /> */}
				</Col>
				<Col xs={12} md={3} className="mt-4">
					<Card className="pb-2">
						<Card.Body>
							<Card.Text
								className="text-center lead"
								style={{ fontSize: "12px" }}
							>
								Enjoy 50% off 2 months of Linkedin Premium!
							</Card.Text>
							<div className="d-flex justify-content-center">
								<img
									src={Premium}
									alt="linkedin-premium"
									style={{ width: "60px" }}
								/>
							</div>
							<Card.Text className="text-center lead mt-4 fs-6">
								Get a boost with this exclusive offer.
							</Card.Text>
							<Card.Link href="#">
								<div className="text-center">
									<Button
										variant="outline-primary"
										className="rounded-5 px-3 border-1 py-1 fw-bolder custom-button-2"
									>
										Get 50% today
									</Button>
								</div>
							</Card.Link>
						</Card.Body>
					</Card>
					<Col xs={12}>
						<SidebarFooter />
					</Col>
				</Col>
			</Row>
		</Container>
	);
};

export default Lavoro;
