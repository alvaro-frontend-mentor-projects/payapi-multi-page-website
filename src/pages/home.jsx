import React from 'react'
import bgCircle from '../assets/shared/desktop/bg-pattern-circle.svg'
import phone from '../assets/home/desktop/illustration-phone-mockup.svg'
const Home = () => {
  return (
    

      // HOME MAIN CONTAINER
      <main className='w-[100wv] h-screen pt-[150px]  mt-[-150px] bg-desktop-circle bg-no-repeat bg-[right_-200px_top_-300px] '>


        {/* Background Circle Image - position absolute */}

        <div className=' flex flex-row mx-[150px] justify-center      '>
          {/* Left Column */}
          <div className='flex flex-col justify-center align-middle text-[72px] w-[50%] font-serif leading-[72px] font-[500] font-SerifDisplay'>
          Start building with our APIs for absolutely free.
          </div>
          {/* Right Column */}
          <div>
            <img src={phone} alt="" />
          </div>
        </div>
        
       <div className='h-[472px] bg-fmMirageBlue overflow-hidden relative' >
        <img className='absolute top-[-500px] left-[-300px]' src={bgCircle} alt="" />

       </div>
        
  

      </main>


    
  )
}

export default Home

