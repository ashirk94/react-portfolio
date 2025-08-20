import Logo from "../assets/images/me-august-2025.jpeg";

const Home = () => {
	return (
		<div>
			<div className="logo">
				<img src={Logo} alt="logo" />
			</div>
			<div className="home-text-zone">
				<h1 className="hi">Hi,&nbsp;</h1>
				<span className="delay1">
					<h1>
						I'm <span>Alan Shirk.</span>
					</h1>
				</span>
				<div className="delay2">
					<br />
					<h2>I'm a Software Engineer based in Eugene, Oregon.</h2>
				</div>
			</div>
		</div>
	);
};
export default Home;
