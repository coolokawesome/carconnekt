import React from 'react'
import banner from './images/carbanner.png'
import Teamcard from './teamcard'
import face1 from './images/faces/1.jpg'
import face2 from './images/faces/2.jpg'
import face3 from './images/faces/3.jpg'
import face4 from './images/faces/4.jpg'
import face5 from './images/faces/5.jpg'
import face6 from './images/faces/6.jpg'

function Team() {
  return (
    <>
    <div className='banner-container'>
<img className='img-img-fluid banner-img' src={banner}></img>
</div>
    <div className='container pt-3 pb-5'>
      <div className='row'>
        <div className='col'>
          <h3 className='display-5 text-center mt-2'>Meet Our Team</h3>
          <h5 className='text-center mb-5'>Get to know the amazing individuals behind the success of our organization</h5>
          <div className='row'>
          <Teamcard 
          img={face1}
          name='Nishanth Avva'
          pos='Mechanic'
          />
          <Teamcard 
          img={face2}
          name='Jennifer Wistern'
          pos='Sales Manager'
          />
          <Teamcard 
          img={face3}
          name='Jake Codrington'
          pos='Administration'
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
    </>
  )
}

export default Team