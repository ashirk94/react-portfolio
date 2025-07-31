import { Link } from "react-router-dom";
import BloomImage from "../components/bloomImage";
import ProduceShopImage from "../components/produceShopImage";
import ScandinavianFoodImage from "../components/scandinavianFoodImage";
import MyGameListImage from "../components/myGameListImage";
import RentTechImage from "../components/rentTechImage";

const Portfolio = () => {
	return (
		<div>
			<div className="portfolio">
				<h2>Projects</h2>
				<div className="link-zone">
					<div className="item">
						<a
							className="links"
							href="https://github.com/ashirk94/Bloom"
							target="_blank"
							rel="noreferrer">
							Bloom
						</a>
						<a
							className="links"
							href="https://bloom-friend-finder.herokuapp.com/"
							target="_blank"
							rel="noreferrer">
							<BloomImage />
						</a>
					</div>
					<div className="item">
						<Link className="links" to="/rent-tech">
							Rent Tech
						</Link>
						<Link className="links" to="/rent-tech">
							<RentTechImage />
						</Link>
					</div>
					<div className="item">
						<Link className="links" to="/produce-shop">
							Produce Shop
						</Link>
						<Link className="links" to="/produce-shop">
							<ProduceShopImage />
						</Link>
					</div>
					<div className="item">
						<Link className="links" to="/my-game-list">
							MyGameList
						</Link>
						<Link className="links" to="/my-game-list">
							<MyGameListImage />
						</Link>
					</div>
					<div className="item">
						<Link className="links" to="/scandinavian-food">
							Scandinavian Food
						</Link>
						<Link className="links" to="/scandinavian-food">
							<ScandinavianFoodImage />
						</Link>
					</div>
				</div>
			</div>
			<br />
		</div>
	);
};

export default Portfolio;
