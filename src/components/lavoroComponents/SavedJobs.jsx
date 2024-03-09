import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { X } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { removeBookmark } from "../../redux/actions/jobActions";
import axios from "axios";

const SavedJobs = () => {
	const dispatch = useDispatch();
	const savedJobs = useSelector((state) => state.bookmarks);

	if (!savedJobs || savedJobs.length === 0) {
		return <p>No saved jobs found.</p>;
	}

	const handleRemoveSavedJob = (jobId) => {
		dispatch(removeBookmark(jobId));
	};

	return (
		<div>
			<h2>My Saved Jobs</h2>
			{savedJobs.map((savedJob) => (
				<JobCard
					key={savedJob.jobId}
					job={savedJob}
					onRemove={handleRemoveSavedJob}
				/>
			))}
		</div>
	);
};

const JobCard = ({ job, onRemove }) => {
	const [jobDetails, setJobDetails] = useState(null);
	const [showJobDetailsModal, setShowJobDetailsModal] = useState(false);
	const dispatch = useDispatch();

	const handleRemoveClick = () => {
		onRemove(job.jobId);
	};

	const handleApplyNowClick = async () => {
		try {
			console.log("JobId to fetch details:", job.jobId);
			const response = await fetchJobDetails(job.jobId);
			setJobDetails(response);
			setShowJobDetailsModal(true);
		} catch (error) {
			console.error("Error fetching job details:", error);
		}
	};

	const fetchJobDetails = async (jobId) => {
		try {
			const response = await axios.get(
				`https://strive-benchmark.herokuapp.com/api/jobs/${jobId}`,
				{
					headers: {
						Authorization:
							"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc1ZjY4YzNkYWRhMDAwMThhNjlmOTgiLCJpYXQiOjE3MDYxNzQ0ODcsImV4cCI6MTcwNzM4NDA4N30.D_oUWOkDru_J40ei7pOE0hADNvyYJtypzzIboLiccx8",
					},
				}
			);

			if (!response.data.data) {
				throw new Error("Invalid job details format");
			}

			return response.data.data; // Return the job details directly
		} catch (error) {
			console.error(error.message);
			throw new Error("Failed to fetch job details");
		}
	};
	const handleCloseJobDetailsModal = () => {
		setShowJobDetailsModal(false);
	};

	return (
		<Card className="mb-3">
			<Card.Body className="d-flex align-items-center">
				<div className="flex-grow-1">
					<h5 className="mb-0">{job.jobId}</h5>
				</div>
				<Button
					variant="primary"
					size="sm"
					className="me-2"
					onClick={handleApplyNowClick}
					disabled={jobDetails !== null}
				>
					Apply Now
				</Button>
				<Button
					variant="link"
					className="text-secondary"
					onClick={handleRemoveClick}
				>
					<X className="fs-4" />
				</Button>
			</Card.Body>

			{/* Job Details Modale */}
			<Modal show={showJobDetailsModal} onHide={handleCloseJobDetailsModal}>
				<Modal.Header closeButton>
					<Modal.Title>Job Details</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{jobDetails && (
						<div>
							<h5>{jobDetails.title}</h5>
							<p>{jobDetails.company_name}</p>
						</div>
					)}
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleCloseJobDetailsModal}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</Card>
	);
};

export default SavedJobs;
