import React from 'react'

const People = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-between items-center md:items-start gap-[16px]'>
        <h1 className='text-[24px] md:text-[32px] text-fmSanJuanBlue font-SerifDisplay'>
            The People
        </h1>
        <p className='text-[15px] text-fmLightSanJuanBlue text-center md:text-left leading-[28px] md:w-[456px] lg:w-[635px]'>
        We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills.
        </p>
    </div>
  )
}

export default People