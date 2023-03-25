import React from 'react'

function Testimonials() {
  return (
    <div className='Container'>
      <div className='row text-center'>
        <div className='col-8 offset-2 col-lg-6 offset-lg-3'>
          <h3 className='display-3'>Client Testimonials</h3>
          <h6 className=''><b>See what our clients are say about us</b></h6>
          <p className='text-muted'>Discover the positive impact we've made 
          on the our clients by reading through their testimonials. Our clients 
          have experienced our service and results, and they're eager to share 
          their positive experiences with you.</p>
        </div>
      </div>
      <div className='container row'>
        <div className='col-12 col-lg-4 offset-lg-2'>
            <div className='col-12'>
              <p className='testimonial-text col-12'>
                Lorem ipsum text here lorem the lorem text is lorem 
                cat jumped over the bridge we loved our service! we loved how cheap it was! thank you car connekt
              </p>
              <img className='col-2'></img>
              <div className='col-4'>
                <p><b>Name</b></p>
                <p>Location</p>
              </div>
              <img className='col-6'></img>
            </div>
          </div>
          <div className='col-12 col-lg-4'>
            <div className='col-12'>
              <p className='testimonial-text col-12'>
                Lorem ipsum text here lorem the lorem text is lorem 
                cat jumped over the bridge we loved our service! we loved how cheap it was! thank you car connekt
              </p>
              <img className='col-2'></img>
              <div className='col-4'>
                <p><b>Name</b></p>
                <p>Location</p>
              </div>
              <img className='col-6'></img>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Testimonials