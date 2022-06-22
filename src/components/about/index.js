//import Loader from 'react-loaders'
import './index.scss'

const About = () => {
    return (
        <div>
		<div className='text-zone'>
			<h2>About Me</h2>
            <div className='container'>
            <p className='text'>I'm Alan, a passionate and enthusiastic junior developer. While working on my AAS degree I focused on .NET Core development in C#. To complete the degree I was an intern at Oregon Criminal Defense Lawyers Association where I was mostly writing front-end JavaScript code.
            <br/><br/>
            I have deployed several different applications over the past two years, demonstrating my ability to code a project from start to finish and my understanding of the software development life-cycle. Check out my GitHub to see what I've been building so far!
            <br/><br/>
            When I'm not coding you can usually find me gaming, going out with friends, or hiking in Oregon's beautiful nature. I'm excited to see what we can accomplish this year!</p>
            </div>
		</div>
		{/* <Loader type='ball-pulse' /> */}
	</div>
    )
}

export default About
