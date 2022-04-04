import React from "react";
import useReviews from "../../hooks/useReviews";
import ReviewCard from "../ReviewCard/ReviewCard";
import "./Reviews.css";

const Reviews = () => {
	const [reviews] = useReviews();
	return (
		<div className="reviews-container">
			<h3>
				All customers <span>reviews</span>
			</h3>
			<div className="reviews">
				{reviews.map(review => 
					<ReviewCard key={review.id} review={review}></ReviewCard>
				)}
			</div>
		</div>
	);
};

export default Reviews;
