import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import Menu from "./menu";
import MenuMask from "./menuMask";

const Navbar = () => {
	//toggle navbar for mobile, show full bar on desktop
	let startScreen = window.innerWidth < 1065;

	const [showMenu, setShowMenu] = useState(false);
	const [mobile, setMobile] = useState(startScreen);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 1065) {
				setMobile(true);
				setShowMenu(false);
			} else {
				setMobile(false);
				setShowMenu(true);
			}
		};

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	if (!mobile) {
		return (
			<div className="nav-bar mb2">
				<nav>
					<Menu showMenu={true} />
				</nav>
			</div>
		);
	} else if (showMenu === false && mobile) {
		return (
			<div className="nav-bar menu mb">
				<nav>
					<div className="burger">
						<FontAwesomeIcon
							icon={faBars}
							onClick={() =>
								setShowMenu(!showMenu)
							}></FontAwesomeIcon>
					</div>
				</nav>
			</div>
		);
	} else if (mobile && showMenu === true) {
		return (
			<div className="nav-bar menu mb">
				<nav>
					<div className="burger">
						<FontAwesomeIcon
							icon={faXmark}
							onClick={() =>
								setShowMenu(!showMenu)
							}></FontAwesomeIcon>
					</div>
				</nav>
				<Menu showMenu={showMenu} />
				<MenuMask onClick={() => setShowMenu(!showMenu)} />
			</div>
		);
	}
};

export default Navbar;
