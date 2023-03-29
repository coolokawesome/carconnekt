import React from 'react'
import logo from './images/logo.png'
function Footer() {
  return (
    <div className='footer-container'>
    <div className='container text-center text-md-start'>
        <div className='row'>
            <div className='col-12 col-md-6 col-xl-3 mb-5'>
                <h3 className='text-info'><img className='col-10'src={logo}></img></h3>
                <div> <p><b>The cheapest, easiest car rental service</b></p></div>
                <div><a><p className='m-auto special-text'><i class="special-text fa-solid fa-phone pe-1"></i>{'(416) 778-0018'}</p></a></div>
               <div> <a className='m-auto text-decoration-none email'><i class="fa-solid fa-envelope pe-1"></i>info@carconnekt.ca</a></div>
              <div className='m-auto'><a>designed by syrussamson.ca</a></div>
            </div>
            <div className='col-12 col-md-6 col-xl-3 mb-5'>
                <h3 className=' text-info'><i class="fa-solid fa-building pe-1"></i>Branches</h3>
                <div><a>Toronto</a></div>
                <div><a>Thunder Bay</a></div>
                <div><a>Calgary</a></div>
                <div><a>Victoria</a></div>
                <div className='pt-3'><a className=' text-info text-decoration-none'><h3><i class="fa-solid fa-suitcase pe-1"></i>Careers</h3></a></div>
            </div>
            <div className='col-12 col-md-6 col-xl-3 mb-5'>
                <h3 className='text-info'><i class="fa-solid fa-clock pe-1 "></i>Working Hours</h3>
                <div className='row'>
                    <p className='col-6 text-start'>Mon - Fri: </p><p  className='text-end text-md-start col-6' >8am - 8pm</p>
                    <p className='col-6 text-start'>Sat: </p><p className='text-end text-md-start  col-6' >9am - 5pm</p>
                    <p className='col-6 text-start'>Sun: </p><p className='text-end text-md-start  col-6' >Closed</p>
                </div>
            </div>
            <div className='col-12 col-md-6 col-xl-3 mb-5 px-2 m-0'>
                <h3 className='text-center text-md-start text-info'><i class="fa-solid fa-envelope pe-1"></i>Subscribe</h3>
                <p>weekly newsletter with promotions. opt out at any time.</p>
                <div className='row container'>
                    
                    <input placeholder='enter your email' className='form-control'></input>
                    <button className='col-12 btn btn-primary mt-2'>Submit</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer