import React from 'react'
import fleet from './images/fleet.png'
import thumb4 from './images/thumb4.png'
import thumb5 from './images/thumb5.png'
import thumb6 from './images/thumb6.png'
import { useNavigate } from 'react-router-dom'
function WhyUs() {
    let navigate = useNavigate()
    const routeChange = () => {
        let path = '/Contact'
        navigate(path)
    }
  return (

    <>
    <div className='col-12  mb-5'>
            <img className='img img-fluid' src={fleet}></img>
        </div>
    <div className='container'>
    <div className='row text-center'>
        
        <div className='col-12 col-md-6 text-center text-lg-start'>
            <h3 >Why Choose Car Connekt?</h3>
            <h3 className='display-5'>The <nobr className='special-text'>best</nobr> deals you will ever find.</h3>
            <p>Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.</p>

            <button onClick={routeChange}
             className='btn btn-primary'>{'Find out more >'}</button>
        </div>
        <div className='col-12 col-md-5 offset-md-1 text-center text-lg-start mt-5 mb-5'>
            <div className='row '>
                <div className='col-3'>
                <img  src={thumb6}></img>
                </div>
                <div className='col-8 col-md-8 col-md-9'>
                    <h5><b>Cross Country Drive</b></h5>
                    <p>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
                </div>
            </div>
            <div className='row'>
            <div className='col-3'>
                <img  src={thumb5}></img>
                </div>
                <div className='col-8 col-md-8 col-md-9'>
                    <h5><b>All Inclusive Pricing</b></h5>
                    <p>Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</p>
                </div>
            </div>
            <div className='row'>
            <div className='col-3'>
                <img  src={thumb4}></img>
                </div>
                <div className='col-8 col-md-8 col-md-9'>
                    <h5><b>No Hidden Fees</b></h5>
                    <p>Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.</p>
                </div>
            </div>
        </div>
    </div>

    </div>
    </>

    )
}

export default WhyUs