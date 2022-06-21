//import Loader from 'react-loaders'
import './index.scss'

const Contact = () => {
    return (
        <div>
		<div className='text-zone'>
			<h2>Contact Me</h2>
            <p className='text'>If you would be interested in working with me,<br/>please send an email using the form below:</p>
            <div className="contact-form">
                <form>
                    <ul>
                        <li>
                            <input type="text" name="name" placeholder="Name" required />
                        </li>
                        <li>
                            <input type="email" name="email" placeholder="Email" required />
                        </li>
                        <li>
                            <input type="text" name="subject" placeholder="Subject" required />
                        </li>
                        <li>
                            <textarea  name="message" placeholder="Message" required />
                        </li>
                        <li>
                            <input type="submit" className="btn" value="SEND"  />
                        </li>
                    </ul>
                </form>
            </div>
		</div>
		{/* <Loader type='ball-pulse' /> */}
	</div>
    )
}

export default Contact