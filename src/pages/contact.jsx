import React from 'react'
import ContactTitle from '../components/contactPage/ContactTitle'
import Form from '../components/contactPage/Form'
import ContactPartners from '../components/contactPage/ContactPartners'
import CallAction from '../components/shared/CallAction'
import Footer from '../components/shared/Footer'
import bgCircle from '../assets/shared/desktop/bg-pattern-circle.svg'

const Contact = () => {
  return (
    <main>
        <ContactTitle/>
        <img className=' absolute max-w-[1500px] w-[780px] md:w-[1000px] right-[-470px] top-[-650px] md:right-[-700px] md:top-[-700px] lg:w-[780px] lg:left-[800px] lg:top-[-527px] z-0' src={bgCircle} alt="" />
        <div className='flex flex-col gap-[80px]'>
          <Form/>
          <ContactPartners/>
          <CallAction/>
          <Footer/>
        </div>
        

    </main>
  )
}

export default Contact