import React from 'react'
import ContactTitle from '../components/contactPage/ContactTitle'
import Form from '../components/contactPage/Form'
import ContactPartners from '../components/contactPage/ContactPartners'
import CallAction from '../components/shared/CallAction'
import Footer from '../components/shared/Footer'

const Contact = () => {
  return (
    <main>
        <ContactTitle/>
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