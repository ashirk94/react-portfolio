import './index.scss'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/knight2.jpg'

const Home = () => {
  return (
    <div className="container home-page">
              <Link className="logo" to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <div className="text-zone">
      <h1 className="hi">Hi,&nbsp;</h1>
        <span className="delay1">
          <h1>I'm <span className="name">Alan Shirk.</span></h1>
        </span>
        <div className="delay2">
          <h2>I'm a Full Stack Web Developer</h2>
          <h2>from Eugene, Oregon.</h2>
        </div>
        <Link to="/contact" className="contact-link">
          Contact Me
        </Link>
      </div>
    </div>
  )
}
export default Home
