import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Search, X } from "react-bootstrap-icons";

const SuggestedJobSearchesCard = () => {
	const [isCardVisible, setIsCardVisible] = useState(true);

	const handleClose = () => {
		setIsCardVisible(false);
	};

	return (
		<>
			{isCardVisible && (
				<Card className="p-3 mb-3 mt-4">
					<Button
						variant="link"
						className="position-absolute top-0 end-0 text-secondary me-2 mt-2"
						onClick={handleClose}
					>
						<X className="fs-4" />
					</Button>
					<h2 className="text-muted">
						Ricerche di offerte di lavoro suggerite
					</h2>

					<div className="mt-3">
						{[
							{
								label: "Design",
								searchParam: "category=design&limit=10",
							},
							{ label: "Data", searchParam: "category=data&limit=10" },
							{ label: "Product", searchParam: "category=product&limit=10" },
							{
								label: "Software Development",
								searchParam: "category=Software Development&limit=10",
							},
							{ label: "DevOps", searchParam: "company=devops" },
							{ label: "Wurl", searchParam: "company=wurl" },
						].map((job, index) => (
							<Card.Link key={index} href={`/job/${job.searchParam}`}>
								<Button
									variant="outline-primary"
									className="rounded-5 px-3 mt-2 border-2 fw-bolder custom-button-2"
								>
									<Search className="text-secondary me-2 fs-4" />
									{job.label}
								</Button>
							</Card.Link>
						))}
					</div>
				</Card>
			)}
		</>
	);
};

export default SuggestedJobSearchesCard;
