import "./styles.css";

import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import ProduceShop from "./pages/produceShop";
import MyGameList from "./pages/myGameList";
import RentTech from "./pages/rentTech";
import ScandinavianFood from "./pages/scandinavianFood";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/produce-shop" element={<ProduceShop />} />
					<Route path="/my-game-list" element={<MyGameList />} />
					<Route path="/rent-tech" element={<RentTech />} />
					<Route
						path="/scandinavian-food"
						element={<ScandinavianFood />}
					/>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
