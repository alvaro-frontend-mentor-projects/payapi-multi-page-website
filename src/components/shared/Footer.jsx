import React from 'react'
import { Link } from 'react-router-dom'
import bgCircle from '../../assets/shared/desktop/bg-pattern-circle.svg'
import logoWhite from '../../assets/shared/desktop/logo-white.svg'
import Facebook from '../../assets/shared/desktop/facebook.svg'
import Twitter from '../../assets/shared/desktop/twitter.svg'
import Linkedin from '../../assets/shared/desktop/linkedin.svg'

const Footer = () => {
  return (
    <main className='flex flex-col md:justify-center h-[353px] md:h-[100px] bg-fmMirageBlue overflow-hidden relative mx-[-24px] md:mx-[-39px] lg:mx-[-165px] '>
        <img
            className="absolute max-w-[1000px] w-[780px]  bottom-[-606px] left-[-202px] md:bottom-[-606px] md:left-[330px]"
            src={bgCircle}
            alt=""
        />
        {/* flex container */}
        <div className='flex flex-col md:flex-row justify-center md:justify-between items-center px-[120px] md:px-[39px] lg:px-[165px] py-[40px] gap-10'>
            {/* Logo */}
            <img
                className='max-w-[300px] w-[135px]'
                src={logoWhite} 
                alt="" 
            />
            {/* Links */}
            <div className='flex flex-col md:flex-row items-center text-fmWaterWhite opacity-[70%] font-PublicSans md:text-[15px] md:ml-[-80px] lg:ml-[-500px] gap-6 '>
                <Link to="/pricing">Pricing</Link>
                <Link to="/About">About</Link>
                <Link to="/Contact">Contact</Link>
            </div>
            {/* Social Links */}
            <div className='flex flex-row gap-6'>
                <img src={Facebook} alt="facebook logo" />
                <img src={Twitter} alt="twitter logo" />
                <img src={Linkedin} alt="linkedin logo" />

            </div>

        </div>
        

    </main>
  )
}

export default Footer