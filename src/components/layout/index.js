import { Outlet } from 'react-router-dom'
import Sidebar from '../sidebar'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <div className="page">
        <Sidebar />
      </div>
    </div>
  )
}

export default Layout
