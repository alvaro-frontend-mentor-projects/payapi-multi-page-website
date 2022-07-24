import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from './Home'

const Layout = () => {
  return (
    <div className="App">
      <Navbar className=""/>
      <Routes>
        <Route path='/' element={<Home className=""/>}/>
        
        

      </Routes>
    </div>
  )
}

export default Layout