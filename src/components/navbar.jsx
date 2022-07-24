import React from 'react'
import logo from '../assets/shared/desktop/logo.svg'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    
    // NAVBAR CONTAINER
    <div className='w-[100vw] h-[150px] bg-[#EDF3F8] flex flex-col justify-center items-center'>
      {/* Flex Container */}
      <div className='flex flex-row justify-between w-[80%] gap-10 items-center '>
        {/* Logo */}
        <img className='s' src={logo} alt="" />
        {/* Links */}
        <ul className='flex flex-row gap-10 text-[15px] font-[700] text-fmLightSanJuanBlue'>
          <li><Link to="/">Pricing</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/">Contact</Link></li>
        </ul>
        {/* Button */}
        <button className='ml-auto bg-fmDarkPink text-[15px] font-[700] text-fmWaterWhite w-[173px] h-[48px] rounded-[50px]'>
          Schedule a Demo
        </button>
      </div>
    </div>
  )
}

export default navbar