import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
		<div className='about'>
			<h2>About Me</h2>
            <div className='container'>
            <p className='text'>I am a Software Engineer with over 3 years of experience writing code and building web applications. Currently I am a Computer Science student at Portland State University. Last June I graduated from Lane Community College with an AAS in Computer Programming. During the final term of that degree I became a Web Development Intern at OCDLA, the Oregon Criminal Defense Lawyers Association.
            <br/><br/>
            I began coding years ago and spent several months working on a side scroller adventure game in GameMaker Studio. My passion was ignited anew when I took my first C++ programming class in college. Since then I have been eagerly learning various topics, languages, and frameworks in software development. Check out the projects page and my GitHub profile to see what I've been building so far.
            <br/><br/>
            <Link className='links' to='/resume'>Click here to view my resumé!</Link></p>
            </div>
		</div>
	</div>
    )
}

export default About
