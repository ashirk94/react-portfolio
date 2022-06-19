import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { animated, config, useSpring } from 'react-spring'


const Menu = (props) => {

    const springProps = useSpring({
        from: { opacity: 0, transform: 'translateY(-100%)' },
        to: { opacity: props.showMenu ? 1 : 0 , transform: props.showMenu ? 'translateY(0%)' : 'translateY(-200%)'},
        config: config.molasses
    })
	return (
		<animated.nav style={springProps} className="fixed">
			<NavLink exact="true"
				style={({ isActive }) => ({
					color: isActive ? 'grey' : 'white'
				})}
				to='/'>
				<FontAwesomeIcon icon={faHome} color='SlateBlue' />
			</NavLink>
			<NavLink
				style={({ isActive }) => ({
					color: isActive ? 'grey' : 'white'
				})}
				className='about-link'
				to='/about'>
				<FontAwesomeIcon icon={faUser} color='RoyalBlue' />
			</NavLink>
			<NavLink
				style={({ isActive }) => ({
					color: isActive ? 'grey' : 'white'
				})}
				className='contact-link'
				to='/contact'>
				<FontAwesomeIcon icon={faEnvelope} color='Crimson' />
			</NavLink>
            <NavLink
				style={({ isActive }) => ({
					color: isActive ? 'grey' : 'white'
				})}
				className='portfolio-link'
				to='/portfolio'>
				<FontAwesomeIcon icon={faFolderOpen} color='LightYellow' />
			</NavLink>
			<a
				className='linkedin-link'
				target='_blank'
				rel='noreferrer'
				href='https://www.linkedin.com/in/alan-shirk/'>
				<FontAwesomeIcon icon={faLinkedin} color='lightblue' />
			</a>
			<a
				className='github-link'
				target='_blank'
				rel='noreferrer'
				href='https://github.com/ashirk94'>
				<FontAwesomeIcon icon={faGithub} color='white' />
			</a>
		</animated.nav>
        )
}

export default Menu
