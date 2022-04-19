import { Routes, Route } from 'react-router-dom';
import './App.scss';
//import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './components/layout'
import Home from './components/home'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Layout />
    </div>
  )
}

export default App;
