import React from 'react'

const Business = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-between items-center md:items-start gap-[16px]'>
        <h1 className='text-[24px] md:text-[32px] text-fmSanJuanBlue font-SerifDisplay'>
            Our Business
        </h1>
        <p className='text-[15px] text-fmLightSanJuanBlue text-center md:text-left leading-[28px] md:w-[456px] lg:w-[635px] '>
            At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers.
        </p>
    </div>
  )
}

export default Business