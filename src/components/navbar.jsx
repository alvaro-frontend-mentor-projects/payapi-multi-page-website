// IMPORT REACT, ROUTER-DOM, 
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
// IMPORT IMAGES AND LOGS
import logo from '../assets/shared/desktop/logo.svg'
import hambuger from '../assets/shared/mobile/menu.svg'
import closeMobile from '../assets/shared/mobile/close.svg'
import bgCircle from '../assets/shared/desktop/bg-pattern-circle.svg'




const Navbar = () => {

  //MOBILE MENU STATE
  const [mobile, setMobile] = useState(false)



  const handleMenu = function() {
    setMobile(!mobile)
    console.log("it works!")
  }

  const addEmployee2 = (e) => {
    e.preventDefault();
    console.log("it works!")
  };

  


  return (

    
    
    // NAVBAR CONTAINER
    <div className='w-[100vw] h-[150px] flex flex-col justify-center items-center bg-transparent '>
      {/* Flex Container */}
      <div className='flex flex-row justify-between w-[80%] gap-10 items-center '>
        {/* Logo */}
        <img className='s' src={logo} alt="" />
        {/* Links */}
        <ul className='sm:hidden md:flex lg:flex flex-row gap-10 text-[15px] font-[700] text-fmLightSanJuanBlue'>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/">Contact</Link></li>
        </ul>
        {/* Button */}
        <button className='sm:hidden md:block lg:block ml-auto bg-fmDarkPink text-[15px] font-[700] text-fmWaterWhite w-[173px] h-[48px] rounded-[50px]'>
          Schedule a Demo
        </button>


        

        {/* MOBILE MENU SECTION */}
        <div className='hidden' onClick={handleMenu} >
          {mobile ?  
          <img 
          className='' 
          src={hambuger} 
          alt="hamburger menu icon"
        />
          : 
         <img
          className=''
          src={closeMobile} 
          alt="close menu icon" 
        />  
        }
          
        </div>

        {/* <img className='absolute h-[700px] w-[700px] z-[-1]'  src={bgCircle} alt="" /> */}
        
        

      </div>
    </div>
  )
}

export default Navbar