import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/knight2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="darkred" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="blue" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="white" />
        </NavLink>
        <br />
        <br />
        <br />
        <br />
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/alan-shirk/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="lightblue" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/alan-shirk/"
        >
          <FontAwesomeIcon icon={faGithub} color="white" />
        </a>
      </nav>
    </div>
  )
}

export default Sidebar
