import React from 'react'
// Import logos
import tesla from '../../assets/shared/desktop/tesla.svg'
import hp from '../../assets/shared/desktop/hp.svg'
import google from '../../assets/shared/desktop/google.svg'
import nvidia from '../../assets/shared/desktop/nvidia.svg'
import oracle from '../../assets/shared/desktop/oracle.svg'
import microsoft from '../../assets/shared/desktop/microsoft.svg'

const ContactPartners = () => {
  return (
    <div className='flex flex-col items-center md:mb-[100px] md:mt-[64px] gap-[32px]'>
        <h1 className='text-[24px] md:text-[24px] lg:text-[56px] font-SerifDisplay text-fmSanJuanBlue opacity-[75%] leading-[32px] md:leading-[32px] text-center lg:text-left md:w-[445px]'>
            Join the thousands of innovators already building with us
        </h1>
        <div className="grid grid-cols-2 w-[280px] md:w-[541px] md:grid-cols-3 gap-[42px] ">
                        <img src={tesla} alt="tesla logo" />
                        <img src={microsoft} alt="microsoft logo" />
                        <img src={hp} alt="hp logo" />
                        <img src={oracle} alt="oracle logo" />
                        <img src={google} alt="google logo" />
                        <img src={nvidia} alt="nvidia logo" />                   
        </div>
    </div>
  )
}

export default ContactPartners