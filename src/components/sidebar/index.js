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
        <NavLink
          exact="true" //from react router docs
          style={({ isActive }) => ({ color: isActive ? 'grey' : 'white' })}
          to="/"
        >
          <FontAwesomeIcon icon={faHome} color="SlateBlue" />
        </NavLink>
        <NavLink
          exact="true"
          style={({ isActive }) => ({ color: isActive ? 'grey' : 'white' })}
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="RoyalBlue" />
        </NavLink>
        <NavLink
          exact="true"
          style={({ isActive }) => ({ color: isActive ? 'grey' : 'white' })}
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="Crimson" />
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
        <a target="_blank" rel="noreferrer" href="https://github.com/ashirk94">
          <FontAwesomeIcon icon={faGithub} color="white" />
        </a>
      </nav>
    </div>
  )
}

export default Sidebar
