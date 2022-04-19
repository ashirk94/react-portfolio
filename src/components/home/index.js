import './index.scss'
import {Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>Hi, I'm Alan</h1>
        <h2>I'm a Junior Web Developer</h2>
        <Link to="/contact" className='flat-button'></Link>
      </div>
    </div>
  )
}
export default Home
