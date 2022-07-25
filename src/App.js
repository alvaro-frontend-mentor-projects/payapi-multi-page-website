import React from 'react';

import './App.css';
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Pricing from './pages/pricing';

function App() {
  return (
    <div className="bg-[#EDF3F8] bg-hero-pattern bg-no-repeat sm:bg-[right_-200px_top_-500px] md:bg-[right_-200px_top_-180px] ">
      <Navbar className=""/>
      <Routes>
        <Route path='/' element={<Home className=""/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        

      </Routes>
    </div>
  );
}

export default App;
