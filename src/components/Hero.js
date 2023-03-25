import React from 'react'
import carImage from './images/carHero.png'
import '../index.css'
function Hero() {
  return (
<div class=" container-fluid hero-container" id="home">
  <div class="row">
    <div class="col-12 col-lg-5 text-center text-lg-start d-flex align-items-center justify-content-center hero-info ps-0 ps-lg-5">
      <div className=''>
        <h1 className='display-5'>Your <a className='special-text'>next</a> adventure awaits</h1>
        <h2>Book your ride today</h2>
        <p className=' mx-sm-5 mx-lg-0 hero-txt'>Experience Your Dream Ride with Unbeatable Prices, Unlimited kilometers, Flexible Pick-Up Options, and More</p>
        <div className='button-container'>
          <button type="button" class="btn btn-primary ms-0 my-3 btn-lg">Book ride</button>
          <button type="button" class="btn btn-secondary mx-4 my-3 btn-lg">Learn more</button>
        </div>
      </div>
    </div>
    <div class="col-12 col-lg-7 ">
      <img class="hero-bg img-fluid hero-img" src={carImage} alt="Car"></img>
    </div>
  </div>
</div>
  );
}

export default Hero