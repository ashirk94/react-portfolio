import { Routes, Route } from 'react-router-dom'
import './App.scss'
//import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './components/layout'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'
import Portfolio from './components/portfolio'

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path="/portfolio" element={<Portfolio />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
