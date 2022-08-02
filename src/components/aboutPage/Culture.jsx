import React from 'react'

const Culture = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-between items-center md:items-start gap-[16px]'>
        <h1 className='text-[24px] md:text-[32px] text-fmSanJuanBlue font-SerifDisplay'>
            The Culture
        </h1>
        <p className='text-[15px] text-fmLightSanJuanBlue text-center md:text-left leading-[28px] md:w-[456px] lg:w-[635px] '>
        We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title.
        </p>
    </div>
  )
}

export default Culture