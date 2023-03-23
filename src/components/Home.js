import React from 'react'
import Hero from './Hero'
import Booking from './Booking'
import HomeFleet from './HomeFleet'

function Home() {
  return (
    <>
    <div className='wrapper'>
    <Hero />
    <Booking />
    </div>
    <div className='container'>
      <div className='row'>
        <div className='col-12 text-center'>
          <h5>Plan your trip today</h5>
          <h3>Fast and Effortless Rentals</h3>
        </div>
      </div>
      <div className='row text-center'>
        <div className='col-12 col-md-6 col-lg-4'>
          <img className='col-12' src=''></img>
          <h4>Select your Car</h4>
          <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
        </div>
        <div className='col-12 col-md-6 col-lg-4'>
          <img className='col-12' src=''></img>
          <h4>24/7 Operators</h4>
          <p>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
        </div>
        <div className='col-12 col-md-6 col-lg-4 offset-0 offset-md-3 offset-lg-0'>
          <img className='col-12' src=''></img>
          <h4>Unlimited Distance</h4>
          <p>Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
        </div>
      </div>
    </div>
    <HomeFleet />
    </>
  )
}

export default Home