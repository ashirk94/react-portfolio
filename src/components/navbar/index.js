import './index.scss'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faXmark, faBars } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

const Navbar = () => {
  //toggle navbar for mobile, show full bar on desktop
    let startScreen = window.innerWidth < 1065

  const [showMenu, setShowMenu] = useState(false)
  const [mobile, setMobile] = useState(startScreen)

  const maskOn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    reset: true
  })

  const menuOpen = useSpring({
    from: { opacity: 0, transform: 'translateY(-100%)' },
    to: { opacity: 1,  transform: 'translateY(0%)' },
    reset: true
  })

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
  let menuMask

  if (showMenu && mobile) {
    menu = (
<animated.nav className="fixed menu" style={menuOpen}>
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
        </animated.nav>
        
      )
      menuMask = (
            <animated.div style={maskOn} className="menu-mask" onClick={() => setShowMenu(false)}></animated.div>
      )
  }
  else if (showMenu || !mobile) {
    menu = (
      <nav className="menu">
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
      <div className="nav-bar mb2">
        <nav>{menu}</nav>
      </div>
    )
  } else if (showMenu === false && mobile) {
    return (
      <div className="nav-bar mb">
        <nav>
          <div className="burger">
            <FontAwesomeIcon
              icon={faBars}
              onClick={() => setShowMenu(!showMenu)}
            ></FontAwesomeIcon>
          </div>
          {menu}
        </nav>
      </div>
    )
  } else if (mobile && showMenu === true){
    return (
      <div className="nav-bar mb">
        <nav>
          <div className="burger">
            <FontAwesomeIcon
              icon={faXmark}
              onClick={() => setShowMenu(!showMenu)}
            ></FontAwesomeIcon>
          </div>
        </nav>
        {menu}       
          {menuMask}
      </div>
    )
  }
}

export default Navbar
