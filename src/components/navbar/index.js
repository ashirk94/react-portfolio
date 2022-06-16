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
import { useState } from 'react'

const Navbar = () => {
    //toggles navbar
  const [showMenu, setShowMenu] = useState(false)
    let menu

    if(showMenu){
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
        </nav>)
    }
    if (showMenu === false) {
        return (
            <div className="nav-bar">
        <nav>
                <span className="burger"> 
                    <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)}></FontAwesomeIcon>
                </span>
        
                { menu }
                </nav>
        </div>
          )
    }
    else {
        return (
            <div className="nav-bar">
        <nav>
                <span className="burger"> 
                    <FontAwesomeIcon icon={faXmark} onClick={() => setShowMenu(!showMenu)}></FontAwesomeIcon>
                </span>
        
                { menu }
                </nav>
        </div>
          )
    }

}

export default Navbar
