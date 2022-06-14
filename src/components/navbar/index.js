import './index.scss'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { useState, useEffect } from 'react'
import Burger from '../burger'

const Navbar = () => {

    const [mobile, setMobile] = useState(false)

    useEffect(() =>
    {
        const handleResize = () => {
            if (window.innerWidth < 1065) {
                setMobile(true)
            } else {
                setMobile(false)
            }
        }

        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    },  [])
       

  return (
    <div className="nav-bar">
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
        <a
        className="linkedin-link"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/alan-shirk/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="lightblue" />
        </a>
        <a className="github-link" target="_blank" rel="noreferrer" href="https://github.com/ashirk94">
          <FontAwesomeIcon icon={faGithub} color="white" />
        </a>
        {!mobile && <Burger />}

        {mobile && (
            <div className="sidebar-toggle"></div>
        )}
      </nav>
    </div>
  )
}

export default Navbar
