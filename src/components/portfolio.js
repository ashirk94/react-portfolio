import myGameList from "../assets/images/mygamelist.jpg"
import rentTech from "../assets/images/renttech.jpg"
import scandinavianFood from "../assets/images/scandinavianfood.jpg"

const Portfolio = () => {
    return (
        <div>
		<div className='portfolio'>
			<h2>Projects</h2>
            <div className='link-zone'>
                <div className='item'>
                <a className="links" href='https://tech-rental.azurewebsites.net/' target="_blank" rel="noreferrer">RentTech</a>
            <img className="image" src={rentTech} alt="RentTech"></img>
                </div>       
            <div className='item'>
            <a className="links" href='http://mygamelist-env.eba-pjfkzxaf.us-west-2.elasticbeanstalk.com/' target="_blank" rel="noreferrer">MyGameList</a>
            <img className="image" src={myGameList} alt="MyGameList"></img>
            </div>
            <div className='item'>
            <a className="links" href='https://scandinavian-food.azurewebsites.net/' target="_blank" rel="noreferrer">ScandinavianFood</a> 
            <img className="image" src={scandinavianFood} alt="ScandinavianFood"></img>
            </div>   
            </div>
		</div>
	</div>
    )
}

export default Portfolio
