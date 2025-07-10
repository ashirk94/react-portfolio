import { animated, useTransition } from "react-spring";

const MenuMask = (props) => {
	const transition = useTransition(null, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
		config: { duration: 800 }
	});
	return transition((style, key) => (
		<animated.div
			key={key}
			style={style}
			className="menu-mask"
			onClick={props.onClick}></animated.div>
	));
};

export default MenuMask;
