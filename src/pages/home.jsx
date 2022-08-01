import React from 'react'
import bgCircle from '../assets/shared/desktop/bg-pattern-circle.svg'
import phone from '../assets/home/desktop/illustration-phone-mockup.svg'
import Navbar from '../components/shared/Navbar'
import Hero from '../components/homePage/Hero'

// Company Logos
import facebook from '../assets/shared/desktop/facebook.svg'
import google from '../assets/shared/desktop/google.svg'
import hp from '../assets/shared/desktop/hewlett-packard.svg'
import linkedin from '../assets/shared/desktop/linkedin.svg'
import microsoft from '../assets/shared/desktop/microsoft.svg'
import nvidia from '../assets/shared/desktop/nvidia.svg'
import oracle from '../assets/shared/desktop/oracle.svg'
import { ReactComponent as Tesla }  from '../assets/shared/desktop/tesla.svg'
import twitter from '../assets/shared/desktop/twitter.svg'




const Home = () => {
  return (
    

      // HOME MAIN CONTAINER
      <main className=''>
        <Hero/>

        
        




        {/* [[[[[[ WHO WE WORK WITH SECTION ]]]]]] */}
        <div className='  h-[670px] bg-fmMirageBlue overflow-hidden relative' >
          {/* Background circle image */}
          <img className='absolute sm:max-w-[1000px] sm:w-[780px]  sm:top-[-602px] sm:left-[-202px]' src={bgCircle} alt="" />
          {/* Brand Section - 2 Columns */}
          <div className='flex flex-col mt-[80px] mx-[20px]'>
            {/* Left Col */}
            <div className='flex flex-col w-[50%] gap-10'>
              <Tesla fill="#FFFFFF"/>
              <img className=" fill-white" src={hp} alt="hp logo" />
              <img className=' fill-white' src={google} alt="google logo" />
            </div>
            {/* Right Col */}
            <div className='flex flex-col w-[50%]'>

            </div>

          </div>
        </div>
        
       

      </main>


    
  )
}

export default Home

