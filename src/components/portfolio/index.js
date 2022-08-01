//import Loader from 'react-loaders'
import './index.scss'
//import channelThis from "../../assets/images/channel-this.jpg"
//import ocdla from "../../assets/images/ocdla-map.jpg"

const Portfolio = () => {
    return (
        <div>
		<div className='text-zone'>
			<h2>Projects</h2>
            <a className="links large" href='http://channelthis.tv' target="_blank" rel="noreferrer">ChannelThis.tv</a>
            {/* <img className="image" src={channelThis} alt="channelthis"></img> */}
            <a className="links" href='https://github.com/ashirk94/RentTech' target="_blank" rel="noreferrer">RentTech</a><br/>
            <a className="links" href='https://github.com/ashirk94/MyGameList' target="_blank" rel="noreferrer">MyGameList</a>
            <a className="links" href='https://github.com/ashirk94/custom-google-map' target="_blank" rel="noreferrer">custom-google-map</a><br/>
            <a className="links" href='https://github.com/ashirk94/ScandinavianFood' target="_blank" rel="noreferrer">ScandinavianFood</a>
            <a className="links" href='https://github.com/ashirk94/react-portfolio' target="_blank" rel="noreferrer">alanshirk.com</a><br/>        
		</div>
		{/* <Loader type='ball-pulse' /> */}
	</div>
    )
}

export default Portfolio
