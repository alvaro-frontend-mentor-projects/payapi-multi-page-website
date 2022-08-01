import React from 'react'
import bgCircle from '../assets/shared/desktop/bg-pattern-circle.svg'
import phone from '../assets/home/desktop/illustration-phone-mockup.svg'
import Navbar from '../components/shared/Navbar'
import Hero from '../components/homePage/Hero'
import Partners from '../components/homePage/Partners'
import HomeBody from '../components/homePage/HomeBody'
import Footer from '../components/shared/Footer'



const Home = () => {
  return (
      // HOME MAIN CONTAINER
      <main className=''>
        <Hero/>
        <Partners/>
        <HomeBody/>
        <Footer/>
      </main>
  );
};

export default Home

