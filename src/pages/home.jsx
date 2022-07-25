import React from 'react'
import bgCircle from '../assets/shared/desktop/bg-pattern-circle.svg'
import phone from '../assets/home/desktop/illustration-phone-mockup.svg'
const Home = () => {
  return (
    

      // HOME MAIN CONTAINER
      <main className='w-[100wv] h-screen pt-[150px]  mt-[-150px] bg-desktop-circle bg-no-repeat bg-[right_-150px_top_-200px] '>


        {/* [[[[[[ HERO SECTION ]]]]]] */}
        <div className=' flex flex-row mx-[150px] justify-center h-[550px]'>
          {/* Left Column */}
          <div className='flex flex-col justify-center align-middle w-[50%] gap-10'>
            {/* Main Text */}
            <div className='text-[72px]  leading-[72px] font-[500] font-SerifDisplay text-fmSanJuanBlue'>
              Start building with our APIs for absolutely free.
            </div>
            {/* Email Input & Button Row Container */}
            <div className='flex flex-row  '>
              {/* Email */}
              <input className='rounded-[50px] pl-5 pr-20 mr-[-35px]' type="text" placeholder='Enter email address' />
              {/* Button */}
              <button className=' bg-fmDarkPink text-[15px] font-[700] text-fmWaterWhite w-[173px] h-[48px] rounded-[50px]'>
                Schedule a Demo
              </button>
            </div>
            {/* Question text */}
            <div className='text-[15px] text-fmLightSanJuanBlue ml-6 mt-[-20px]'>
              <p>Have any questions? <span className='font-bold text-fmSanJuanBlue'>Contact Us</span></p>
            </div>
          </div>

          {/* Right Column */}
          <div className='flex flex-row justify-end w-[50%]  '>
            {/* Cellphone Image */}
         
              <img className='h-[660px] w-[419px] mt-[-30px]' src={phone} alt="Cellphone Image" />
          
            
          </div>
        </div>
        
       <div className='h-[472px] bg-fmMirageBlue overflow-hidden relative' >
        <img className='absolute top-[-500px] left-[-300px]' src={bgCircle} alt="" />

       </div>
        
  

      </main>


    
  )
}

export default Home

