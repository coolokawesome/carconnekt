import React from 'react'

function Footer() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-12 col-md-6 col-xl-3'>
                <h3>Car Connekt</h3>
                <div> <p><b>The cheapest, easiest car rental service</b></p></div>
                <div><a> <i></i><p>{'(416) 778-0018'}</p></a></div>
               <div> <a><i></i>info@carconnekt.ca</a></div>
              <div><a>designed by Syrus Samson</a></div>
            </div>
            <div className='col-12 col-md-6 col-xl-3'>
                <h3>Branches</h3>
                <div><a>Toronto</a></div>
                <div><a>Calgary</a></div>
                <div><a>B.C</a></div>
                <a><h3>Careers</h3></a>
            </div>
            <div className='col-12 col-md-6 col-xl-3'>
                <h3>Working Hours</h3>
                <div className='row'>
                    <p className='col-6'>Mon - Fri: </p><p  className='col-6' >8am - 8pm</p>
                    <p className='col-6'>Sat: </p><p className='col-6' >9am - 5pm</p>
                    <p className='col-6'>Sun: </p><p className='col-6' >Closed</p>
                </div>
            </div>
            <div className='col-12 col-md-6 col-xl-3'>
                <h3>Subscribe</h3>
                <div className='row'>
                    <p>weekly newsletter with promotions. opt out at any time.</p>
                    <input></input>
                    <button className='col-12'>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer