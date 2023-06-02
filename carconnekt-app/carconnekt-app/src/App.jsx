import { useState } from 'react'
import './App.sass'
import CurrentCarComponent from './CurrentCar'
function App() {


  return (
  <div> 
    <div className='container nav-container d-flex justify-content-between'>
      <h1 className='left-nav'>Welcome Back</h1>
      <div className='right-nav d-flex align-items-center'>
         <div className='location-nav'><a><i class="fa-solid fa-location-dot me-2 "></i>Location</a></div>
      </div>
    </div>
    <div className='dashboard container-fluid'>
      <CurrentCarComponent />
    </div>
  </div>
  )
}

export default App
