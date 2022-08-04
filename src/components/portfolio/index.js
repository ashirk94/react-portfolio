//import Loader from 'react-loaders'
import './index.scss'
//import channelThis from "../../assets/images/channel-this.jpg"
//import ocdla from "../../assets/images/ocdla-map.jpg"

const Portfolio = () => {
    return (
        <div>
		<div className='text-zone'>
			<h2>Projects</h2>
            <div className='link-zone'>
            <a className="links" href='http://channelthis.tv' target="_blank" rel="noreferrer">ChannelThis.tv</a>
            {/* <img className="image" src={channelThis} alt="channelthis"></img> */}
            <a className="links" href='https://tech-rental.azurewebsites.net/' target="_blank" rel="noreferrer">RentTech</a>
            <a className="links" href='http://mygamelist-env.eba-pjfkzxaf.us-west-2.elasticbeanstalk.com/' target="_blank" rel="noreferrer">MyGameList</a>
            <a className="links" href='https://github.com/ashirk94/custom-google-map' target="_blank" rel="noreferrer">custom-google-map</a>
            <a className="links" href='https://scandinavian-food.azurewebsites.net/' target="_blank" rel="noreferrer">ScandinavianFood</a>
            <a className="links" href='https://github.com/ashirk94/react-portfolio' target="_blank" rel="noreferrer">alanshirk.com</a>    
            </div>   
		</div>
		{/* <Loader type='ball-pulse' /> */}
	</div>
    )
}

export default Portfolio
