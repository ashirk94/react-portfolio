import myGameList from '../assets/images/mygamelist.jpg'
import rentTech from '../assets/images/renttech.jpg'
import scandinavianFood from '../assets/images/scandinavianfood.jpg'
import produceShop from '../assets/images/produceShop.jpg'

const Portfolio = () => {
	//make images links
	return (
		<div>
			<div className='portfolio'>
				<h2>Projects</h2>
				<div className='link-zone'>
					<div className='item'>
						<a
							className='links'
							href='https://main.d29j317vl7nv5o.amplifyapp.com/'
							target='_blank'
							rel='noreferrer'>
							Produce Shop
						</a>
						<a
							href='https://main.d29j317vl7nv5o.amplifyapp.com/'
							target='_blank'
							rel='noreferrer'>
							<img
								className='image'
								src={produceShop}
								alt='Produce Shop'></img>
						</a>
					</div>
					<div className='item'>
						<a
							className='links'
							href='https://tech-rental.azurewebsites.net/'
							target='_blank'
							rel='noreferrer'>
							RentTech
						</a>
						<a
							href='https://tech-rental.azurewebsites.net/'
							target='_blank'
							rel='noreferrer'>
							<img
								className='image'
								src={rentTech}
								alt='RentTech'></img>
						</a>
					</div>
					<div className='item'>
						<a
							className='links'
							href='http://mygamelist-env.eba-pjfkzxaf.us-west-2.elasticbeanstalk.com/'
							target='_blank'
							rel='noreferrer'>
							MyGameList
						</a>
						<a
							href='http://mygamelist-env.eba-pjfkzxaf.us-west-2.elasticbeanstalk.com/'
							target='_blank'
							rel='noreferrer'>
							<img
								className='image'
								src={myGameList}
								alt='MyGameList'></img>
						</a>
					</div>
					<div className='item'>
						<a
							className='links'
							href='https://scandinavian-food.azurewebsites.net/'
							target='_blank'
							rel='noreferrer'>
							ScandinavianFood
						</a>
						<a
							href='https://scandinavian-food.azurewebsites.net/'
							target='_blank'
							rel='noreferrer'>
							<img
								className='image'
								src={scandinavianFood}
								alt='ScandinavianFood'></img>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Portfolio
