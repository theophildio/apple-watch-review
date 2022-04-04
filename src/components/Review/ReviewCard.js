import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./ReviewCard.css";

const ReviewCard = (props) => {
	const { picture, name, review, rating } = props.review;

	return (
		<div className="review-container">
			<div className="card">
				<FontAwesomeIcon className="icon" icon={faQuoteLeft}></FontAwesomeIcon>
				<p>{review}</p>
				<div className="reviewer-infos">
					<div className="reviewer-img">
						<img src={picture} alt="Reviewer Img" />
					</div>
					<p>Rating: <span>{rating}</span></p>
					<h4>{name}</h4>
				</div>
			</div>
		</div>
	);
};

export default ReviewCard;
