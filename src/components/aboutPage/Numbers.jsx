import React from 'react'

const Numbers = () => {
  return (
    <main className='flex flex-col md:flex-row mt-[48px] md:gap-2'>
        <div className='flex flex-col md:items-start'>
            <hr className='w-[327px] md:w-[223px] border border-fmLightSanJuanBlue opacity-[25%] mb-4 md:mb-0' />
            <p className='text-[16px] font-PublicSans text-fmSanJuanBlue opacity-[70%] text-center md:mt-6'>
                Team Members
            </p>
            <h1 className='text-[56px] text-center text-fmDarkPink font-SerifDisplay'>
                300+
            </h1>
            <hr className='w-[327px] md:w-[223px] border border-fmLightSanJuanBlue opacity-[25%] hidden md:block' />
        </div>

        <div className='flex flex-col md:items-start'>
            <hr className='w-[327px] md:w-[223px] border border-fmLightSanJuanBlue opacity-[25%] hidden md:block' />
            <p className='text-[16px] font-PublicSans text-fmSanJuanBlue opacity-[70%] text-center md:mt-6'>
                Offices in the US
            </p>
            <h1 className='text-[56px] text-center text-fmDarkPink font-SerifDisplay'>
                3
            </h1>
            <hr className='w-[327px] md:w-[223px] border border-fmLightSanJuanBlue opacity-[25%] hidden md:block' />
        </div>

        <div className='flex flex-col md:items-start'>
            <hr className='w-[327px] md:w-[223px] border border-fmLightSanJuanBlue opacity-[25%] hidden md:block' />
            <p className='text-[16px] font-PublicSans text-fmSanJuanBlue opacity-[70%] text-center md:mt-6'>
                Transactions analyzed
            </p>
            <h1 className='text-[56px] text-center text-fmDarkPink font-SerifDisplay'>
                10M+
            </h1>
            <hr className='w-[327px] md:w-[223px] border border-fmLightSanJuanBlue opacity-[25%] mt-4 md:mt-0' />
        </div>
        

    </main>
  )
}

export default Numbers