import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Navbar from '../components/shared/Navbar'
import Home from '../pages/Home'
import bgCircle from '../assets/shared/desktop/bg-pattern-circle.svg'

const Layout = () => {
  return (
    <div className="bg-[#EDF3F8] overflow-x-hidden sm:px-[24px] relative">
              <img className=' absolute max-w-[1500px] sm:w-[780px] md:w-[1000px] sm:left-[-202px] sm:top-[-550px] md:right-[-120px] md:top-[-720px] lg:w-[780px] lg:left-[850px] lg:top-[-180px] z-0' src={bgCircle} alt="" />

      <Navbar className=""/>
      <Routes>
        <Route path='/' element={<Home className=""/>}/>
        
        

      </Routes>
    </div>
  )
}

export default Layout