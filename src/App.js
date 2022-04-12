import { Routes, Route } from 'react-router-dom';
import './App.scss';
//import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './components/layout';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
  );
}

export default App;
