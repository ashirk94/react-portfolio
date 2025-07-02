import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

const SITE_KEY = '6Ld1tHQrAAAAAObM7EfDK8tu5akDE4CpRJwK9_99'

const Recaptcha = ({ onChange }) => (
  <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
    <ReCAPTCHA sitekey={SITE_KEY} onChange={onChange} />
  </div>
)

export default Recaptcha
