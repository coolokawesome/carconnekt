import React from 'react'
import banner from './images/carbanner.png'
import Teamcard from './teamcard'
import face1 from './images/faces/1.jpg'
import face2 from './images/faces/2.jpg'
import face3 from './images/faces/3.jpg'
import face4 from './images/faces/4.jpg'
import face5 from './images/faces/5.jpg'
import face6 from './images/faces/6.jpg'
import brand1 from './images/brand1.png'
import brand2 from './images/brand2.png'
import brand3 from './images/brand3.png'

function Team() {
  return (
    <>
    <div className='container pt-3 pb-5'>
      <div className='row'>
        <div className='col'>
          <h3 className='display-5 text-center mt-2'>Meet Our Team</h3>
          <h5 className='text-center mb-5'>Get to know the amazing individuals behind the success of our organization</h5>
          <div className='row'>
          <Teamcard 
          img={face1}
          name='Nishanth Avva'
          pos='Administration'
          />
          <Teamcard 
          img={face2}
          name='Jennifer Wistern'
          pos='Sales Manager'
          />
          <Teamcard 
          img={face3}
          name='Jake Codrington'
          pos='Lead Mechanic'
          />

          <Teamcard 
          img={face5}
          name='Shelly Andrews'
          pos='Car Detailist'
          />
                    <Teamcard 
          img={face4}
          name='Elijah Longpré'
          pos='CEO'
          />
          <Teamcard 
          img={face6}
          name='Marie Kotsovos'
          pos='Photographer'
          />
          </div>
        </div>
      </div>
    </div>
    <div className='bg-dark text-light pt-5 pb-5'>
    <div className='row'>
            <div className='col-12'>
            <h5 className='display-6 text-center join-container '>Join over 150 companies currently working with us</h5>
            </div>
          </div>
        </div>
        <div className='container mb-5 border-bottom border-4'>

          <div className='row align-items-center justify-content-center'>
            <div className='col-12 col-md-6 col-lg-3 p-5'>
              <img className='img img-fluid' src={brand1}></img>
            </div>
            <div className='col-12 col-md-6 col-lg-3 p-5'>
              <img className='img img-fluid' src={brand2}></img>
            </div>
            <div className='col-12 col-md-6 col-lg-3 offset-lg-0 p-5'>
              <img className='img img-fluid' src={brand3}></img>
            </div>
          </div>
        </div>
    </>
  )
}

export default Team