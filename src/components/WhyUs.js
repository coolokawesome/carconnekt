import React from 'react'
import fleet from './images/fleet.png'
function WhyUs() {
  return (

    <>
    <div className='container'>
    <div className='row text-center'>
        <div className='col-12 mt-5 mb-5'>
            <img className='img img-fluid' src={fleet}></img>
        </div>
        <div className='col-12 col-md-6 text-center text-lg-start'>
            <h3 >Why Choose Car Connekt?</h3>
            <h3 className='display-5'><b>Best Deals you will ever find</b></h3>
            <p>Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.</p>
            <button className='btn'>{'Find out more >'}</button>
        </div>
        <div className='col-12 col-md-5 offset-md-1 text-center text-lg-start'>
            <div className='row'>
                <div className='col-12 col-md-3'>img</div>
                <div className='col-12 col-md-8 col-md-9'>
                    <h5>Cross Country Drive</h5>
                    <p>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 col-md-3'>img</div>
                <div className='col-12 col-md-8 col-md-9'>
                    <h5>Cross Country Drive</h5>
                    <p>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 col-md-3'>img</div>
                <div className='col-12 col-md-8 col-md-9'>
                    <h5>Cross Country Drive</h5>
                    <p>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
                </div>
            </div>
        </div>
    </div>

    </div>
    </>

    )
}

export default WhyUs