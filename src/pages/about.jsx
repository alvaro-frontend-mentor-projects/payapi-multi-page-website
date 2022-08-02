import React from 'react'
import AboutTitle from '../components/aboutPage/AboutTitle'
import Vision from '../components/aboutPage/Vision'
import Business from '../components/aboutPage/Business'
import AboutImage from '../components/aboutPage/AboutImage'
import Numbers from '../components/aboutPage/Numbers'
import Culture from '../components/aboutPage/Culture'
import People from '../components/aboutPage/People'
import CallAction from '../components/shared/CallAction'
import Footer from '../components/shared/Footer'

const About = () => {
  return (
    <main className=''>
      <AboutTitle/>
      <div className='flex flex-col gap-[48px] mt-[40px] lg:mt-[60px] mb-[76px] lg:mx-[95px]'>
        <Vision/>
        <Business/>
      </div>
      <AboutImage/>
      <Numbers/>
      <div className='flex flex-col gap-[48px] mt-[40px] mb-[48px] lg:mb-[100px] lg:mx-[95px]'>
        <Culture/>
        <People/>
      </div>
      <div className='flex flex-col gap-[80px]'>
        <CallAction/>
        <Footer/>
      </div>

      
      

    </main>
  )
}

export default About