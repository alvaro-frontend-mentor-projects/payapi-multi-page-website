import React from 'react'
import ImageDesk from '../../assets/about/desktop/image-team-members.jpg'
import ImageMobile from '../../assets/about/mobile/image-team-members.jpg'

const AboutImage = () => {
  return (
    <div className='flex flex-col items-center mx-[-24px] md:mx-[-39px] h-[300px]'>
        <img className='md:hidden h-[300px] w-[auto]  ' src={ImageMobile} alt="" />
        <img src={ImageDesk} alt="" />
    </div>
    
  )
}

export default AboutImage