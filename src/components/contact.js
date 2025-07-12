import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Recaptcha from "./Recaptcha";

const Contact = () => {
	const form = useRef();
	const [captcha, setCaptcha] = useState(null);
	const [message, setMessage] = useState("");
	const [messageType, setMessageType] = useState("");
	const [captchaVisible, setCaptchaVisible] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();
		if (!captcha) {
			setMessage("Please complete the captcha!");
			setMessageType("error");
			return;
		}

		setMessage("Sending email...");
		setMessageType("sending");

		emailjs
			.sendForm(
				"service_hz8jlj6",
				"template_lb09zmq",
				form.current,
				"viLkzGTITUcl5llhl"
			)
			.then(
				() => {
					setMessage("Email sent successfully!");
					setMessageType("success");
					setTimeout(() => {
						window.location.reload(false);
					}, 2000);
				},
				() => {
					setMessage("Email failed to send. Please try again.");
					setMessageType("error");
				}
			);
	};
	return (
		<div>
			<div className="contact">
				<h2>Contact Me</h2>
				<p className="text">
					If you would like to contact me, please send an email using
					the form below:
				</p>
				{message && (
					<div className={`message ${messageType}`}>{message}</div>
				)}
				<div className="contact-form">
					<form ref={form} onSubmit={sendEmail}>
						<ul className="grid">
							<li className="same-row">
								<input
									className="same-row"
									type="text"
									name="name"
									placeholder=" Name"
									required
								/>
							</li>
							<li className="same-row">
								<input
									className="same-row"
									type="email"
									name="email"
									placeholder=" Email"
									required
								/>
							</li>
							<li className="full-row">
								<input
									className="row"
									type="text"
									name="subject"
									placeholder=" Subject"
									required
								/>
							</li>
							<li className="full-row">
								<textarea
									className="row"
									name="message"
									placeholder=" Message"
									required
								/>
							</li>
						</ul>
						<div className="captcha-submit-container">
							<div
								className={`captcha-wrapper ${
									captchaVisible ? "loaded" : ""
								}`}>
								<Recaptcha
									onChange={setCaptcha}
									onLoaded={() => setCaptchaVisible(true)}
								/>
							</div>
							<div className="submit-wrapper">
								<input
									type="submit"
									className="btn"
									value="SEND"
								/>
							</div>
						</div>
					</form>
				</div>
			</div>
			<br />
		</div>
	);
};

export default Contact;
