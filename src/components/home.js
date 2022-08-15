import Logo from '../assets/images/me626.jpg'

const Home = () => {
	return (
		<div>
			<div className='logo'>
				<img src={Logo} alt='logo' />
			</div>
			<div className='home-text-zone'>
				<h1 className='hi'>Hi,&nbsp;</h1>
				<span className='delay1'>
					<h1>
						I'm <span className='name'>Alan Shirk.</span>
					</h1>
				</span>
				<div className='delay2'>
                    <br/>
					<h2>
						I'm a Full Stack JavaScript and C# Developer <br/>from
						Eugene, Oregon.
					</h2>
				</div>
			</div>
		</div>
	)
}
export default Home
