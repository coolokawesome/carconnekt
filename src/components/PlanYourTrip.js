import React from 'react'
import thumb1 from './images/thumb1.png'
import thumb2 from './images/thumb2.png'
import thumb3 from './images/thumb3.png'
function PlanYourTrip() {
  return (
    <div className='plan-container pt-5'>
        <div className='container '>
    <div className='row'>
      <div className='col-12 text-center'>
        <h5>Plan your trip today</h5>
        <h3 className='display-5'>Fast and Effortless Rentals</h3>
      </div>
    </div>
    <div className='row text-center pb-5'>
      <div className='col-12 col-md-6 col-lg-4'>
        <img className='col-12 img img-fluid thumb-img mt-4' src={thumb1}></img>
        <h4>Select your Car</h4>
        <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
      </div>
      <div className='col-12 col-md-6 col-lg-4'>
        <img className='col-12 img img-fluid thumb-img mt-4' src={thumb2}></img>
        <h4>24/7 Operators</h4>
        <p>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
      </div>
      <div className='col-12 col-md-6 col-lg-4 offset-0 offset-md-3 offset-lg-0'>
        <img className='col-12 img img-fluid thumb-img mt-4' src={thumb3}></img>
        <h4>Unlimited Distance</h4>
        <p>Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
      </div>
    </div>
  </div>
    </div>
  )
}

export default PlanYourTrip