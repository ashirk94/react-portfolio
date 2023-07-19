import myGameList from '../assets/images/mygamelist.jpg'
import rentTech from '../assets/images/renttech.jpg'
import scandinavianFood from '../assets/images/scandinavianfood.jpg'
import produceShop from '../assets/images/produceShop.jpg'
import { Link } from 'react-router-dom'

const Portfolio = () => {
	//upload videos to youtube and embed
	return (
		<div>
			<div className='portfolio'>
				<h2>Projects</h2>
				<div className='link-zone'>
					<div className='item'>
						<Link className='links' to='/produce-shop'>
							Produce Shop
						</Link>
						<Link className='links' to='/produce-shop'>
							<img
								className='image wh-border'
								src={produceShop}
								alt='Produce Shop'></img>
						</Link>
					</div>
					<div className='item'>
                    <Link className='links' to='/rent-tech'>
							RentTech
						</Link>
						<Link className='links' to='/rent-tech'>
							<img
								className='image wh-border'
								src={rentTech}
								alt='RentTech'></img>
						</Link>
					</div>
					<div className='item'>
						<Link className='links' to='/my-game-list'>
							MyGameList
						</Link>
						<Link className='links' to='/my-game-list'>
							<img
								className='image wh-border'
								src={myGameList}
								alt='MyGameList'></img>
						</Link>
					</div>
					<div className='item'>
						<Link className='links' to='/scandinavian-food'>
							ScandinavianFood
						</Link>
						<Link className='links' to='/scandinavian-food'>
							<img
								className='image wh-border'
								src={scandinavianFood}
								alt='ScandinavianFood'></img>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Portfolio
