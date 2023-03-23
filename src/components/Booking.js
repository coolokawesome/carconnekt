import React from 'react'

function Booking() {
  return (
    <section id='book'>
      <div className='container'>
        <div className='row'>
          <h3>Plan your trip</h3>
        </div>
        <div className='row'>
          <div className='col-12 col-md-6 col-lg-4'>
            <p className='booking-text'>Select Your Car</p>
            <select class="form-select" aria-label="Default select example">
              <option selected>Select your car</option>
              <option value="1">Mercedes</option>
              <option value="2">BMW</option>
              <option value="3">Mini</option>
            </select>
          </div>
          <div className='col-12 col-md-6 col-lg-4'>
            <p className='booking-text'>Pick-Up Location</p>
            <select class="form-select" aria-label="Default select example">
              <option selected>Select your car</option>
              <option value="1">Mercedes</option>
              <option value="2">BMW</option>
              <option value="3">Mini</option>
            </select>
          </div>
          <div className='col-12 col-md-6 col-lg-4'>
            <p className='booking-text'>Drop-Off Location</p>
            <select class="form-select" aria-label="Default select example">
              <option selected>Select your car</option>
              <option value="1">Mercedes</option>
              <option value="2">BMW</option>
              <option value="3">Mini</option>
            </select>
          </div>
          <div className='col-12 col-md-6 col-lg-4'>
            <p className='booking-text'>Departure Date</p>
            <select class="form-select" aria-label="Default select example">
              <option selected>Select your car</option>
              <option value="1">Mercedes</option>
              <option value="2">BMW</option>
              <option value="3">Mini</option>
            </select>
          </div>
          <div className='col-12 col-md-6 col-lg-4'>
            <p className='booking-text'>Arrival Date</p>
            <select class="form-select" aria-label="Default select example">
              <option selected>Select your car</option>
              <option value="1">Mercedes</option>
              <option value="2">BMW</option>
              <option value="3">Mini</option>
            </select>
          </div>
          <div className='col-12 col-md-6 col-lg-4'>
            <button>Book Now</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Booking