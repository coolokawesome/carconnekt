import React from 'react'
import banner from './images/carbanner.png'
import thumb1 from './images/thumb7.png'
import thumb2 from './images/thumb8.png'
import thumb3 from './images/thumb9.png'
import Team from './Team'

function About() {
  return (
    <>
      <div className='banner-container '>
        <img className='img-img-fluid banner-img' src={banner}></img>
      </div>
      <div className='about-container py-3 '>
        <div className='container '>
          <div className='row'>
            <div className='col'>
              <h3 className='display-5 text-center'>About Us</h3>
              <p className='col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-muted'>Car Connekt was founded in 2018 by Elijah Longpré, a man with a passion for innovation to revolutionize the driving experience. With a focus on developing cutting-edge technology and a user-friendly app, the team at Car Connekt is committed to empowering drivers with the tools they need to stay safe, informed, and connected. Today, Car Connekt has become a leading name in the automotive rental industry, offering a range of advanced features and services that have transformed the way people drive.</p>
            </div>
          </div>
        </div>
        <div className=' pt-3 pb-2 '>
          <div className='container border-bottom border-4 '>
            <div className='row text-center pt-4 pb-5 mb-3'>
              <div className='col-12 col-md-6 col-lg-4'>
                <img className='about-thumb col-12 img img-fluid  mt-4' src={thumb1}></img>
                <h5 className='about-thumbs'>26 locations</h5>
                <p>We offer a large fleet of vehicles available for rent to meet your needs.</p>
              </div>
              <div className='col-12 col-md-6 col-lg-4'>
                <img className='about-thumb col-12 img img-fluid mt-4' src={thumb2}></img>
                <h5 className='about-thumbs'>300+ Rentals</h5>
                <p>We have multiple locations conveniently situated for easy access to our rental services.</p>
              </div>
              <div className='col-12 col-md-6 col-lg-4 offset-0 offset-md-3 offset-lg-0'>
                <img className='about-thumb col-12 img img-fluid  mt-4' src={thumb3}></img>
                <h5 className='about-thumbs'>Unlimited Distance</h5>
                <p>Drive as far as you need to with no distance limitations or added fees.</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <Team />
    </>
  )
}

export default About