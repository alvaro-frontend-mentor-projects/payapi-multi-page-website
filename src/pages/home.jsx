import React from 'react'
import bgCircle from '../assets/shared/desktop/bg-pattern-circle.svg'
import phone from '../assets/home/desktop/illustration-phone-mockup.svg'
import Navbar from '../components/shared/Navbar'

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

        {/* Circle Bacckground image - absolute position and using index-z of 0 to be places behind all other elements with z-index of 10  - img relative parent is main container with overflow-x-hidden */}
        
        {/* <img className=' absolute sm:max-w-[1500px] sm:w-[780px] md:w-[1000px] sm:left-[-202px] sm:top-[-550px] md:right-[-120px] md:top-[-720px] lg:w-[780px] lg:left-[850px] lg:top-[-180px] z-0' src={bgCircle} alt="" /> */}
        
      
        {/* [[[[[[ HERO SECTION ]]]]]] */}
        <div className=' flex sm:flex-col-reverse md:flex-col-reverse lg:flex-row md:mx-[80px] lg:mx-[150px] md:justify-end lg:justify-center items-center   lg:h-[600px] '>
          {/* Left Column */}
          <div className='flex flex-col justify-center align-middle md:w-[100%] lg:w-[50%] gap-10'>
            {/* Main Text */}
            <div className='  w-[100%] sm:text-[32px] md:text-[48px] sm:text-center md:text-start lg:text-[72px] sm:leading-[36px] md:leading-[56px] lg:leading-[72px] md:font-[500] font-SerifDisplay sm:mt-[0px] md:mt-[-40px] lg:mt-[0] md:px-[20px] lg:px-[0px]  text-fmSanJuanBlue'>
              <p> Start building with our APIs for absolutely free.</p>
            </div>
            {/* Email Input & Button Row Container */}
            <div className='flex sm:flex-col sm:items-center md:item md:flex-row md:justify-center lg:justify-start sm:gap-[15px] md:gap-0 sm:mt-[-20px]'>
              {/* Email */}
              <input className='rounded-[50px] pl-5 pr-20 sm:mr-0 md:mr-[-35px] w-[327px] h-[48px] text-fmSanJuanBlue font-PublicSans font-[500] focus:outline-none z-10' type="text" placeholder='Enter email address' />
              {/* Button */}
              <button className=' bg-fmDarkPink hover:bg-fmCharmPink text-[15px] font-PublicSans font-[700] text-fmWaterWhite sm:w-[327px] md:w-[173px] h-[48px] rounded-[50px] z-10'>
                Schedule a Demo
              </button>
            </div>
            {/* Question text */}
            <div className='text-[15px] text-fmLightSanJuanBlue lg:ml-6 md:ml-[0] mt-[-20px]  sm:text-center lg:text-left sm:mb-[90px] md:mb-0'>
              <p>Have any questions? <span className='font-bold text-fmLightSanJuanBlue'>Contact Us</span></p>
            </div>
          </div>

          {/* Right Column */}
          <div className='flex flex-row justify-center items-center lg:justify-end w-[100%] lg:w-[50%]  '>
            {/* Cellphone Image */}
              <img className='ml-[20px] sm:h-[315px] sm:w-[200px] md:h-[416px] md:w-[252px] lg:h-[660px] lg:w-[400px] z-10' src={phone} alt="Cellphone Image" />
          </div>
        </div>
        




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

