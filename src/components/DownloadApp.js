import React from 'react'
import app from './images/appimg.png'
import appstore from './images/appstore.svg'
import googleplay from './images/googleplay.svg'

function DownloadApp() {
  return (
    <div className='container-fluid app-container pt-5 '>
      <div className='row align-items-center mt-5 mt-lg-1'>
        <div className='col-12 ps-auto text-center col-lg-6 text-md-start ps-lg-5'>
          <h3 className='display-5'>Get the <nobr className='special-text'>most</nobr> out of Car Connekt</h3>
          <p>The Car Connekt app offers an unparalleled driving experience.
            Our innovative features allow you to stay connected while on the go, keeping you safe and informed.
            Download the app today and get the most out of your driving experience.</p>
          <div className='row d-flex justify-content-center justify-content-lg-start'>
            <img className='p-2 appstore-img col-4 col-lg-4 col-md-3 ' src={appstore}></img>
            <img className='p-2 col-4 col-md-3 appstore-img col-lg-4' src={googleplay}></img>
          </div>

        </div>
        <div className='col-12 col-lg-6 d-flex justify-content-center '>
          <img className='img app-background-img' src={app}></img>
        </div>
      </div>
    </div>

    
  )
}

export default DownloadApp