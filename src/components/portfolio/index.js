//import Loader from 'react-loaders'
import './index.scss'
import channelThis from "../../assets/images/channelthis.jpg"
import myGameList from "../../assets/images/mygamelist.jpg"
import rentTech from "../../assets/images/renttech.jpg"
import scandinavianFood from "../../assets/images/scandinavianfood.jpg"

const Portfolio = () => {
    return (
        <div>
		<div className='text-zone'>
			<h2>Projects</h2>
            <div className='link-zone'>
            <a className="links" href='http://channelthis.tv' target="_blank" rel="noreferrer">ChannelThis.tv</a>
            <img className="image" src={channelThis} alt="ChannelThis"></img>
            <a className="links" href='https://tech-rental.azurewebsites.net/' target="_blank" rel="noreferrer">RentTech</a>
            <img className="image" src={rentTech} alt="RentTech"></img>
            </div>
            <div className='link-zone'>
            <a className="links" href='http://mygamelist-env.eba-pjfkzxaf.us-west-2.elasticbeanstalk.com/' target="_blank" rel="noreferrer">MyGameList</a>
            <img className="image" src={myGameList} alt="MyGameList"></img>
            <a className="links" href='https://scandinavian-food.azurewebsites.net/' target="_blank" rel="noreferrer">ScandinavianFood</a> 
            <img className="image" src={scandinavianFood} alt="ScandinavianFood"></img>
            </div>   
		</div>
		{/* <Loader type='ball-pulse' /> */}
	</div>
    )
}

export default Portfolio
