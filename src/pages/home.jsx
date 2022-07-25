import React from 'react'
import bgCircle from '../assets/shared/desktop/bg-pattern-circle.svg'
import phone from '../assets/home/desktop/illustration-phone-mockup.svg'
import Navbar from '../components/Navbar'
const Home = () => {
  return (
    

      // HOME MAIN CONTAINER
      <main className='w-[100wv] h-screen  relative  overflow-x-hidden'>

        <Navbar/>
        {/* md:bg-tablet-circle lg:bg-desktop-circle bg-no-repeat md:bg-[length:900px_900px] md:bg-[left_-10px_top_-400px] lg:bg-[right_-150px_top_-200px] */}
      
      {/* <div
      className='w-[100%] h-[100%] bg-no-repeat absolute right-0 top-0 z-0'
        style={{backgroundImage: `url(${bgCircle})`}}>

      </div> */}

      {/* Circle Bacckground image - absolute position and using index-z of 0 to be places behind all other elements with z-index of 10  - img relative parent is main container with overflow-x-hidden */}
      <img className='absolute right-[-150px] top-[-150px] z-0' src={bgCircle} alt="" />


        {/* [[[[[[ HERO SECTION ]]]]]] */}
        <div className=' flex flex-row md:mx-[80px] lg:mx-[150px] justify-center h-[600px] '>
          {/* Left Column */}
          <div className='flex flex-col justify-center align-middle w-[50%] gap-10'>
            {/* Main Text */}
            <div className='text-[72px]  leading-[72px] font-[500] font-SerifDisplay text-fmSanJuanBlue'>
              Start building with our APIs for absolutely free.
            </div>
            {/* Email Input & Button Row Container */}
            <div className='flex flex-row  '>
              {/* Email */}
              <input className='rounded-[50px] pl-5 pr-20 mr-[-35px] text-fmSanJuanBlue font-PublicSans font-[500] focus:outline-none z-10' type="text" placeholder='Enter email address' />
              {/* Button */}
              <button className=' bg-fmDarkPink hover:bg-fmCharmPink text-[15px] font-PublicSans font-[700] text-fmWaterWhite w-[173px] h-[48px] rounded-[50px] z-10'>
                Schedule a Demo
              </button>
            </div>
            {/* Question text */}
            <div className='text-[15px] text-fmLightSanJuanBlue ml-6 mt-[-20px]'>
              <p>Have any questions? <span className='font-bold text-fmLightSanJuanBlue'>Contact Us</span></p>
            </div>
          </div>

          {/* Right Column */}
          <div className='flex flex-row justify-end w-[50%]  '>
            {/* Cellphone Image */}
              <img className='h-[660px] w-[400px] mt-[-30px] z-10' src={phone} alt="Cellphone Image" />
          </div>
        </div>
        
       <div className='h-[472px] bg-fmMirageBlue overflow-hidden relative' >
        <img className='absolute top-[-500px] left-[-300px]' src={bgCircle} alt="" />

       </div>
        
       

      </main>


    
  )
}

export default Home

