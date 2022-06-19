import { Outlet } from 'react-router-dom'
import Navbar from '../navbar'
import './index.scss'

const Layout = () => {
  return (
    <div className="page">
      <Outlet />
      <Navbar />
    </div>
  )
}

export default Layout
