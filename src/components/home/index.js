import './index.scss'
import {Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <div className="delay1">
          <h1>Hi, I'm Alan</h1>
        </div>
        <div className="delay2">
          <h2>I'm a Junior Web Developer</h2>
        </div>
        <Link to="/contact" className="flat-button">
          Contact Me
        </Link>
      </div>
    </div>
  )
}
export default Home
