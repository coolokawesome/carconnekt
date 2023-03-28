import React from 'react'
import quotes from './images/quote.png'
function Testimonials() {
  return (
    <div className='Container testimonial-container pt-3 pb-5'>
      <div className='row text-center'>
        <div className='col-8 offset-2 col-lg-6 offset-lg-3'>
          <h3 className='display-5'>Client Testimonials</h3>
          <h6 className=''>See what our clients are saying about us! </h6>
          <p className='text-muted pb-4'>Discover the positive impact we've made
            on the our clients by reading through their testimonials. Our clients
            have experienced our service and results, and they're eager to share
            their positive experiences with you.</p>
        </div>
      </div>
      <div className='container'>
        <div className='row d-flex justify-content-around'>
          <div className='col-10 col-lg-5 client-box m-2 pt-3 rounded-2'>
            <p className='testimonial-text col-12'>
              Car Connekt is my go-to when looking for a rental.
              Their prices are unbeatable, I don't think I'd ever 
              go back to the others. With a large selection of inventory,
              there's so many wonderful vehicles to choose from.
              Thank you Car Connekt!
            </p>
            <div className='row'>
              <div className='col-5'>
                <p><b>Janice P.</b></p>
                <p>Toronto, ON</p>
              </div>
              <div className='col-6 text-end'>
              <img src={quotes}></img>
              </div>
            </div>
            <img className='col-6'></img>
          </div>
          <div className='col-10 col-lg-5 client-box m-2 pt-3 rounded-2'>
            <p className='testimonial-text col-12'>
              I'm impressed with how easy Car Connekt is to use.
              The user interface is intuitive and user-friendly,
              making it a breeze to navigate. I highly recommend
              the Car Connekt app to anyone looking for a quick, clean
              and cheap rental!
            </p>
            <div className='row'>
              <div className='col-5'>
                <p><b>Jonatan L.</b></p>
                <p>Ottawa, ON</p>
              </div>
              <div className='col-6 text-end'>
                <img clasName='img'src={quotes}></img>
              </div>
            </div>
            <img className='col-6'></img>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Testimonials