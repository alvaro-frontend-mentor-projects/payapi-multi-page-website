import React from 'react';

import './App.css';
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Pricing from './pages/pricing';

function App() {
  return (
    <div className="App">
      <Navbar className=""/>
      <Routes>
        <Route path='/' element={<Home className=""/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        

      </Routes>
    </div>
  );
}

export default App;
