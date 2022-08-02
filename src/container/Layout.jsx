import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Navbar from '../components/shared/Navbar'
import Home from '../pages/Home'
import Pricing from '../pages/pricing'
import About from '../pages/About'


import bgCircle from '../assets/shared/desktop/bg-pattern-circle.svg'

const Layout = () => {
  return (
    <div className="bg-[#EDF3F8] overflow-x-hidden px-[24px] md:px-[39px] lg:px-[165px] relative">
              {/* <img className=' absolute max-w-[1500px] w-[780px] md:w-[1000px] left-[-202px] top-[-550px] md:left-[-120px] md:top-[-720px] lg:w-[780px] lg:left-[850px] lg:top-[-180px] z-0' src={bgCircle} alt="" /> */}

      <Navbar className=""/>
      <Routes>
        <Route path='/' element={<Home className=""/>}/>
        <Route path='/Pricing' element={<Pricing className=""/>}/>
        <Route path='/About' element={<About className=""/>}/>
        
        

      </Routes>
    </div>
  )
}

export default Layout