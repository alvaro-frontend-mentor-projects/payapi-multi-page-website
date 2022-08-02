import React from 'react'
import ImageDesk from '../../assets/about/desktop/image-team-members.jpg'
import ImageMobile from '../../assets/about/mobile/image-team-members.jpg'

const AboutImage = () => {
  return (
    <div className='flex flex-col items-center mx-[-24px] h-[300px]'>
        <img className=' h-[300px] w-[auto]  ' src={ImageMobile} alt="" />
    </div>
  )
}

export default AboutImage