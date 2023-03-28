import React from 'react'
import banner from '../images/carbanner.png'
import Testimonials from '../Testimonials'
function NavTestimonials() {
  return (
<>
<div className='banner-container'>
<img className='img-img-fluid banner-img' src={banner}></img>
</div>
<Testimonials/>
</>
  )
}

export default NavTestimonials