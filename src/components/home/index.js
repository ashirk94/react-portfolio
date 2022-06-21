import './index.scss'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/me620.jpg'
//import Loader from 'react-loaders'

const Home = () => {
	return (
		<div>
			<div className='logo'>
				<img src={Logo} alt='logo' />
			</div>
			<div className='text-zone'>
				<h1 className='hi'>Hi,&nbsp;</h1>
				<span className='delay1'>
					<h1>
						I'm <span className='name'>Alan Shirk.</span>
					</h1>
				</span>
				<div className='delay2'>
					<h2>
						I'm a Full Stack JavaScript and C# Developer <br/>from
						Eugene, Oregon.
					</h2>
				</div>
				<Link to='/contact' id='contact-link'>
					Contact Me
				</Link>
			</div>
			{/* <Loader type="ball-pulse"></Loader>   */}
		</div>
	)
}
export default Home
