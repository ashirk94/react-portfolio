//import Loader from 'react-loaders'
import './index.scss'
import channelThis from "../../assets/images/channel-this.jpg"
//import ocdla from "../../assets/images/ocdla-map.jpg"

const Portfolio = () => {
    return (
        <div>
		<div className='text-zone'>
			<h2>Projects</h2>
            <a className="links large" href='http://channelthis.tv' target="_blank" rel="noreferrer">ChannelThis.tv</a><br/>
            <img className="image" src={channelThis} alt="channelthis"></img>
            <br/>
            <p className="links">Coming soon: Produce Shop</p><br/>
            <p className="links small">A React based marketplace with Firebase authentication.</p>
            
		</div>
		{/* <Loader type='ball-pulse' /> */}
	</div>
    )
}

export default Portfolio
