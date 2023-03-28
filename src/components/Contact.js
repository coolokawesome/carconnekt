import React from 'react'
import banner from './images/carbanner.png'

function Contact() {
  return (
    <>
    <div className='banner-container'>
    <img className='img-img-fluid banner-img' src={banner}></img>
    </div>
    <div className='container py-3 mb-5'>
      <div className='row'>
        <div className='col-12'>
          <h3 className='display-5 text-center '>Need Additional Information?</h3>
          <h5 className='text-center mb-4'>Please do not hesitate to reach out! fill out the form below and we will reply within 24 hours</h5>
          <div className='container text-center'>
            <p><i class="fa-solid fa-phone pe-1"></i>{'(416) 778-0018'}</p>
            <p><i class="fa-solid fa-envelope pe-1"></i>{'info@carconnekt.ca'}</p>
            <p><i class="fa-solid fa-building pe-1"></i>{'866 The Queensway, Toronto, ON'}</p>
          </div>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-md-6 my-2'>
                <p className='my-auto'>Name:</p>
                <input className='form-control' placeholder='Name'></input>
              </div>
              <div className='col-12 col-md-6  my-2'>
                <p className='my-auto'>Email:</p>
                <input className='form-control' placeholder='Email'></input>
              </div>
              <div className='col-12 col-md-6  my-2'>
                <p className='my-auto'>Phone:</p>
                <input className='form-control' placeholder='Phone'></input>
              </div>
              <div className='col-12 col-md-6  my-2'>
                <p className='my-auto'>Concern:</p>
                <input className='form-control' placeholder='Concern'></input>
              </div>
              <div className='col-12  my-2'>
                <p className='my-auto'>Your Message:</p>
                <textarea rows={6} className='form-control' placeholder='Your Message'></textarea>
              </div>
              <div className='col-12  my-2'>
                <button className='btn btn-primary offset-12'>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact