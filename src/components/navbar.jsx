import React from 'react'
import logo from '../assets/shared/desktop/logo.svg'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    // NAVBAR CONTAINER
    <div className='w-[100vw] h-[150px] bg-transparent flex flex-col justify-center items-center'>
      {/* Flex Container */}
      <div className='flex flex-row justify-between w-[80%] gap-10 items-center '>
        {/* Logo */}
        <img className='s' src={logo} alt="" />
        {/* Links */}
        <Link to="/">Pricing</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
        {/* Button */}
        <button className='ml-auto'>
          Schedule a Demo
        </button>
      </div>

        
    </div>
  )
}

export default navbar