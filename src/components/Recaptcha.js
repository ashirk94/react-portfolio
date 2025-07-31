import React, { useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const SITE_KEY = "6Ld1tHQrAAAAAObM7EfDK8tu5akDE4CpRJwK9_99";

const Recaptcha = ({ onChange, onLoaded }) => {
	useEffect(() => {
		// Load reCAPTCHA script only when this component mounts
		if (!window.grecaptcha) {
			// Add DNS prefetch for performance
			const dnsPrefetch1 = document.createElement('link');
			dnsPrefetch1.rel = 'dns-prefetch';
			dnsPrefetch1.href = '//www.google.com';
			document.head.appendChild(dnsPrefetch1);

			const dnsPrefetch2 = document.createElement('link');
			dnsPrefetch2.rel = 'dns-prefetch';
			dnsPrefetch2.href = '//www.gstatic.com';
			document.head.appendChild(dnsPrefetch2);

			// Preload the script
			const preload = document.createElement('link');
			preload.rel = 'preload';
			preload.href = 'https://www.google.com/recaptcha/api.js';
			preload.as = 'script';
			document.head.appendChild(preload);

			// Load the actual script
			const script = document.createElement('script');
			script.src = 'https://www.google.com/recaptcha/api.js';
			script.async = true;
			script.defer = true;
			document.head.appendChild(script);
		}
	}, []);

	return (
		<ReCAPTCHA
			sitekey={SITE_KEY}
			onChange={onChange}
			onLoad={() => onLoaded && onLoaded()}
			asyncScriptOnLoad={() => onLoaded && onLoaded()}
		/>
	);
};

export default Recaptcha;
