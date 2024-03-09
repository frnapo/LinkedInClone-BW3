import React, { useState, useEffect } from "react";
import { Col, Card, Image, Button } from "react-bootstrap";
import { X, Bookmark } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { addBookmark, removeBookmark } from "../../redux/actions/jobActions";

const JobCard = ({ handleBookmarkJob }) => {
	const [recommendedJobs, setRecommendedJobs] = useState([]);
	const [visibleJobsCount, setVisibleJobsCount] = useState(3);
	const dispatch = useDispatch();
	const bookmarks = useSelector((state) => state.bookmarks);
	console.log("Bookmarks:", bookmarks);

	useEffect(() => {
		const fetchRecommendedJobs = async () => {
			try {
				const response = await fetch(
					"https://strive-benchmark.herokuapp.com/api/jobs",
					{
						headers: {
							Authorization:
								"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc1ZjY4YzNkYWRhMDAwMThhNjlmOTgiLCJpYXQiOjE3MDYxNzQ0ODcsImV4cCI6MTcwNzM4NDA4N30.D_oUWOkDru_J40ei7pOE0hADNvyYJtypzzIboLiccx8",
						},
					}
				);
				const data = await response.json();
				const jobsWithLogo = data.data.filter(
					(job) => job.company_logo_url && job.company_logo_url.trim() !== ""
				);
				setRecommendedJobs(jobsWithLogo);
			} catch (error) {
				console.error("Error fetching recommended jobs:", error);
			}
		};

		fetchRecommendedJobs();
	}, []);

	const handleHideJob = (jobId) => {
		setRecommendedJobs((prevJobs) =>
			prevJobs.filter((job) => job._id !== jobId)
		);
	};

	const handleBookmarkJobInternal = (jobId) => {
		if (bookmarks.find((bookmark) => bookmark.jobId === jobId)) {
			dispatch(removeBookmark(jobId));
		} else {
			dispatch(addBookmark(jobId));
		}
		handleBookmarkJob(jobId);
	};
	const handleShowMoreJobs = () => {
		setVisibleJobsCount((prevCount) => prevCount + 3);
	};

	return (
		<Col xs={12}>
			<Card className="mt-2">
				<Card.Body className="pb-0">
					<Card.Title className="mb-1">Consigliato per te</Card.Title>
					<Card.Text className="lead" style={{ fontSize: "16px" }}>
						Sulla base del tuo profilo e della tua cronologia delle ricerche
					</Card.Text>
					{recommendedJobs.slice(0, visibleJobsCount).map((job) => (
						<div
							key={job._id}
							className="mb-3 position-relative d-flex align-items-center"
						>
							<Button
								variant="link"
								className="position-absolute top-0 end-0 text-secondary"
								onClick={() => handleHideJob(job._id)}
							>
								<X className="fs-4" />
							</Button>
							<Bookmark
								className={`position-absolute top-0 start-0 text-secondary ${
									bookmarks.find((bookmark) => bookmark.jobId === job._id)
										? "text-warning"
										: ""
								}`}
								onClick={() => handleBookmarkJobInternal(job._id)}
							/>
							{job.company_logo_url && (
								<Image
									src={job.company_logo_url}
									alt={`${job.company_name} logo`}
									className="me-3"
									style={{ width: "60px", height: "60px" }}
								/>
							)}
							<div>
								{job.title && <h5>{job.title}</h5>}
								{job.company_name && (
									<p className="text-muted mb-1">{job.company_name}</p>
								)}
								{job.candidate_required_location && (
									<p>{job.candidate_required_location}</p>
								)}
								{job.url && <a href={job.url}>Apply Now</a>}
							</div>
						</div>
					))}
				</Card.Body>
				<Card.Text
					className="text-center fs-6 fw-bolder text-secondary border-1 border-top py-2 custom-buttons"
					onClick={handleShowMoreJobs}
				>
					Mostra altro →
				</Card.Text>
			</Card>
		</Col>
	);
};

export default JobCard;
