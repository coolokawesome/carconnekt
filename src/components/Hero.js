import React from 'react'
import carImage from './images/carHero.png'
import '../index.css'
import audi from './images/brands/audi.png'
import bmw from './images/brands/bmw.png'
import ford from './images/brands/ford.png'
import honda from './images/brands/honda.png'
import hyundai from './images/brands/hyundai.png'
import jeep from './images/brands/jeep.png'
import mercedes from './images/brands/mercedes.png'
import mini from './images/brands/mini.png'
import mitsubishi from './images/brands/mitsubishi.png'
import nissan from './images/brands/nissan.png'
import tesla from './images/brands/tesla.png'
import vw from './images/brands/vw.png'
function Hero() {
  /*Your next adventure awaits
Book your ride today
Experience Your Dream Ride with Unbeatable Prices, Unlimited kilometers, Flexible Pick-Up Options, and More*/ 
  return (
  <>
    <div className='hero-container pt-5 pb-5 d-flex align-content-around flex-wrap'>
      <div className='container container-hero-top'>
      <div className='row'>
        <div className=' col-12 col-xl-8 text-center text-xl-start'>
          <h1 className='display-3'>Experience the ride of your dreams with<a className='special-text'> no additional fees.</a></h1>
          
        </div>
        <div className='perks-container col-0 col-lg-2 offset-lg-2 text-lg-start align-self-center'>
          <div className=''>
          < b className=''><p><i class="fa-solid fa-building pe-2"></i>26 locations</p>
          <p><i class="fa-solid fa-key pe-2"></i>300+ rentals</p>
          <p><i class="fa-solid fa-car pe-2"></i>Unlimited distance</p></b>
          </div>
        </div>
      </div>
      </div>
      <div className='container container-hero-middle'>
      <div className='row justify-content-center'>
        <div className='col-12 col-xl-3 text-center text-xl-start'>

          <p>Car Connekt is a premium car rental service currently operating out of 26 Cities across North America. </p>
          <p>Join thousands of Canadians experiencing our unbeatable prices, unlimited kilometers, flexible pick-up options, and more.</p>
          <a href='#book'><button className='btn btn-primary btn-lg'>Book your ride today</button></a>
        </div>
        
        <div className='col-0 col-lg-7 offset-lg-1'>
          <img className='img img-fluid hero-img' src={carImage}></img>
        </div>
      </div>
      </div>
      <div className='container brand-container'>
      <div className='row justify-content-around mx-5 px-5 container-hero-bottom'>
        <img className='img img-fluid brand' src={audi}></img>
        <img className='img img-fluid brand' src={ford}></img>
        <img className='img img-fluid brand' src={honda}></img>
        <img className='img img-fluid brand' src={hyundai}></img>
        <img className='img img-fluid brand' src={jeep}></img>
        <img className='img img-fluid brand' src={mini}></img>
        <img className='img img-fluid brand' src={nissan}></img>
        <img className='img img-fluid brand' src={tesla}></img>
        <img className='img img-fluid brand' src={vw}></img>
      </div>
      </div>
    </div>
  </>
  );
}

export default Hero