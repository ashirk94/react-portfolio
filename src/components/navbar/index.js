import './index.scss'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUser,
  faEnvelope,
  faXmark,
  faBars,
} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { useState, useEffect } from 'react'

const Navbar = () => {
  //toggle navbar for mobile, show full bar on desktop
    let startScreen = window.innerWidth < 1065

  const [showMenu, setShowMenu] = useState(false)
  const [mobile, setMobile] = useState(startScreen)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1065) {
        setMobile(true)
        setShowMenu(false)
      } else {
        setMobile(false)
        setShowMenu(true)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  let menu

  if (showMenu || !mobile) {
    menu = (
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
        <a
          className="github-link"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/ashirk94"
        >
          <FontAwesomeIcon icon={faGithub} color="white" />
        </a>
      </nav>
    )
  }
  if (!mobile) {
    return (
      <div className="nav-bar">
        <nav>{menu}</nav>
      </div>
    )
  } else if (showMenu === false && mobile) {
    return (
      <div className="nav-bar">
        <nav>
          <span className="burger">
            <FontAwesomeIcon
              icon={faBars}
              onClick={() => setShowMenu(!showMenu)}
            ></FontAwesomeIcon>
          </span>

          {menu}
        </nav>
      </div>
    )
  } else {
    return (
      <div className="nav-bar">
        <nav>
          <span className="burger">
            <FontAwesomeIcon
              icon={faXmark}
              onClick={() => setShowMenu(!showMenu)}
            ></FontAwesomeIcon>
          </span>

          {menu}
        </nav>
      </div>
    )
  }
}

export default Navbar
