import './App.scss'
import './styles/about.scss'
import './styles/contact.scss'
import './styles/home.scss'
import './styles/layout.scss'
import './styles/navbar.scss'
import './styles/portfolio.scss'

import { Routes, Route } from 'react-router-dom'

import Layout from './components/layout'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'
import Portfolio from './components/portfolio'
import ProduceShop from './components/produceShop'
import MyGameList from './components/myGameList'
import RentTech from './components/rentTech'
import ScandinavianFood from './components/scandinavianFood'

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path="/portfolio" element={<Portfolio />} />
                    <Route path='/produce-shop' element={<ProduceShop />} />
                    <Route path='/my-game-list' element={<MyGameList />} />
                    <Route path='/rent-tech' element={<RentTech />} />
                    <Route path='/scandinavian-food' element={<ScandinavianFood />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
