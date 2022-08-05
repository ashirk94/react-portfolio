//import Loader from 'react-loaders'
import './index.scss'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs.sendForm('service_hz8jlj6', 'template_lb09zmq', form.current, 'viLkzGTITUcl5llhl')
          .then(() => {
              alert('Email sent successfully')
              window.location.reload(false)
          }, () => {
              alert('Email failed to send')
          })
      }
    
    return (
        <div>
		<div className='text-zone'>
			<h2>Contact Me</h2>
            <p className='text'>If you would like to contact me,<br/>please send an email using the form below:</p>
            <div className="contact-form">
                <form ref={form} onSubmit={sendEmail}>
                    <ul className='grid'>
                        
                        <li className='same-row'>
                            <input className='same-row' type="text" name="name" placeholder=" Name" required />
                        </li>
                        <li className='same-row'>
                            <input className='same-row' type="email" name="email" placeholder=" Email" required />
                        </li>
                    </ul>
                    <ul className='flex'>
                    <li >
                            <input className="row" type="text" name="subject" placeholder=" Subject" required />
                        </li>
                        <li>
                            <textarea className="row" name="message" placeholder=" Message" required />
                        </li>
                    </ul>
                    <input type="submit" className="btn" value="SEND"  />
                </form>
            </div>
		</div>
		{/* <Loader type='ball-pulse' /> */}
	</div>
    )
}

export default Contact