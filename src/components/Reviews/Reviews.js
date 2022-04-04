import React from "react";
import useReviews from "../../hooks/useReviews";
import ReviewCard from "../Review/ReviewCard";
import "./Reviews.css";

const Reviews = () => {
	const [reviews] = useReviews();
	return (
		<div className="reviews-container">
			<h3>
				All customer <span>reviews</span>
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
<h2>this is review</h2>;
