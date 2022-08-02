import React from 'react'

const CallAction = () => {
  return (
    
    <div className='flex flex-col lg:flex-row lg:justify-between lg:w-[100%] items-center gap-6 mb-[80px]  lg:mt-[40px]'>
        <h1 className='text-[32px] md:text-[48px] font-SerifDisplay text-fmSanJuanBlue'>
            Ready to start?
        </h1>
        <div className="flex flex-col md:flex-row items-center item gap-[15px] ">
            {/* Email */}
            <input
                className="rounded-[50px] pl-5 pr-20 sm:mr-0 md:mr-[-35px] w-[327px] h-[48px] text-fmSanJuanBlue font-PublicSans font-[500] focus:outline-none z-10"
                type="text"
                placeholder="Enter email address"
            />
            {/* Button */}
            <button className=" bg-fmDarkPink hover:bg-fmCharmPink text-[15px] font-PublicSans font-[700] text-fmWaterWhite sm:w-[327px] md:w-[173px] h-[48px] md:ml-[-30px] rounded-[50px] z-10">
                Schedule a Demo
            </button>
        </div>

    </div>
  )
}

export default CallAction