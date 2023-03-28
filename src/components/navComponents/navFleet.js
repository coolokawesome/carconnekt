import React from 'react'
import HomeFleet from '../HomeFleet'
import banner from '../images/carbanner.png'
function navFleet() {
  return (
<>
<div className='banner-container'>
<img className='img-img-fluid banner-img' src={banner}></img>
</div>
<HomeFleet></HomeFleet>
</>
  )
}

export default navFleet