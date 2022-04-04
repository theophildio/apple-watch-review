import React from "react";
import { Link } from "react-router-dom";
import useReviews from "../../hooks/useReviews";
import ReviewOnHome from "../ReviewOnHome/ReviewOnHome";
import "./Home.css";

const Home = () => {
	const [reviews] = useReviews();
	const reviewOnHome = reviews.slice(0, 3);

	return (
		<div className="home-container">
			<section className="hero">
				<div className="hero-img">
					<img src="watch.png" alt="Apple Watch" />
				</div>
				<div className="hero-content">
					<h2>Belive in Technology, Make the change</h2>
					<p>
						Just put on your Apple Watch and take off. Series 7 keeps all the
						things you care about front and center with its larger screen. The
						larger display enhances the entire experience, making Apple Watch
						easier to use and read. Series 7 represents our biggest and
						brightest thinking.
					</p>
					<button className="btn">buy now</button>
				</div>
			</section>
			<main>
				<section className="customer-reviews">
					<h3>
						what our <span>customers say ({reviewOnHome.length})</span>
					</h3>
					<div className="reviews">
						{reviewOnHome.map(review => 
							<ReviewOnHome key={review.id} review={review}></ReviewOnHome>
						)}
					</div>
          <Link to="/reviews" className="btn">See all reviews</Link>
				</section>
			</main>
		</div>
	);
};

export default Home;
