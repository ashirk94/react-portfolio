import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Recaptcha from './Recaptcha'

const Contact = () => {
    const form = useRef()
    const [captcha, setCaptcha] = useState(null)

    const sendEmail = (e) => {
        e.preventDefault()
        if (!captcha) {
            alert('Please complete the captcha!')
            return
        }
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
		<div className='contact'>
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
                    <Recaptcha onChange={setCaptcha} />
                    <input type="submit" className="btn" value="SEND"  />
                </form>
            </div>
		</div>
        <br/>
	</div>
    )
}

export default Contact