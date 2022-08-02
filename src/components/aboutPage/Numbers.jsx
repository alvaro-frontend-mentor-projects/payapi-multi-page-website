import React from 'react'

const Numbers = () => {
  return (
    <main className='flex flex-col mt-[48px]'>
        <div className='flex flex-col'>
            <hr className='w-[327px] border border-fmLightSanJuanBlue opacity-[25%] mb-4' />
            <p className='text-[16px] font-PublicSans text-fmSanJuanBlue opacity-[70%] text-center'>
                Team Members
            </p>
            <h1 className='text-[56px] text-center text-fmDarkPink font-SerifDisplay'>
                300+
            </h1>
            <hr className='w-[327px] border border-fmLightSanJuanBlue opacity-[25%] hidden' />
        </div>

        <div className='flex flex-col'>
            <hr className='w-[327px] border border-fmLightSanJuanBlue opacity-[25%] hidden' />
            <p className='text-[16px] font-PublicSans text-fmSanJuanBlue opacity-[70%] text-center'>
                Offices in the US
            </p>
            <h1 className='text-[56px] text-center text-fmDarkPink font-SerifDisplay'>
                3
            </h1>
            <hr className='w-[327px] border border-fmLightSanJuanBlue opacity-[25%] hidden' />
        </div>

        <div className='flex flex-col'>
            <hr className='w-[327px] border border-fmLightSanJuanBlue opacity-[25%] hidden' />
            <p className='text-[16px] font-PublicSans text-fmSanJuanBlue opacity-[70%] text-center'>
                Transactions analyzed
            </p>
            <h1 className='text-[56px] text-center text-fmDarkPink font-SerifDisplay'>
                10M+
            </h1>
            <hr className='w-[327px] border border-fmLightSanJuanBlue opacity-[25%] mt-4' />
        </div>
        

    </main>
  )
}

export default Numbers