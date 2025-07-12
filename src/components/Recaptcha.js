import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const SITE_KEY = "6Ld1tHQrAAAAAObM7EfDK8tu5akDE4CpRJwK9_99";

const Recaptcha = ({ onChange, onLoaded }) => (
	<ReCAPTCHA
		sitekey={SITE_KEY}
		onChange={onChange}
		onLoad={() => onLoaded && onLoaded()}
		asyncScriptOnLoad={() => onLoaded && onLoaded()}
	/>
);

export default Recaptcha;
