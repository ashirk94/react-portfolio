import './index.scss'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/laptop-computer-logo.png'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={Logo} alt="logo" />
      </Link>
    </div>
  )
}

export default Sidebar
