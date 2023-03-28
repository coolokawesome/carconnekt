import React from 'react'
import Hero from './Hero'
import Booking from './Booking'
import HomeFleet from './HomeFleet'
import WhyUs from './WhyUs'
import Testimonials from './Testimonials'
import FAQ from './FAQ'
import DownloadApp from './DownloadApp'
import Footer from './Footer'
import PlanYourTrip from './PlanYourTrip'


function Home() {
  return (
    <>
    <div className='wrapper'>
    <Hero />
    <Booking />
    </div>
    
    <HomeFleet />
    <PlanYourTrip />
    <WhyUs />
    <Testimonials />
    <FAQ />
    <DownloadApp />
    </>
  )
}

export default Home