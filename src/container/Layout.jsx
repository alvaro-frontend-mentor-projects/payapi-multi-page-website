import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Navbar from '../components/shared/Navbar'
import Home from '../pages/Home'

const Layout = () => {
  return (
    <div className="">
      <Navbar className=""/>
      <Routes>
        <Route path='/' element={<Home className=""/>}/>
        
        

      </Routes>
    </div>
  )
}

export default Layout