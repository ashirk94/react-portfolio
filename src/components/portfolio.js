import myGameList from "../assets/images/mygamelist.jpg";
import rentTech from "../assets/images/renttech.jpg";
import scandinavianFood from "../assets/images/scandinavianfood.jpg";
import produceShop from "../assets/images/produceShop.jpg";
import bloom from "../assets/images/bloom.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Portfolio = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 1000);
	}, []);

	if (isLoading) {
		return (
			<div className="circle-loader-container">
				<div className="circle-loader"></div>
			</div>
		);
	} else {
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
								<img
									className="image wh-border"
									src={bloom}
									alt="Bloom"></img>
							</a>
						</div>
						<div className="item">
							<Link className="links" to="/rent-tech">
								Rent Tech
							</Link>
							<Link className="links" to="/rent-tech">
								<img
									className="image wh-border"
									src={rentTech}
									alt="RentTech"></img>
							</Link>
						</div>
						<div className="item">
							<Link className="links" to="/produce-shop">
								Produce Shop
							</Link>
							<Link className="links" to="/produce-shop">
								<img
									className="image wh-border"
									src={produceShop}
									alt="Produce Shop"></img>
							</Link>
						</div>
						<div className="item">
							<Link className="links" to="/my-game-list">
								My Game List
							</Link>
							<Link className="links" to="/my-game-list">
								<img
									className="image wh-border"
									src={myGameList}
									alt="MyGameList"></img>
							</Link>
						</div>
						<div className="item">
							<Link className="links" to="/scandinavian-food">
								Scandinavian Food
							</Link>
							<Link className="links" to="/scandinavian-food">
								<img
									className="image wh-border"
									src={scandinavianFood}
									alt="ScandinavianFood"></img>
							</Link>
						</div>
					</div>
				</div>
                <br/>
			</div>
		);
	}
};

export default Portfolio;
