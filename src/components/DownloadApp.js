import React from 'react'
import app from './images/appimg.png'
import appstore from './images/appstore.svg'
import googleplay from './images/googleplay.svg'

function DownloadApp() {
  return (
    <div className='app-container'>
      <div className='container app-container mt-5 mb-5'>
      <div className='row'>
        <div className='col-12 text-center col-lg-6 text-md-start'>
          <h3>Get the most out of the Car Connekt App</h3>
          <p>The Car Connekt app offers an unparalleled driving experience.
            Our innovative features allow you to stay connected while on the go, keeping you safe and informed.
            Download the app today and get the most out of your driving experience.</p>
          <div className='row d-flex justify-content-center justify-content-lg-start mt-5'>
            <img className='p-2 appstore-img col-4 align-items-center text-lg-start' src={appstore}></img>
            <img className='p-2 col-4 appstore-img text-center text-lg-start' src={googleplay}></img>
          </div>

        </div>
        <div className='col-0 col-lg-6 d-flex justify-content-center '>
          <img className='img app-background-img' src={app}></img>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default DownloadApp